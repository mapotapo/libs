import { ProductDto } from './product';

export type PriceOptionProductDate = {
    price: number;
    label: string;
    redzyId: number;
    seatsUsed: number;
    productCode: string;
    };

export type ProductDateDto = {
    id: string;
    rezdyId: string;
    productId: string;
    product: ProductDto;
    startTime: Date;
    endTime: Date;
    allDay: boolean;
    seats: number;
    seatsAvailable: number;
    priceOptions: PriceOptionProductDate[];
    };


export type ProductDateDtoInsert = {
    rezdyId: number;
    productId: string;
    startTime: Date;
    endTime: Date;
    allDay: boolean;
    seats: number;
    seatsAvailable: number;
    priceOptions: PriceOptionProductDate[];
    };