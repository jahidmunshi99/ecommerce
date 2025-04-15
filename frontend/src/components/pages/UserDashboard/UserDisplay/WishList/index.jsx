import React from 'react'
import StarRatting from '../../../../SharedComponent/StarRatting'

const WishList = () => {
  return (
    <div className='shadow-md rounded-md bg-white w-full md:w-[85%]'>
      <div className='py-5 px-3 border-b border-[rgba(0,0,0,0.1)]'>
        <h2 className='font-[600]'>My List</h2>
        <p className='mt-0 mb-0 py-2'>
          There are 
          <span className='font-bold text-primary'> 1 </span>
          products in your My List
        </p>
      </div>
      <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]'>
        <div className='img w-[30%] sm:w-[15%] h-[150px] rounded-md overflow-hidden'>
          <a className='group' href="#"><img className='w-full group-hover:scale-105 transition-all' src="https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp" alt="" /></a>
        </div>
        <div className='info relative'>
          <h3 className='text-[13px] sm:text-[15px]'>
            <a href="">Men Pure Cotton Striped Casual Shirt...</a>
          </h3>
          
          <StarRatting value={4}/>

          <div className='flex items-center gap-4 mt-2 mb-2'>
            <span className='price text-[14px]  font-[600]'>$350</span>
            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>$250</span>
            <span className='price text-primary text-[14px]  font-[600]'> 10% Off</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WishList