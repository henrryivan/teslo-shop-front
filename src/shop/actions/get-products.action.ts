import { tesloApi } from "@/api/tesloApi"
import type { ProductsResponde } from "@/interfaces/products.responde";

interface Options {
    limit?: number | string;
    offset?: number | string;
    sizes?: string,
    gender?: string,
    minPrice?: number,
    maxPrice?: number,
    query?: string,
}

export const getProductsActions = async (options: Options) => {
    const { limit, offset, gender, sizes, minPrice, maxPrice, query } = options;
    const { data } = await tesloApi.get<ProductsResponde>('/products', {
        params: {
            limit,
            offset,
            gender,
            sizes,
            minPrice,
            maxPrice,
            q: query,
        }
    });

    const productsWithImageUrls = data.products.map((product) => ({
        ...product,
        images: product.images.map((image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`),
    }));

    return {
        ...data,
        products: productsWithImageUrls,
    };
}