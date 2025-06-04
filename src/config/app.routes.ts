import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../ui/product/product-list/product-list').then(
        (m) => m.ProductList,
      ),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('../ui/product/product-detail/product-detail').then(
        (m) => m.ProductDetail,
      ),
  },
];
