import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '@core/product/domain/product';
import { GetProductsUseCase } from '@core/product/use-cases/get-products.use-case';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  // Use signals for reactive state management
  public products = signal<Product[]>([]);
  public loading = signal<boolean>(true);
  public error = signal<string | null>(null);

  private getProductsUseCase: GetProductsUseCase = inject(GetProductsUseCase);

  ngOnInit(): void {
    this.loadProducts();
  }

  /**
   * Load products from the use case
   */
  public async loadProducts(): Promise<void> {
    try {
      this.loading.set(true);
      this.error.set(null);

      const products = await this.getProductsUseCase.execute();
      this.products.set(products);
    } catch (err) {
      console.error('Error loading products:', err);
      this.error.set('Failed to load products. Please try again later.');
    } finally {
      this.loading.set(false);
    }
  }
}
