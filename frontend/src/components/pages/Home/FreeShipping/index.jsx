import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";


const FreeShipping = () => {
  return (
    <div className='bg-white py-7'>
      <div className="container">
        <div className='flex flex-wrap w-full md:w-[90%] justify-between items-center border-primary border-2 rounded-[5px] p-4 mx-auto'>
            <div className="col-1/3">
                <div className='flex items-center gap-4'>
                    <TbTruckDelivery className='text-6xl'/>
                    <p className='text-xl font-[600]'>FREE SHIPPING</p>
                </div>
            </div>
            <div className="col-1/3">
                <p>Free Delivery Now On Your First Order and over $200</p>
            </div>
            <div className="col-1/3">
                <p className='text-2xl font-[600]' >- Only $200*</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FreeShipping
