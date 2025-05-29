
export const Section = ({align = 'left', title, width = '100%', children}) => {

    return (
        <section className={`w-[${width}] mx-auto flex`}>
            <h2 className={`text-${align} font-bold text-2xl`}>{title}</h2>

            {children}
        
        </section>
    )
}