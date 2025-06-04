import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRODUCT_GATEWAY } from '@core/product/gateways/product.gateway';
import { MockProductGateway } from '@core/product/gateways/mock-product.gateway';
import { GetProductsUseCase } from '@core/product/use-cases/get-products.use-case';
import { Product } from '@core/product/domain/product';
import { RouterModule } from '@angular/router';
import { vi, describe, it, expect, beforeEach, afterEach, Mock } from 'vitest';
import { ProductList } from './product-list';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;
  let mockGetProductsUseCase: { execute: Mock };
  let mockProductGateway: MockProductGateway;
  let mockProducts: Product[];

  beforeEach(async () => {
    // Utiliser MockProductGateway pour obtenir des données de test cohérentes
    mockProductGateway = new MockProductGateway();
    // Récupérer les produits depuis le gateway pour les tests
    mockProducts = await mockProductGateway.getAllProducts();

    // Créer un mock pour GetProductsUseCase qui utilise les données du gateway
    mockGetProductsUseCase = {
      execute: vi.fn().mockResolvedValue(mockProducts),
    };

    await TestBed.configureTestingModule({
      imports: [ProductList, RouterModule],
      providers: [
        { provide: PRODUCT_GATEWAY, useClass: MockProductGateway },
        { provide: GetProductsUseCase, useValue: mockGetProductsUseCase },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', async () => {
    // Espionner la méthode loadProducts
    const loadProductsSpy = vi.spyOn(component, 'loadProducts');
    
    // Déclencher le cycle de vie du composant
    fixture.detectChanges();
    
    // Attendre que les promesses soient résolues
    await fixture.whenStable();
    
    // Vérifier que loadProducts a été appelé
    expect(loadProductsSpy).toHaveBeenCalled();
    expect(mockGetProductsUseCase.execute).toHaveBeenCalled();
    
    // Vérifier l'état final après chargement
    expect(component.products()).toEqual(mockProducts);
    expect(component.loading()).toBe(false);
    expect(component.error()).toBeNull();
  });

  it('should handle error when loading products', async () => {
    const testError = new Error('Test error');
    // Réinitialiser et reconfigurer le mock
    vi.clearAllMocks();
    mockGetProductsUseCase.execute = vi.fn().mockRejectedValueOnce(testError);
    
    // Intercepter console.error pour éviter le message d'erreur dans les logs de test
    const originalConsoleError = console.error;
    console.error = vi.fn();
    
    try {
      await component.loadProducts();
      
      // Vérifier l'état d'erreur
      expect(component.error()).toBe('Failed to load products. Please try again later.');
      // Vérifier que loading est à false après l'erreur
      expect(component.loading()).toBe(false);
      // Vérifier que console.error a été appelé
      expect(console.error).toHaveBeenCalled();
    } finally {
      // Restaurer console.error
      console.error = originalConsoleError;
    }
  });

  it('should reset error when loading products', async () => {
    // Définir un état d'erreur initial
    component.error.set('Previous error');
    
    // Appeler loadProducts
    await component.loadProducts();
    
    // Vérifier que l'erreur a été réinitialisée
    expect(component.error()).toBeNull();
  });
});
