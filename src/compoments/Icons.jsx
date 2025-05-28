import React from 'react'

const Icons = () => {
  return (
    <>
        <div class="flex flex-row gap-10 p-5 justify-center text-sm text-dark-gray-2" >
                <div className=' h-20 w-20 rounded-full bg-white p-3'>
                    <img className="mx-auto block h-17  sm:mx-0 sm:shrink-0" src="/camisa.svg" alt=""/>
                    <p className="pt-5 pb-10 text-center">Camisetas</p>
                </div>
                <div className=' h-20 w-20 rounded-full bg-white p-3'>
                    <img className="mx-auto block h-17  sm:mx-0 sm:shrink-0" src="/calça.svg" alt=""/>
                    <p className="pt-5 pb-10 text-center">Calças</p>
                </div>
                <div className=' h-20 w-20 rounded-full bg-white p-3'>
                    <img className="mx-auto block h-17  sm:mx-0 sm:shrink-0" src="/calça.svg" alt=""/>
                    <p className="pt-5 pb-10 text-center">Bonés</p>
                </div>
                <div className=' h-20 w-20 rounded-full bg-white p-3'>
                    <img className="mx-auto block h-17  sm:mx-0 sm:shrink-0" src="/fone.svg" alt=""/>
                    <p className="pt-5 pb-10 text-center">Headphones</p>
                </div>
                <div className=' h-20 w-20 rounded-full bg-white p-3'>
                    <img class="mx-auto block h-17 sm:mx-0 sm:shrink-0" src="/teniss.svg" alt=""/>
                    <p class="pt-5 pb-10 text-center">Tênis</p>
                </div>
            
            </div>
    </>
  )
}

export default Icons