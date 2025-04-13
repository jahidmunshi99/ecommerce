import React from 'react'

const ProductDetails = ({details}) => {
  return (
    <div className='shadow-md w-full py-5 px-8 rounded-md'>
        <p className='text-[16px]'>{details}</p>
    </div>
  )
}

export default ProductDetails
