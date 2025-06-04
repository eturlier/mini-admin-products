import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppError } from '@core/common/domain/error';
import { Product } from '@core/product/domain/product';
import { GetProductByIdUseCase } from '@core/product/use-cases/get-product-by-id.use-case';
import { Breadcrumb } from '@ui/common/breadcrumb/breadcrumb';
import { LoadingState } from '@ui/common/loading/loading-state';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, Breadcrumb, LoadingState],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  // Use signals for reactive state management
  public product = signal<Product | null>(null);
  public loading = signal<boolean>(false);
  public error = signal<AppError | null>(null);
  public notFound = signal<boolean>(false);

  private getProductByIdUseCase: GetProductByIdUseCase = inject(
    GetProductByIdUseCase
  );

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.loadProduct();
  }

  /**
   * Load product details from the ID in the route parameters
   */
  public async loadProduct(): Promise<void> {
    const productId = this.route.snapshot.paramMap.get('id');
    if (!productId) {
      this.setNotFound();
      return;
    }

    try {
      this.setLoadingState();

      const product = await this.getProductByIdUseCase.execute(productId);

      if (!product) {
        this.setNotFound();
        return;
      }

      this.product.set(product);
    } catch (err) {
      console.error('Error loading product:', err);
      this.error.set({
        code: 'PRODUCT_LOAD_ERROR',
        message: 'Failed to load product. Please try again later.',
        technical: err instanceof Error ? err.message : String(err),
      });
    } finally {
      this.loading.set(false);
    }
  }

  /**
   * Set loading state
   */
  private setLoadingState(): void {
    this.loading.set(true);
    this.error.set(null);
    this.notFound.set(false);
  }

  /**
   * Set not found state
   */
  private setNotFound(): void {
    this.notFound.set(true);
    this.product.set(null);
    this.loading.set(false);
  }

  /**
   * Navigate to the product list
   */
  public navigateToList(): void {
    this.router.navigate(['/']);
  }

  /**
   * Get breadcrumb items
   */
  get breadcrumbItems() {
    return [
      { label: 'Catalog', link: '/' },
      {
        label: this.product()?.name || 'Product details',
        current: true,
      },
    ];
  }
}
