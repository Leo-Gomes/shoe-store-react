import React from 'react'
import { ProductListing } from '../compoments/ProductListing'
import { OrderFilter } from '../compoments/OrderFilter'
import { FilterSideBar } from '../compoments/FilterSideBar'
import { Section } from '../compoments/Section'

const ProductListingPage = () => {
  return (
    <div className='mx-auto w-[86%]'>
    <OrderFilter/>
    <Section>
    <FilterSideBar/>
    <ProductListing cards={15}/>
    </Section>
    </div>
  )
}

export default ProductListingPage