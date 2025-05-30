import React from 'react'
import Gallery from '../compoments/Gallery '
import { OfertasCarousel } from '../compoments/OfertasCarousel'
import { ColecoesDestaque1 } from '../compoments/ColecoesDestaque1'
import { Section } from '../compoments/Section'
import { ProductListing } from '../compoments/ProductListing'
import ColecoesDestaque2 from '../compoments/ColecoesDestaque2'
import OfertaSection from '../compoments/OfertaSection'

const HomePage = () => {
  return (
    <div>
      <Gallery
        images={[{ src: '/air-carousel.svg' }, { src: '/air-carousel.svg' }, { src: '/air-carousel.svg' }]}
        pag
      >
        <OfertasCarousel />
      </Gallery>
   
      <ColecoesDestaque1 />

      <ColecoesDestaque2 />
     

      <Section title='Produtos em alta' axle='flex-col' width='86%' link='Ver todos →'>
        <ProductListing cards={8} cols={false}/>
      </Section>

      <OfertaSection />
    </div>
  )
}

export default HomePage