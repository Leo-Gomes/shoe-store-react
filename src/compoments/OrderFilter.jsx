import { useContext } from "react"
import { ProductContext } from "../context/ProductProvider"

export const OrderFilter = () => {
    const {setOrderBy, searchFilter, filteredProducts} = useContext(ProductContext);
    return (
        <section className="flex justify-between py-10 items-center">
            {searchFilter ? <h2 className="font-bold text-dark-gray-2">Resultados para "{searchFilter}" - <span className="font-normal">{filteredProducts.length} produtos</span></h2> : <span className="text-dark-gray-2">{filteredProducts.length} produtos</span>}
            
            <div className="border p-4 w-[30%] rounded-sm">
                <label className="font-bold">Ordenar por:</label>
                <select id="" name="" className="w-[70%] font-light" onChange={(e) => setOrderBy(e.target.value)}>
                    <option value="relevantes">Mais Relevantes</option>
                    <option value="price-asc">Maior Preço ↑</option>
                    <option value="price-desc">Menor Preço ↓</option>
                </select>
            </div>
        </section>
    )
}