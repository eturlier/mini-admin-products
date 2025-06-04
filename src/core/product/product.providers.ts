import { Provider } from '@angular/core';
import { MockProductGateway } from './gateways/mock-product.gateway';
import { PRODUCT_GATEWAY } from './gateways/product.gateway';

/**
 * Provider pour le ProductGateway
 * Cela permet de facilement basculer entre les implémentations (mock, http, etc.)
 */
export const PRODUCT_PROVIDERS: Provider[] = [
  {
    provide: PRODUCT_GATEWAY,
    useClass: MockProductGateway,
  },
];
