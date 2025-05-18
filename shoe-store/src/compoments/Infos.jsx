import { Link } from "react-router-dom"



export const Infos = ({title, informacoes}) => {

    return (

        <div className="flex flex-col">
            <h2 className="font-semibold mb-6">{title}</h2>
           <ul className="flex flex-col justify-between w-56 gap-3">
            {informacoes.map((info, index) => (
                <li key={index} className=""><Link to={info.link}>{info.text}</Link></li>
            ))}
           </ul>
        </div>
    )
}