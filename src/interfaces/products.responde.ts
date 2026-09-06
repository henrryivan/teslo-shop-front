import type { Product } from "./product.interface";

export interface ProductsResponde {
    count: number;
    pages: number;
    products: Product[];
}
