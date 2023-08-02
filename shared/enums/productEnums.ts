export const ProductType: {
  [k: string]:
    | 'ACTIVITY'
    | 'DAYTOUR'
    | 'MULTIDAYTOUR'
    | 'PRIVATE_TOUR'
    | 'TICKET'
    | 'RENTAL'
    | 'CHARTER'
    | 'EVENT'
    | 'GIFT_CARD'
    | 'TRANSFER'
    | 'LESSON'
    | 'MERCHANDISE'
    | 'CUSTOM';
} = {
  ACTIVITY: 'ACTIVITY',
  DAYTOUR: 'DAYTOUR',
  MULTIDAYTOUR: 'MULTIDAYTOUR',
  PRIVATE_TOUR: 'PRIVATE_TOUR',
  TICKET: 'TICKET',
  RENTAL: 'RENTAL',
  CHARTER: 'CHARTER',
  EVENT: 'EVENT',
  GIFT_CARD: 'GIFT_CARD',
  TRANSFER: 'TRANSFER',
  LESSON: 'LESSON',
  MERCHANDISE: 'MERCHANDISE',
  CUSTOM: 'CUSTOM',
};

export type ProductType = (typeof ProductType)[keyof typeof ProductType];

export const Currency: { [k: string]: 'EUR' | 'GBP' | 'USD' } = {
  EUR: 'EUR',
  GBP: 'GBP',
  USD: 'USD',
};

export type Currency = (typeof Currency)[keyof typeof Currency];

export const ExperienceLevel: { [k: string]: 'BEGINNER' | 'MEDIUM' | 'ADVANCED' } = {
  BEGINNER: 'BEGINNER',
  MEDIUM: 'MEDIUM',
  ADVANCED: 'ADVANCED',
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel];

export const ActivityLevel: { [k: string]: 'LOW_FIT' | 'MEDIUM_FIT' | 'HIGH_FIT' } = {
  LOW_FIT: 'LOW_FIT',
  MEDIUM_FIT: 'MEDIUM_FIT',
  HIGH_FIT: 'HIGH_FIT',
};

export type ActivityLevel = (typeof ActivityLevel)[keyof typeof ActivityLevel];

export const Sports: { [k: string]: 'CLIMBING' | 'JUMPING' } = {
  CLIMBING: 'CLIMBING',
  JUMPING: 'JUMPING',
};

export type Sports = (typeof Sports)[keyof typeof Sports];
