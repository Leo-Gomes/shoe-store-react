import React from 'react'
  import Gallery from '../compoments/Gallery '
import { BuyBox } from '../compoments/BuyBox'

const ProductViewPage = () => {
  return (
    <div className='flex'>
      
      <Gallery/>
      <BuyBox/>
    </div>
    )
}

export default ProductViewPage