import { FilterGroup } from "./FilterGroup"

export const FilterSideBar = () => {

    return (
        <aside className="px-[30px] w-77 bg-white h-fit py-5 mr-7">
            <h2 className="">Filtrar por</h2>
            <div className="w-full bg-[#cccccc] h-[1px] my-5"></div>

            <FilterGroup
                title="Marka"
                inputType="checkbox"
                options={[
                    { text: "Addidas"},
                    { text: "Calenciaga" },
                    { text: "K-Swiss"},
                    { text: "Nike" },
                    { text: "Puma" },
                ]}
            />

            <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={[
                    { text: "Esporte e lazer"},
                    { text: "Casual" },
                    { text: "Utilitário"},
                    { text: "Corrida" },
                ]}
            />

            <FilterGroup
                title="Gênero"
                inputType="checkbox"
                options={[
                    { text: "Masculina" },
                    { text: "Feminino" },
                    { text: "Unisex"},
                ]}
            />

            <FilterGroup
                title="Estado"
                inputType="radio"
                options={[
                    { text: "Novo" },
                    { text: "Usado" },
                
                ]}
            />

        </aside>
    )
}