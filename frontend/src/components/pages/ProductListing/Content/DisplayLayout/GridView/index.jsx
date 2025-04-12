import React from 'react'

const GridView = () => {
  return (
    <div className="mt-4">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4'>
            <div className='productItem p-4 shadow-md bg-[#f1f1f1] rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center flex-col lg:flex-row'>
                <div className='group imgWrapper w-full lg:w-[25%]  overflow-hidden  rounded-md relative'>
                    <img src="" alt="" />
                    <h3>Test</h3>
                </div>
            </div>
            <div className='productItem p-4 shadow-md bg-[#f1f1f1] rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center flex-col lg:flex-row'>
                <div className='group imgWrapper w-full lg:w-[25%]  overflow-hidden  rounded-md relative'>
                    <img src="" alt="" />
                    <h3>Test</h3>
                </div>
            </div>
        </div>
    </div>

  )
}

export default GridView     