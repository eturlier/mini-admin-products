import { Injectable } from '@angular/core';
import { CategoryEnum } from '../domain/category';
import { Product } from '../domain/product';
import { ProductGateway } from './product.gateway';

/**
 * Implémentation simulée de ProductGateway pour le développement et les tests
 */
@Injectable({
  providedIn: 'root',
})
export class MockProductGateway implements ProductGateway {
  private products: Product[] = [
    {
      id: '1',
      name: 'Ordinateur Portable Pro',
      price: 1299.99,
      description:
        'Ordinateur portable haute performance pour les professionnels',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Laptops,
      reference: 'LAPTOP-PRO',
    },
    {
      id: '2',
      name: 'Smartphone X',
      price: 899.99,
      description: 'Dernier smartphone avec fonctionnalités avancées',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Smartphones,
      reference: 'SMARTPHONE-X',
    },
    {
      id: '3',
      name: 'Écouteurs Sans Fil',
      price: 199.99,
      description: 'Écouteurs sans fil à réduction de bruit',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Smartphones,
      reference: 'HEADPHONES-WIRELESS',
    },
    {
      id: '4',
      name: 'Montre Connectée',
      price: 249.99,
      description: 'Montre connectée pour le suivi de la forme et de la santé',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Watches,
      reference: 'WATCH-SMART',
    },
    {
      id: '5',
      name: 'Tablette Ultra',
      price: 499.99,
      description: 'Tablette légère avec écran époustouflant',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Tablets,
      reference: 'TABLET-ULTRA',
    },
    {
      id: '6',
      name: 'Ordinateur Portable Léger',
      price: 799.99,
      description: 'Léger et abordable pour une utilisation quotidienne',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Laptops,
      reference: 'LAPTOP-LITE',
    },
    {
      id: '7',
      name: 'Ordinateur Portable Gaming',
      price: 1599.99,
      description: 'Puissant avec carte graphique dédiée pour les jeux',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Laptops,
      reference: 'LAPTOP-GAMING',
    },
    {
      id: '8',
      name: 'Smartphone Économique',
      price: 299.99,
      description: 'Smartphone abordable avec bonnes performances',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Smartphones,
      reference: 'SMARTPHONE-BUDGET',
    },
    {
      id: '9',
      name: 'Smartphone Pro',
      price: 1099.99,
      description: 'Appareil photo professionnel et écran OLED',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Smartphones,
      reference: 'SMARTPHONE-PRO',
    },
    {
      id: '10',
      name: 'Tablette Mini',
      price: 349.99,
      description: 'Compact et portable avec excellente autonomie',
      image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Tablets,
      reference: 'TABLET-MINI',
    },
    {
      id: '11',
      name: 'Tablette Pro',
      price: 799.99,
      description: 'Pour les créatifs avec stylet inclus',
      image: 'https://images.unsplash.com/photo-1589739900266-43b2843f4c12?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Tablets,
      reference: 'TABLET-PRO',
    },
    {
      id: '12',
      name: 'Montre Sport',
      price: 199.99,
      description: 'Montre connectée pour les sportifs avec GPS intégré',
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Watches,
      reference: 'WATCH-SPORT',
    },
    {
      id: '13',
      name: 'Montre Luxe',
      price: 399.99,
      description: 'Montre connectée élégante avec bracelet en cuir',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Watches,
      reference: 'WATCH-LUXURY',
    },
    {
      id: '14',
      name: 'Ordinateur Portable Ultrabook',
      price: 1099.99,
      description: 'Ultra fin et léger avec SSD rapide',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Laptops,
      reference: 'LAPTOP-ULTRABOOK',
    },
    {
      id: '15',
      name: 'Smartphone Pliable',
      price: 1499.99,
      description: 'Écran pliable innovant pour une expérience unique',
      image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=600&auto=format&fit=crop',
      category: CategoryEnum.Smartphones,
      reference: 'SMARTPHONE-PLIABLE',
    },
  ];

  /**
   * Récupère tous les produits
   * @returns Promise avec un tableau de produits
   */
  async getAllProducts(): Promise<Product[]> {
    // Simulation d'un délai réseau
    await new Promise((resolve) => setTimeout(resolve, 300));
    return [...this.products];
  }

  /**
   * Récupère un produit par son id
   * @param id Identifiant du produit
   * @returns Promise avec le produit ou null si non trouvé
   */
  async getProductById(id: string): Promise<Product | null> {
    // Simulation d'un délai réseau
    await new Promise((resolve) => setTimeout(resolve, 200));
    const product = this.products.find((p) => p.id === id);
    return product ? { ...product } : null;
  }
}
