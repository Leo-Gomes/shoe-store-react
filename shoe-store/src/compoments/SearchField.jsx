import Search from '../assets/productList/search.svg'

export const SearchField = ({searchInput, setSearchInput}) =>{

    return(
        <form className="flex py-8">
                    
                    <input type="text" 
                    onChange={e => setSearchInput(e.target.value)}
                    value = {searchInput} 
                    className="w-120 rounded-l-lg px-6 py-4 bg-[#474747]/4 outline-0" id="searchInput"/>
                    <button><img src={Search} alt="" className="px-6 py-4 bg-[#474747]/4 bg-opacity-[50%] rounded-r-lg cursor-pointer" /></button>
                </form>
    )
}