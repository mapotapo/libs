import { ProductDateStatus } from "../enums/productDatesEnums"

export type PriceOptionProductDate = {
    price: number;
    label: string;
    redzyId: number;
    seatsUsed: number;
    };

export type ProductDateDto = {
    rezdyId: number;
    startTime: Date;
    rezdyStartTimeLocal?: string | null;
    endTime: Date;
    allDay: boolean;
    seats: number;
    seatsAvailable: number;
    priceOptions: PriceOptionProductDate[];
    status: ProductDateStatus;
    };