import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@core/product/domain/product';
import { MockProductGateway } from '@core/product/gateways/mock-product.gateway';
import { PRODUCT_GATEWAY } from '@core/product/gateways/product.gateway';
import { GetProductByIdUseCase } from '@core/product/use-cases/get-product-by-id.use-case';
import { Subject } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi, Mock } from 'vitest';
import { ProductDetail } from './product-detail';

describe('ProductDetail', () => {
  let component: ProductDetail;
  let fixture: ComponentFixture<ProductDetail>;
  let mockRouter: { navigate: Mock; createUrlTree: Mock; serializeUrl: Mock; events: Subject<unknown>; url: string };
  let mockActivatedRoute: { snapshot: { paramMap: { get: Mock } } };
  let mockGetProductByIdUseCase: { execute: Mock };
  const mockProductId = '1';
  let mockProduct: Product;
  let mockProductGateway: MockProductGateway;

  beforeEach(async () => {
    // Utiliser MockProductGateway pour obtenir des données de test cohérentes
    mockProductGateway = new MockProductGateway();
    // Récupérer un produit depuis le gateway pour les tests
    mockProduct = await mockProductGateway.getProductById(mockProductId) as Product;

    // Création d'un mock pour Router avec les méthodes nécessaires pour RouterLink
    mockRouter = {
      navigate: vi.fn(),
      createUrlTree: vi.fn().mockReturnValue({}),
      serializeUrl: vi.fn().mockReturnValue(''),
      events: new Subject(),
      url: '',
    };

    mockActivatedRoute = {
      snapshot: {
        paramMap: { get: vi.fn().mockReturnValue(mockProductId) },
      },
    };

    mockGetProductByIdUseCase = {
      execute: vi.fn().mockImplementation((id: string) => mockProductGateway.getProductById(id)),
    };

    await TestBed.configureTestingModule({
      imports: [ProductDetail],
      providers: [
        { provide: PRODUCT_GATEWAY, useClass: MockProductGateway },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: GetProductByIdUseCase, useValue: mockGetProductByIdUseCase },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetail);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load product on init', async () => {
    // Espionner la méthode loadProduct
    const loadProductSpy = vi.spyOn(component, 'loadProduct');
    
    // Déclencher le cycle de vie du composant
    fixture.detectChanges();
    
    // Attendre que les promesses soient résolues
    await fixture.whenStable();
    
    // Vérifier que loadProduct a été appelé
    expect(loadProductSpy).toHaveBeenCalled();
    expect(mockActivatedRoute.snapshot.paramMap.get).toHaveBeenCalledWith('id');
    expect(mockGetProductByIdUseCase.execute).toHaveBeenCalledWith(mockProductId);
    
    // Vérifier l'état final après chargement
    expect(component.product()).toEqual(mockProduct);
    expect(component.loading()).toBe(false);
    expect(component.error()).toBeNull();
    expect(component.notFound()).toBe(false);
  });

  it('should handle missing product ID', async () => {
    // Réinitialiser et reconfigurer le mock
    vi.clearAllMocks();
    mockActivatedRoute.snapshot.paramMap.get = vi.fn().mockReturnValue(null);
    
    // Appeler directement la méthode loadProduct
    await component.loadProduct();
    
    // Vérifier l'état final
    expect(component.notFound()).toBe(true);
    expect(component.product()).toBeNull();
  });

  it('should handle product not found', async () => {
    // Réinitialiser et reconfigurer le mock
    vi.clearAllMocks();
    mockGetProductByIdUseCase.execute = vi.fn().mockResolvedValue(null);
    
    // Appeler directement la méthode loadProduct
    await component.loadProduct();
    
    // Vérifier l'état final
    expect(component.notFound()).toBe(true);
    expect(component.product()).toBeNull();
  });

  it('should handle error when loading product', async () => {
    const testError = new Error('Test error');
    // Réinitialiser et reconfigurer le mock
    vi.clearAllMocks();
    mockGetProductByIdUseCase.execute = vi.fn().mockRejectedValueOnce(testError);
    
    // Intercepter console.error pour éviter le message d'erreur dans les logs de test
    const originalConsoleError = console.error;
    console.error = vi.fn();
    
    try {
      await component.loadProduct();
      
      expect(component.error()).toEqual({
        code: 'PRODUCT_LOAD_ERROR',
        message: 'Failed to load product. Please try again later.',
        technical: 'Test error',
      });
      // Vérifier que loading est à false après l'erreur
      expect(component.loading()).toBe(false);
      // Vérifier que console.error a été appelé
      expect(console.error).toHaveBeenCalled();
    } finally {
      // Restaurer console.error
      console.error = originalConsoleError;
    }
  });

  it('should navigate to product list', () => {
    component.navigateToList();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should return correct breadcrumb items with product', () => {
    component.product.set(mockProduct);

    const breadcrumbs = component.breadcrumbItems;

    expect(breadcrumbs).toEqual([
      { label: 'Catalog', link: '/' },
      { label: mockProduct.name, current: true },
    ]);
  });

  it('should return default breadcrumb items without product', () => {
    component.product.set(null);

    const breadcrumbs = component.breadcrumbItems;

    expect(breadcrumbs).toEqual([
      { label: 'Catalog', link: '/' },
      { label: 'Product details', current: true },
    ]);
  });
});
