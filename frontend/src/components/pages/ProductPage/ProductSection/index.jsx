import React from 'react'
import CurrentProductImages from './CurrentProductImages'
import CorrentProductDetails from './CorrentProductDetails'

const ProductSection = () => {
  return (
    <section className='py-5'>
        <div className="flex flex-col items-center lg:flex-row p-6 gap-18 bg-white">
            {/* Left Side - Images */}
            <CurrentProductImages/>

            {/* Right Side - Info */}
            <CorrentProductDetails/>
        </div>
    </section>
  )
}

export default ProductSection
