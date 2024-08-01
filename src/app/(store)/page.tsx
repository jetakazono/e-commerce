import ProductCard from "@/components/product/ProductCard"
import Page from "@/components/template/Page"
import products from "@/data/constants/products"

export default function Home() {
    return (
        <Page>
            <div className="flex flex-col items-center lg:items-stretch md:flex-wrap justify-center gap-5 lg:flex-row">
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </Page>
    )
}
