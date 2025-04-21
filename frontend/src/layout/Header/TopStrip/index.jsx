import React from 'react'
import { Link } from "react-router";
import Container from "../../../components/SharedComponent/Container"

const TopStrip = () => {
  return (
    <>
      <div className="top-strip border-t-1 border-b-1 border-b-gray-200 border-t-gray-200 bg-white w-full">
        <Container className="py-2 max-w-screen px-10">
        {/* <div className="container"> */}
          <div className="grid grid-cols-2 items-center">
            {/* Left Column */}
            <div className="col-span-1">
              <p className="font-medium text-[12px] md:text-[13px]">Get up to 50% off new season styles, limited time only</p>
            </div>

            {/* Right Column */}
            <div className="col-span-1">
              <ul className="flex items-center justify-end gap-6 list-none">
                <li className='link hoverEffect font-medium text-[12px] md:text-[13px]'><Link to="">Help Center</Link></li>
                <li className='link hoverEffect font-medium text-[12px] md:text-[13px]'><Link to="">Order Tracking</Link></li>
              </ul>
            </div>
          </div>
        {/* </div> */}
        </Container>
      </div>
    </>
  )
}

export default TopStrip
