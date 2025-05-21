
export const OrderFilter = () => {

    return (
        <section className="flex justify-between py-10 items-center">
            <p className="font-bold">.....</p>
            <div className="border p-4 w-[30%] rounded-sm">
                <label className="font-bold">Ordenar por:</label>
                <select id="" name="" className="pr-[45%] font-light">
                    <option value="">Preço ↑</option>
                    <option value="">Preço ↓</option>
                </select>
            </div>
        </section>
    )
}