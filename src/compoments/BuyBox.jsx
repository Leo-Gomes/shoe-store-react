import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductOptions } from "./ProductOptions";

export const BuyBox = ({ name, reference, stars, rating, priceDiscount, price, description }) => {
    const { id } = useParams();
    const [productView, setProductView] = useState({});
    useEffect(() => {
        axios.get(`https://api-products-kpiv.onrender.com/produtos/${id}`)
            .then(data => setProductView(data.data))
            .catch(err => console.error("Erro ao buscar produtos: ", err));
    }, [])
    return (
        <div className="ml-10 flex flex-col justify-between">
            <h2 className="font-bold text-[32px] h-18">{productView.titulo}</h2>
            <p className="text-xs text-dark-gray-3">Casual | {productView.marca} | {productView.reference}</p>
            <div>
                <span>{productView.stars}</span> <span>{productView.rating}</span>
            </div>

            <div>
                <p>{productView.priceDiscount}</p> <p>{price}</p>
            </div>

            <h2 className="font-bold text-sm text-light-gray">Descrição do produto</h2>
            <p className="text-sm text-dark-gray-2">{productView.description}</p>

            <h2 className="font-bold text-sm text-light-gray ">Tamanho</h2>

            <ProductOptions options={["39", "40", "41", "42", "43"]}
                shape="square"
                radius="6px"
                type="text" />

            <h2 className="font-bold text-sm text-light-gray ">Cores</h2>

            <ProductOptions options={["#6EE0FF", "#FF6B6B", "#444", "#7F83F3"]}
  shape="circle"
  type="color"/>
            <button className="bg-[#FFB31F] text-white py-1 rounded-md hover:bg-[#FFB31F]/90 mt-6 w-60">COMPRAR</button>
        </div>
    )
}