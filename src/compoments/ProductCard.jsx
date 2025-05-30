
export const ProductCard = ({ img, priceDiscount, categoria, titulo, preco }) => {

    return (
        <div className="mb-8 w-74">
            <div className="flex bg-white rounded-sm relative">
                <img src={img} alt="Tênis" className="w-73 h-80"/>
                {priceDiscount && <p className="text-xs bg-[#e7ff86] rounded-sm absolute left-5 mt-5 p-1">{((preco - priceDiscount) / preco * 100).toFixed(0)}% OFF</p> }
            </div>
            <div className="text-2xl">
                <p className="text-xs mt-[18px]">{categoria}</p>
                <h2 className="tracking-[1.25px] text-dark-gray-2 truncate">{titulo}</h2>
                {priceDiscount ? <><span className="mt-2 line-through text-light-gray font-extralight">${preco}</span> <span  className="mt-2 font-bold">${priceDiscount}</span></> : <p className="mt-2 font-bold">${preco}</p>}

            </div>
        </div>
    )
}