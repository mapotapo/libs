export const UserType: {
  [k: string]:
    | 'CUSTOMER'
    | 'GUIDE';
} = {
  CUSTOMER: 'CUSTOMER',
  GUIDE: 'GUIDE',
};

export type UserType = (typeof UserType)[keyof typeof UserType];
