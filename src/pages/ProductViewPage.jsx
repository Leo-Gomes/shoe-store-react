import React from 'react'
import Gallery from '../compoments/Gallery '
import { BuyBox } from '../compoments/BuyBox'
import { Section } from '../compoments/Section'
import { ProductListing } from '../compoments/ProductListing'

const ProductViewPage = () => {
  return (
    <div>
      <Section width='86%' display='flex'>

        <Gallery width='57%' showThumbs>

        </Gallery>
        <BuyBox />
      </Section>

      <Section title='Produtos em alta' axle='flex-col' width='86%' link='Ver todos →'>
        <ProductListing cards={4} cols={false} />
      </Section>

    </div>
  )
}

export default ProductViewPage