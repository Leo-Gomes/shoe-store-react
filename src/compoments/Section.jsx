
export const Section = ({align = 'left', title, width = '100%', axle='', children}) => {

    return (
        <section className={`w-[${width}] mx-auto flex ${axle}`}>
            <h2 className={`text-${align} font-bold text-2xl mb-4`}>{title}</h2>

            {children}
        
        </section>
    )
}