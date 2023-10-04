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
    };