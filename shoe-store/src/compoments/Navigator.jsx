import { Link, useLocation } from "react-router-dom"

export const Navigator = () => {
    const path = useLocation().pathname

    const isActive = (endPoint) => path === endPoint;
    return (
        <nav>
            <ul className="flex gap-8 text-dark-gray-2">
                    <li className={isActive('/') ? "border-b text-[#c92071]" : ""}><Link to="/" >HOME</Link> </li>
                    <li className={isActive('/productlistingpage') ? "border-b text-[#c92071]" : ""}><Link to="/productlistingpage">PRODUTOS</Link> </li>
                    <li className={isActive('/categorias') ? "border-b text-[#c92071]" : ""}><Link to="/productviewpage">CATEGORIAS</Link> </li>
                    <li className={isActive('/meuspedidos') ? "border-b text-[#c92071]" : ""}><Link to="/">MEUS PEDIDOS</Link> </li>
                </ul>
        </nav>
    )
}