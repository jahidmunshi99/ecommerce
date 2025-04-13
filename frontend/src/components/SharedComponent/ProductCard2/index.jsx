import React from 'react'
import { Link } from 'react-router'
import StarRatting from '../StarRatting'
import AddCartButton from '../AddCartButton'


const ProductCard2 = ({item}) => {
  return (
    <div className='productItem p-4 shadow-md bg-[#f1f1f1] rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center flex-col lg:flex-row'>
        <div className='group imgWrapper w-full lg:w-[25%]  overflow-hidden  rounded-md relative'>
         
          {/** Product Image */}
          <figure className='overflow-hidden !w-100% relative'>
            <img className='overflow-hidden object-fill w-full' src={item.images[0]} alt="" />

            {/** Show Discount */}
            <div className='absolute top-2 left-2 bg-theme p-1 rounded-[5px]'>
              <p className='font-medium text-[13px] text-white'>{item.discount}%</p>
            </div>
          </figure>
      </div>
      <div className='group imgWrapper w-full lg:w-[75%]  overflow-hidden  rounded-md relative'>
          {/** Product Details */}
          <div className="p-10 ">
            {/* Category */}
              <p className="text-[14px] uppercase text-start text-gray-500">{item.category}</p>

            {/* Title */}
            <h2 className="text-start text-[18px] font-[500] py-3 link">
              <Link to="#">{item.product_name}</Link>
            </h2>

            {/** Description */}
            <p>{item.description}</p>

            {/* Ratings */}
            <div className="flex items-center space-x-1 pt-6 text-yellow-400">
              <StarRatting value={2.5}/>
            </div>
            
            {/* Price Section */}
            <div className="flex items-center gap-5 space-x-2 py-4">
              <span className="line-through text-gray-400 text-[15px] font-[600]">${item.price}</span>
              <span className="text-[15px] font-[600] text-red-600">
                ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
              </span>
            </div>

            {/* Add to Cart Button */}
            <div className='inline-block'>
              <AddCartButton to={'#'}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductCard2