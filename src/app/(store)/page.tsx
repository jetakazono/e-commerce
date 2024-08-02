import ProductCard from "@/components/product/ProductCard"
import Page from "@/components/template/Page"
import products from "@/data/constants/products"

export default function Home() {
    return (
        <Page>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:flex-row justify-items-center w-full">
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </Page>
    )
}
