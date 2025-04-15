import React from 'react'
import ProductSidebar from './ProductSidebar'
import ProductContent from './ProductContent'

const ProductListing = () => {
  return (
    <section className='bg-white'>
        <div className="container py-6">
            <div className="flex justify-between flex-col lg:flex-row sm:flex-auto gap-6">
                {/** Left Side Bar */}
                <ProductSidebar/> 

                {/** Right Sizd Display All Products */}
                <ProductContent/>
            </div>
        </div>
    </section>
  )
}

export default ProductListing