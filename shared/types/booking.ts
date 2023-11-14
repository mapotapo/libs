import { ProductDto } from './product';

export type BookingCustomer = {
    rezdyId: number;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    phone?: string | null;
    addressLine?: string | null;
    city?: string | null;
    state?: string | null;
    companyName?: string | null;
    postCode?: string | null;
};

export type BookingItemQuantity = {
    optionLabel: string;
    optionPrice: number;
    value: number;
};

export type BookingPartecipantValue = {
    label: string;
    value?: string | null;
};

export type BookingPartecipant = {
    fields: BookingPartecipantValue[];
};

export type BookingPickupLocation = {
    locationName?: string | null;
    pickupInstructions?: string | null;
};


export type BookingPayment = {
    type: string;
    amount: number;
    currency: string;
    date: Date;
    label: string;
    recipient?: string | null;
};

export type BookingItem = {
    productName: string;
    productCode: string;
    startTime: Date;
    endTime: Date;
    quantities: BookingItemQuantity[];
    totalQuantity: number;
    amount: number;
    extras: string[];
    participants: BookingPartecipant[];
    subtotal: number;
    pickupLocation?: BookingPickupLocation | null;
};

export type Booking = {
    id: string | null; // so we can migrate from rezdy
    orderNumber: string;
    customer: BookingCustomer;
    items: BookingItem[];
    totalAmount: number;
    totalCurrency: string;
    totalPaid: number;
    totalDue?: number | null;
    dateCreated: Date;
    dateConfirmed?: Date | null;
    datePaid?: Date | null;
    payments: BookingPayment[];
    checkin?: boolean | null;
    productId?: string | null | undefined;
    Product?: ProductDto | any; // any because of connect
};

export type BookingListingItem = Pick<Booking, 'id' | 'orderNumber' | 'customer' | 'items' | 'totalAmount' | 'totalCurrency' | 'totalPaid' | 'totalDue' | 'dateCreated' | 'dateConfirmed' | 'datePaid' | 'checkin' | 'productId' | 'Product'> & {
    Product: Pick<ProductDto, 'name' | 'slug' | 'images' | 'location' | 'checkInFields'> | null;
};
