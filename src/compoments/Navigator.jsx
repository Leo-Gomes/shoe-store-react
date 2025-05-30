import { Link, useLocation, useParams} from "react-router-dom"


export const Navigator = () => {
    const {id} = useParams();
    const path = useLocation().pathname

    const isActive = (endPoint) => path === endPoint;
    return (
        <nav>
            <ul className="flex gap-8 text-dark-gray-2 mb-6">
                    <li className={isActive('/') ? "border-b-2 text-primary font-bold" : ""}><Link to="/" >Home</Link> </li>
                    <li className={isActive('/productlistingpage') || isActive(`/productviewpage/${id}`) ? "border-b-2 text-primary font-bold" : ""}><Link to="/productlistingpage">Produtos</Link> </li>
                    <li className={isActive('/categories') ? "border-b-2 text-primary font-bold" : ""}><Link to="/categories">Categorias</Link> </li>
                    <li className={isActive('/myorders') ? "border-b-2 text-primary font-bold" : ""}><Link to="/myorders">Meus Pedidos</Link> </li>
                </ul>
        </nav>
    )
}