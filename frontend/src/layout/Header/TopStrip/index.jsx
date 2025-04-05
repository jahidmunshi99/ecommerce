import React from 'react'
import { Link } from "react-router";

const TopStrip = () => {
  return (
    <>
      <div className="top-strip py-2 border-t-1 border-b-1 border-b-gray-200 border-t-gray-200 bg-white">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Left Column */}
            <div className="col_1 w-[50%]">
              <p className="text-[14px] font-[400]">Get up to 50% off new season styles, limited time only</p>
            </div>

            {/* Right Column */}
            <div className="col_2 w-[50%]">
              <ul className="flex items-center justify-end text-[14px] gap-6">
                <li className='list-none link font-[400] transition'><Link to="">Help Center</Link></li>
                <li className='list-none link font-[400] transition'><Link to="">Order Tracking</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopStrip
