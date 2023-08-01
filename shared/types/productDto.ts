import { ActivityLevel, Currency, ExperienceLevel, MediaType, ProductType } from '../enums/productEnums';

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

export type Media = {
  mediaType: MediaType;
  src: string;
  thumbnailUrl?: string | null;
  mediumSizeUrl?: string | null;
  largeSizeUrl?: string | null;
};

export type ProductDto = {
  id: string;
  productCode: string;
  productType: ProductType;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
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
  medias: Media[];
  itemsToBring: string[];
  dateCreated: Date;
  dateUpdated: Date;
};

export type ProductWithCoversDto = ProductDto & {
  coversIncluded: ProductCovers[];
};

export type ProductListingDto = Omit<
  ProductDto,
  | 'productType'
  | 'name'
  | 'description'
  | 'shortDescription'
  | 'duration'
  | 'experience'
  | 'activityLevel'
  | 'quantityRequired'
  | 'quantityRequiredMin'
  | 'quantityRequiredMax'
  | 'priceOptions'
  | 'itemsToBring'
  | 'dateCreated'
  | 'dateUpdated'
  | 'location'
  | 'medias'
> & {
  location: Omit<Location, 'countryCode'>;
  medias: Omit<Media, 'src' | 'mediumSizeUrl' | 'largeSizeUrl'>[];
};
