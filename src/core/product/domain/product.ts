import { CategoryEnum } from './category';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: CategoryEnum;
  reference: string;
}
