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
      | 'INACTIVE'
      | 'DELETED';
} = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
