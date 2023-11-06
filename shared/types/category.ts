import { ProductDto } from './product';

export type ExperienceLevelDescription = {
  BEGINNER: string | null;
  MEDIUM: string | null;
  ADVANCED: string | null;
}

export type ActivityLevelDescription = {
  LOW_FIT: string | null;
  MEDIUM_FIT: string | null;
  HIGH_FIT: string | null;
}

export type CategoryDto = {
  id: string;
  name: string;
  icon: String;
  description?: string | null;
  active: boolean;
  order: number;
  slug: string;
  extra ?: any | null;
  experienceLevelDescription?: ExperienceLevelDescription | null;
  activityLevelDescription?: ActivityLevelDescription | null;
};

export type CategoryNoIdDto = Omit<CategoryDto, 'id'>;

export type CategoryWithProductsDto = CategoryDto & {
  products: ProductDto[];
};
