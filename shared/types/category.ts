import { ProductDto } from './product';

export type CategoryDto = {
  id: string;
  name: string;
  description?: string | null;
};

export type CategoryWithProductsDto = CategoryDto & {
  products: ProductDto[];
};
