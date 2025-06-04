import { InjectionToken } from '@angular/core';
import { Product } from '../domain/product';

/**
 * Interface pour les opérations de produits
 */
export interface ProductGateway {
  /**
   * Récupère tous les produits
   * @returns Promise avec un tableau de produits
   */
  getAllProducts(): Promise<Product[]>;

  /**
   * Récupère un produit par son id
   * @param id Identifiant du produit
   * @returns Promise avec le produit ou null si non trouvé
   */
  getProductById(id: string): Promise<Product | null>;
}

/**
 * Token d'injection pour ProductGateway
 */
export const PRODUCT_GATEWAY = new InjectionToken<ProductGateway>('ProductGateway');
