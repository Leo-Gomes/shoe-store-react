import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductProvider"
import { ProductCard } from "./ProductCard";


export const ProductListing = ({cards}) => {
    const produtos = useContext(ProductContext);

    return (
        <ul className={`flex flex-wrap justify-between `}>
            {produtos.map(item => (
               <li key={item.id} onClick={() => alert(`clicou no item ${item.id}`)}><ProductCard img={item.img} priceDiscount={item.priceDiscount} categoria={item.categoria} titulo={item.titulo} preco={item.preco}/></li> 
            )).slice(0,cards)}
        </ul>
    )
}
