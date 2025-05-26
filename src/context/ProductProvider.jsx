import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react"

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const [searchFilter, setSearchFilter] = useState('');

    const [orderBy, setOrderBy] = useState('');

    const normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();    

    useEffect(() => {
        axios.get('https://api-products-kpiv.onrender.com/produtos')
            .then(data => setProducts(data.data))
            .catch(err => console.error("Erro ao buscar produtos: ", err));

    },[]);

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        if(searchFilter.trim().length > 0){
            let search = normalize(searchFilter);
            filtered = filtered.filter((filtereds) => 
                normalize(filtereds.titulo).includes(search) || 
                normalize(filtereds.categoria).includes(search)
            )
        }console.log(searchFilter)

        if(orderBy === 'price-asc'){
            filtered.sort((a, b) => (b.priceDiscount ?? b.preco) - (a.priceDiscount ?? a.preco))
        }else if(orderBy === 'price-desc'){
            filtered.sort((a, b) => (a.priceDiscount ?? a.preco) - (b.priceDiscount ?? b.preco))
        }

        return filtered;
    },[products,searchFilter, orderBy])

    return (
        <ProductContext.Provider value={{products, searchFilter,setSearchFilter,orderBy, setOrderBy, filteredProducts}}>
            {children}
        </ProductContext.Provider>
    )
}