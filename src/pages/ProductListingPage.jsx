import React from 'react'
import { ProductListing } from '../compoments/ProductListing'
import { OrderFilter } from '../compoments/OrderFilter'

const ProductListingPage = () => {
  return (
    <div className='mx-auto w-[86%]'>
    <OrderFilter/>
    <ProductListing cards={15}/>
    </div>
  )
}

export default ProductListingPage