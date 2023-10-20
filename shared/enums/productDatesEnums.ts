export const ProductDateStatus: {
    [k: string]: 
    | 'PLANNED' 
    | 'CONFIRMED' 
    | 'SOLD_OUT' 
    | 'ALMOST_CONFIRMED' 
    | 'CANCELLED' 
    | 'ALMOST_SOLD_OUT';
    } = {
    PLANNED: 'PLANNED',
    CONFIRMED: 'CONFIRMED',
    SOLD_OUT: 'SOLD_OUT',
    ALMOST_CONFIRMED: 'ALMOST_CONFIRMED',
    CANCELLED: 'CANCELLED',
    ALMOST_SOLD_OUT: 'ALMOST_SOLD_OUT',
    };

export type ProductDateStatus = (typeof ProductDateStatus)[keyof typeof ProductDateStatus];
