
export const Section = ({align = 'left', title, children, width="100%"}) => {

    return (
        <>
        <section className={`w-[86%] mx-auto w-[${width}]`}>
            <h2 className={`text-${align} font-bold text-2xl`}>{title}</h2>
            {children}
        </section>
        </>
        
    )
}