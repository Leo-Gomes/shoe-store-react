import React from 'react'
import Gallery from '../compoments/Gallery '
import { OfertasCarousel } from '../compoments/OfertasCarousel'
import { ColecoesDestaque1 } from '../compoments/ColecoesDestaque1'
import { Section } from '../compoments/Section'
import { ProductListing } from '../compoments/ProductListing'

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
     

      <Section title='Produtos em alta' axle='flex-col' width='86%'>
        <ProductListing cards={8} cols={false}/>
      </Section>
    </div>
  )
}

export default HomePage