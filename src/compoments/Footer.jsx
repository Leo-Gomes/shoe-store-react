import React from 'react'
import { Logo } from './Logo'
import { SocialMedia } from './SociaMedia'
import { Infos } from './Infos'

const Footer = () => {
  return (
    <footer className='bg-dark-gray text-white'>
      <div className="w-[86%] mx-auto pt-18">
        <div className="flex font-extralight justify-between">
          <div className="items-center  w-[42%]">
            <Logo background='dark-gray'/>
            <p className="my-9 w-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <SocialMedia />
          </div>

          <Infos
            title="Informação"
            informacoes={[{ text: "Sobre Drip Store", link: "/" }, { text: "Segurança", link: "/" }, { text: "Wishlist", link: "/" }, { text: "Blog", link: "/" }, { text: "Trabalhe conosco", link: "/" }, { text: "Meus Pedidos", link: "/" }]} />
          <Infos
            title="Categorias"
            informacoes={[{ text: "Camisetas", link: "/" }, { text: "Calças", link: "/" }, { text: "Bonés", link: "/" }, { text: "Headphones", link: "/" }, { text: "Tênis", link: "/" }]} />
          <Infos
            title="Contato"
            informacoes={[{ text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "/" }, { text: "(85) 3051-3411", link: "/" }]} />




        </div>

      </div>

      <hr className='text-white/30 w-[86%] mx-auto mt-8' />
      <p className='text-center my-5'>© 2022 Digital College</p>
    </footer>
  )
}

export default Footer