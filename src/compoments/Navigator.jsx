import { Link, useLocation, useParams} from "react-router-dom"


export const Navigator = () => {
    const {id} = useParams();
    const path = useLocation().pathname

    const isActive = (endPoint) => path === endPoint;
    return (
        <nav>
            <ul className="flex gap-8 text-dark-gray-2">
                    <li className={isActive('/') ? "border-b text-primary" : ""}><Link to="/" >HOME</Link> </li>
                    <li className={isActive('/productlistingpage') || isActive(`/productviewpage/${id}`) ? "border-b text-primary" : ""}><Link to="/productlistingpage">PRODUTOS</Link> </li>
                    <li className={isActive('/categories') ? "border-b text-primary" : ""}><Link to="/categories">CATEGORIAS</Link> </li>
                    <li className={isActive('/myorders') ? "border-b text-primary" : ""}><Link to="/myorders">MEUS PEDIDOS</Link> </li>
                </ul>
        </nav>
    )
}