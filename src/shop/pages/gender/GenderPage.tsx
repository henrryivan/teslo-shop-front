import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotrom } from "@/shop/components/CustomJumbotrom"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"
import { useParams } from "react-router"

export const GenderPage = () => {
    const { gender } = useParams();
    const { data } = useProducts();

    const genderLabel = gender === 'men'
        ? 'Hombres'
        : gender === 'women'
            ? 'Mujeres'
            : 'Niños'

    return (
        <>
            <CustomJumbotrom title={`Productos para ${genderLabel}`} />

            <ProductsGrid products={data?.products || []} />

            <CustomPagination totalPages={data?.pages || 1} />
        </>
    )
}
