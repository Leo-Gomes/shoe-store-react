import React from 'react'

const OfertaSection = () => {
  return ( 
    <section className="flex w-full justify-around bg-white mt-25 p-10 py-20">
        <div className='relative text-center '>
            <img src="/fundo.svg" alt="" className='w-[466px] h-[466px]'/>
            <img src="/sapato.svg" alt="" className="w-[573px] absolute top-15 -left-7 "/>

        </div>
          
                <div className="w-[50%] ">
                    <h4 className="texT-sm font-bold text-primary my-4">Oferta especial</h4>
                    <h1 className='text-5xl font-bold'>Air Jordan edição de colecionador</h1>
                    <p className="text-lg my-6 text-dark-gray-2 w-[85%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
                        tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.
                        ut labore et dolore magna aliqua.</p>
                    <button className="bg-primary font-bold text-sm text-white py-2 w-50 rounded-md hover:bg-tertiary cursor-pointer">Ver Oferta</button>
                </div>
         

</section>
)
}

export default OfertaSection