import { useContext, useState } from 'react'
import Search from '../assets/productList/search.svg'
import { ProductContext } from '../context/ProductProvider'

export const SearchField = () => {
    const [searchInput, setSearchInput] = useState('');
    const { setSearchFilter } = useContext(ProductContext);

    return (
        <form className="flex py-8">

            <input type="text"
                onChange={e => setSearchInput(e.target.value)}
                className="w-120 rounded-l-lg px-6 py-4 bg-[#474747]/4 outline-0" id="searchInput" />
            <button onClick={(event) => {
                event.preventDefault();
                setSearchFilter(searchInput);
            }}><img src={Search} alt="" className="px-6 py-4 bg-[#474747]/4 bg-opacity-[50%] rounded-r-lg cursor-pointer" /></button>
        </form>
    )
}