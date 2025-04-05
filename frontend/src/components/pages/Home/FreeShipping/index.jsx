import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";


const FreeShipping = () => {
  return (
    <div className='bg-white py-7'>
      <div className="container">
        <div className='flex justify-between items-center border-primary border-2 rounded-[5px] p-4 w-[75%] mx-auto'>
            <div className="col_1 w-[25%]">
                <div className='flex items-center gap-4'>
                    <TbTruckDelivery className='text-6xl'/>
                    <p className='text-xl font-[600]'>FREE SHIPPING</p>
                </div>
            </div>
            <div className="col_2 w-[40%]">
                <p>Free Delivery Now On Your First Order and over $200</p>
            </div>
            <div className="col_3 w-[15%]">
                <p className='text-2xl font-[600]' >- Only $200*</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FreeShipping
