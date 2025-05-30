import { Link } from "react-router-dom"

export const Section = ({align = 'left', title, width = '100%', axle='', link, display = 'block', children}) => {

    return (
        <section className={`w-[${width}] mx-auto ${axle} ${display}`}>
            
        
            <h2 className={`text-${align} font-bold text-2xl mb-4 relative`}>{title} <Link to={'/productlistingpage'} className="text-primary font-normal text-lg absolute right-0">{link}</Link></h2>
            

            

            {children}
        
        </section>
    )
}