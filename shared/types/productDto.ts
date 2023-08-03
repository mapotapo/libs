import { ActivityLevel, Currency, ExperienceLevel, ProductType } from '../enums/productEnums';

export type ProductCovers = {
  label: string;
};

export type Location = {
  city: string;
  countryCode: string;
  latitude: number;
  longitude: number;
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

export type Category = {
  id: string;
  name: string;
  description?: string | null;
};

export type ProductDto = {
  id: string;
  productCode: string;
  productType: ProductType;
  name: string;
  shortDescription: string;
  description: string;
  Category?: Category | null;
  duration: number;
  experience: ExperienceLevel;
  activityLevel: ActivityLevel;
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
};

export type ProductWithCoversDto = ProductDto & {
  coversIncluded: ProductCovers[];
};

// prettier-ignore print-width
export type ProductListingDto = Pick<ProductDto, 'id' | 'name' | 'productCode' | 'price' | 'currency'> & {
  Category?: Pick<Category, 'name'> | null;
  location: Omit<Location, 'city'>;
  images: Pick<Image, 'mediumSizeUrl'>[];
};
