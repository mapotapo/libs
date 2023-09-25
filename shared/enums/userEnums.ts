export const UserType: {
  [k: string]:
    | 'CUSTOMER'
    | 'GUIDE';
} = {
  CUSTOMER: 'CUSTOMER',
  GUIDE: 'GUIDE',
};

export type UserType = (typeof UserType)[keyof typeof UserType];

export const UserStatus: {
  [k: string]:
      | 'ACTIVE'
      | 'INACTIVE';
} = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
