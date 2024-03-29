import { ActivityLevel, Currency, ExperienceLevel, ProductType } from '../enums/productEnums';
import { CategoryDto } from './category';
import { ProductDateDto } from './productDate';

export type Location = {
  city: string | null;
  countryCode?: string | null;
  latitude: number | null;
  longitude: number | null;
  description?: string | null;
  address?: string | null;
  postCode?: string | null;
  state?: string | null;
};

export type PriceOption = {
  price: number;
  label: string;
  redzyId?: number | null;
  seatsUsed?: number | null;
  productCode?: string | null;
};

export type Image = {
  redzyId?: number | null;
  itemUrl: string;
  thumbnailUrl?: string | null;
  mediumSizeUrl?: string | null;
  largeSizeUrl?: string | null;
  tag?: string | null;
};

export type Video = {
  redzyId: number;
  platform?: string | null;
  url: string;
};

export type ProductStatus = 'DRAFT' | 'PUBLISHED' | 'DELETED' | 'UNPUBLISHED' | 'PRIVATE';

export type ProductBookingFieldCheckIn = {
  label: string;
  // requiredPerParticipant: boolean,
  // requiredPerBooking: boolean,
  // visiblePerParticipant: boolean,
  // visiblePerBooking: boolean,
  listOptions: string | null,
  fieldType: string
}

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductAccomodation = {
  name: string;
  image?: string | null;
  description: string;
};

export type ProductHost = {
  name: string;
  description: string;
};

export type ItineraryItem = {
  title: string | null;
  description: string | null;
};

export type ProductDto = {
  id: string;
  productCode: string;
  productType: ProductType;
  internalCode?: string | null;
  name: string;
  shortDescription?: string;
  description: string;
  Category?: CategoryDto | null;
  categoryId?: string | null;
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
  itinerary?: string[]; // TODO - to be removed
  itineraryItems?: ItineraryItem[] | null;
  status: ProductStatus;
  slug: string;
  checkInFields: ProductBookingFieldCheckIn[];
  galleryImages: string[] | null;
  faqs: ProductFaq[] | null;
  accomodations: ProductAccomodation[] | null;
  hosts: ProductHost[] | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  metaImage?: string | null;
  rezdyDateUpdated?: Date | null;
  tags?: string[] | null;
  sortOrder?: number | null;
  guideId?: string | null;
};

type RecursivePartial<T> = {
  [P in keyof T]?: T[P];
};

// ProductListingDto is a subset of ProductDto
export type ProductListingDto = RecursivePartial<ProductDto>;
