import { useContext} from "react"
import { ProductContext } from "../context/ProductProvider"
import { ProductCard } from "./ProductCard";
import { Link, useLocation } from "react-router-dom";


export const ProductListing = ({cards, cols = true}) => {
    const {filteredProducts, products} = useContext(ProductContext);
    const path = useLocation().pathname

    const isActive = (endPoint) => path === endPoint;
    return (
        <ul className={`grid ${cols ? 'grid-cols-3' : 'grid-cols-4'} gap-4 mb-20`}>
            {(isActive('/productlistingpage') ? filteredProducts: products).map(item => (
               <li key={item.id} onClick={() => window.scrollTo(0, 0)}><Link to={`../productviewpage/${item.id}`}> <ProductCard img={item.img} priceDiscount={item.priceDiscount} categoria={item.categoria} titulo={item.titulo} preco={item.preco}/></Link></li>
            )).slice(0,cards)}
        </ul>
    )
}
