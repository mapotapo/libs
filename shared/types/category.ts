import { ProductDto } from './product';

export type CategoryDto = {
  id: string;
  name: string;
  icon: String;
  description?: string | null;
  active: boolean;
  order: number;
  slug: string;
  extra ?: any | null;
};

export type CategoryNoIdDto = Omit<CategoryDto, 'id'>;

export type CategoryWithProductsDto = CategoryDto & {
  products: ProductDto[];
};
