import { Section } from "./Section"

export const ColecoesDestaque1 = () => {

    return (

        
        <Section title='Coleções em destaque' axle='flex-col' width='86%'>
            <div className="flex gap-x-3 justify-center">

            <div className="bg-[#D8E3F2] w-[405px] h-[251px] rounded-lg relative">
                <p
                    className="px-[15px] py-[5px] bg-[#E7FF86] inline-block rounded-[29px] font-bold text-sm text-dark-gray-2 ml-[30px] mt-[34px]">
                    30% OFF</p>
                <p className="font-bold text-3xl text-dark-gray ml-[30px] mt-[10px]">Novo drop <span
                        className="block">Supreme</span></p>
                <button
                    className="cursor-pointer relative z-10 bg-transition-all duration-300 hover:bg-secondary bg-light-gray-3 text-primary hover:text-[#F7F7FC] font-bold px-12 py-2 rounded-lg ml-[30px] mt-[20px]">Comprar</button>
                <img className="absolute bottom-0 right-0 z-0"
                    src="./star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696-1.png"
                    alt="" />
            </div>

            <div className="bg-[#D8E3F2] w-[405px] h-[251px] rounded-lg relative">
                <p
                    className="px-[15px] py-[5px] bg-[#E7FF86] inline-block rounded-[29px] font-bold text-sm text-dark-gray-2 ml-[30px] mt-[34px]">
                    30% OFF</p>
                <p className="font-bold text-3xl text-dark-gray ml-[30px] mt-[10px]">Novo drop <span
                        className="block">Adidas</span></p>
                <button
                    className="cursor-pointer relative z-10 bg-transition-all duration-300 hover:bg-secondary bg-light-gray-3 text-primary hover:text-[#F7F7FC] font-bold px-12 py-2 rounded-lg ml-[30px] mt-[20px]">Comprar</button>
                <img className="absolute bottom-0 right-0 z-0" src="./tenis.png" alt="" />
            </div>

            <div className="bg-[#D8E3F2] w-[405px] h-[251px] rounded-lg relative">
                <p
                    className="px-[15px] py-[5px] bg-[#E7FF86] inline-block rounded-[29px] font-bold text-sm text-dark-gray-2 ml-[30px] mt-[34px]">
                    30% OFF</p>
                <p className="font-bold text-3xl text-dark-gray ml-[30px] mt-[10px]">Novo<span className="block">Beats
                        Bass</span></p>
                <button
                    className="cursor-pointer relative z-10 bg-transition-all duration-300 hover:bg-secondary bg-light-gray-3 text-primary hover:text-[#F7F7FC] font-bold px-12 py-2 rounded-lg ml-[30px] mt-[20px]">Comprar</button>
                <img className="absolute bottom-0 right-0 z-0" src="./fone.png" alt="" />
            </div>

        </div>
        </Section>
                )
                }