import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotrom } from "@/shop/components/CustomJumbotrom"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"

export const HomePage = () => {
    const { data } = useProducts();

    return (
        <div>
            <CustomJumbotrom title="Todos los productos" />

            <ProductsGrid products={data?.products || []} />

            <CustomPagination totalPages={data?.pages || 0} />
        </div>
    )
}
