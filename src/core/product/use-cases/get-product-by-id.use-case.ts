import { Injectable, inject } from '@angular/core';
import { Product } from '../domain/product';
import { PRODUCT_GATEWAY } from '../gateways/product.gateway';

/**
 * Use case pour récupérer un produit par son id
 */
@Injectable({
  providedIn: 'root',
})
export class GetProductByIdUseCase {
  private productGateway = inject(PRODUCT_GATEWAY);

  /**
   * Execute le use case pour récupérer un produit par son id
   * @param id Identifiant du produit
   * @returns Promise avec le produit ou null si non trouvé
   */
  public execute(id: string): Promise<Product | null> {
    return this.productGateway.getProductById(id);
  }
}
