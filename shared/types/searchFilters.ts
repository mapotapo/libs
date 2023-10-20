import { ProductDateStatus } from "../enums/productDatesEnums"; 
import { ProductType } from "../enums/productEnums";

export type SearchFilters = {
    category_id?: string;
    product_type?: ProductType;
    from_date?: string;
    to_date?: string;
    country_code?: string;
    city?: string;
    date_status?: ProductDateStatus[];
}