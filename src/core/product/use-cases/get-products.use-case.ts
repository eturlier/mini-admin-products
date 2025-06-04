import { Injectable, inject } from '@angular/core';
import { Product } from '../domain/product';
import { PRODUCT_GATEWAY } from '../gateways/product.gateway';

/**
 * Use case pour récupérer tous les produits
 */
@Injectable({
  providedIn: 'root',
})
export class GetProductsUseCase {
  private productGateway = inject(PRODUCT_GATEWAY);

  /**
   * Execute le use case pour récupérer tous les produits
   * @returns Promise avec un tableau de produits
   */
  public execute(): Promise<Product[]> {
    return this.productGateway.getAllProducts();
  }
}
