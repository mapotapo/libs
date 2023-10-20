export type ProductDateStatus = 'PLANNED' | 'CONFIRMED' | 'SOLD_OUT' | 'ALMOST_CONFIRMED' | 'CANCELLED' | 'ALMOST_SOLD_OUT';

export type PriceOptionProductDate = {
    price: number;
    label: string;
    redzyId: number;
    seatsUsed: number;
    };

export type ProductDateDto = {
    rezdyId: number;
    startTime: Date;
    endTime: Date;
    allDay: boolean;
    seats: number;
    seatsAvailable: number;
    priceOptions: PriceOptionProductDate[];
    status: ProductDateStatus;
    };