import ProductCard from '../components/productCard'
import productStorage from '../storages/product.storage'

const CatalogPage = () => {
    return(
        <div className={"w-full h-full p-10 flex flex-col gap-10"}>
            <div className={"w-full h-[calc(100%-50px)] flex flex-row flex-wrap items-star justify-center gap-10"}>
                {
                    productStorage.products.map(elem => <ProductCard key={elem.id} product={elem} />)
                }
            </div>
        </div>
    )
}

export default CatalogPage