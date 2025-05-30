import React from 'react'
import { Section } from './Section'

const ColecoesDestaque2 = () => {
    return (
        <div className='my-25'>


            <Section title='Coleções em destaque' axle='flex-col' align='center'>
                <div class="flex flex-row gap-12 px-5 justify-center text-sm text-dark-gray-2 font-bold" >
                    <div className=' h-20 w-20 rounded-full bg-white p-3'>
                        <img className="mx-auto block h-17  sm:mx-0 sm:shrink-0" src="/camisa-icon.svg" alt="" />
                        <p className="pt-5 pb-10 text-center">Camisetas</p>
                    </div>
                    <div className=' h-20 w-20 rounded-full bg-white p-3'>
                        <img className="mx-auto block h-17  sm:mx-0 sm:shrink-0" src="/calça-icon.svg" alt="" />
                        <p className="pt-5 pb-10 text-center">Calças</p>
                    </div>
                    <div className=' h-20 w-20 rounded-full bg-white p-3'>
                        <img className="mx-auto block h-17  sm:mx-0 sm:shrink-0" src="/calça-icon.svg" alt="" />
                        <p className="pt-5 pb-10 text-center">Bonés</p>
                    </div>
                    <div className=' h-20 w-20 rounded-full bg-white p-3'>
                        <img className="mx-auto block h-17  sm:mx-0 sm:shrink-0" src="/headfone-icon.svg" alt="" />
                        <p className="pt-5 pb-10 text-center">Headphones</p>
                    </div>
                    <div className=' h-20 w-20 rounded-full bg-white p-3'>
                        <img class="mx-auto block h-17 sm:mx-0 sm:shrink-0" src="/tenis-icon.svg" alt="" />
                        <p class="pt-5 pb-10 text-center">Tênis</p>
                    </div>

                </div>
            </Section>
        </div>
    )
}

export default ColecoesDestaque2