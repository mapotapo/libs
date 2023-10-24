import { ActivityLevel, Currency, ExperienceLevel, ProductType } from '../enums/productEnums';
import { CategoryDto } from './category';
import { ProductDateDto } from './productDate';

export type ProductCovers = {
  label: string;
};

export type Location = {
  city: string | null;
  countryCode: string | null;
  latitude: number | null;
  longitude: number | null;
  description?: string | null;
};

export type PriceOption = {
  price: number;
  label: string;
  redzyId: number;
  seatsUsed: number;
  productCode: string;
};

export type Image = {
  redzyId: number;
  itemUrl: string;
  thumbnailUrl?: string | null;
  mediumSizeUrl?: string | null;
  largeSizeUrl?: string | null;
};

export type Video = {
  redzyId: number;
  platform?: string | null;
  url: string;
};

export type ProductStatus = 'DRAFT' | 'PUBLISHED' | 'DELETED' | 'UNPUBLISHED' | 'PRIVATE';

export type ProductDto = {
  id: string;
  productCode: string;
  productType: ProductType;
  name: string;
  shortDescription?: string;
  description: string;
  Category?: CategoryDto | null;
  duration: number;
  experience: ExperienceLevel;
  activityLevel: ActivityLevel;
  whatsIncluded?: string[];
  whatsNotIncluded?: string[];
  quantityRequired: boolean;
  quantityRequiredMin: number;
  quantityRequiredMax: number;
  location: Location;
  price: number;
  priceOptions: PriceOption[];
  currency: Currency;
  images: Image[];
  videos: Video[];
  itemsToBring: string[];
  dateCreated: Date;
  dateUpdated: Date;
  productDates?: ProductDateDto[] | null;
  confirmModeMinParticipants?: number | null;
  itinerary?: string[];
  status : ProductStatus;
  slug: string;
};

export type ProductWithCoversDto = ProductDto & {
  coversIncluded: ProductCovers[];
};

// prettier-ignore print-width
export type ProductListingDto = Pick<ProductDto, 'id' | 'name' | 'productCode' | 'price' | 'currency' | 'productType' | 'slug'> & {
  Category?: Pick<CategoryDto, 'name' | 'icon'> | null;
  location: Location;
  images: Pick<Image, 'mediumSizeUrl'>[];
};