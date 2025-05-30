import { useContext} from "react"
import { ProductContext } from "../context/ProductProvider"
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";


export const ProductListing = ({cards, cols = true}) => {
    const {filteredProducts} = useContext(ProductContext);
  
    return (
        <ul className={`grid ${cols ? 'grid-cols-3' : 'grid-cols-4'} gap-4`}>
            {filteredProducts.map(item => (
               <li key={item.id} onClick={() => console.log(filteredProducts)}><Link to={`../productviewpage/${item.id}`}> <ProductCard img={item.img} priceDiscount={item.priceDiscount} categoria={item.categoria} titulo={item.titulo} preco={item.preco}/></Link></li>
            )).slice(0,cards)}
        </ul>
    )
}
