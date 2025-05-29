import React from 'react'
  import Gallery from '../compoments/Gallery '
import { BuyBox } from '../compoments/BuyBox'
import { Section } from '../compoments/Section'

const ProductViewPage = () => {
  return (
    <div>
   <Section width='86%'>

      <Gallery width='49%' showThumbs>

      </Gallery>
      <BuyBox/>
   </Section>
     
    </div>
    )
}

export default ProductViewPage