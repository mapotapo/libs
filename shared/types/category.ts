import { ProductDto } from './product';

export type Icon = {
  default: string;
  hover?: string | null;
  selected?: string | null;
};

export type CategoryDto = {
  id: string;
  name: string;
  icon: Icon;
  description?: string | null;
};

export type CategoryNoIdDto = Omit<CategoryDto, 'id'>;

export type CategoryWithProductsDto = CategoryDto & {
  products: ProductDto[];
};
