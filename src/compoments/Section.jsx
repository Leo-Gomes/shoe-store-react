
export const Section = ({align = 'left', title, children}) => {

    return (
        <section className="w-[86%] mx-auto">
            <h2 className={`text-${align} font-bold text-2xl`}>{title}</h2>
            {children}
        </section>
    )
}