import React from 'react'
import { LuUsers } from "react-icons/lu";



const Overview = () => {
  return (
    <div className='p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6'>
        <div className='grid grid-cols-12 gap-4 md:gap-6'>
            <div className='col-span-12 space-y-6 xl:col-span-7'>
                {/** Matric Group One */}
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6'>
                    {/** Matric Item Start */}
                    <div className='rounded-2xl borde bg-gray-800 p-5 border-gray-800 md:p-6'>
                        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800'>
                            <LuUsers className='text-xl'/>
                        </div>
                        <div className='mt-5 flex items-center justify-between'>
                            <div>
                                <span className='text-sm text-gray-500'>Customers</span>
                                <h4 className='text-title-sm font-bold text-gray-400'>3000</h4>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview
