import React, { useState } from 'react'
import MainMenu from './MainMenu'
import { IoRocketOutline } from "react-icons/io5";
import ShopCategoryPanel from './ShopCategoryPanel';
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";


const Navigation = () => {
  const [showPanel, setShowPanel] = useState(false);

  const toggleDrawer = (showPanel) => () => {
    setShowPanel(showPanel);
  };

  return (
    <nav className='py-4 border-t-1 border-b-1 border-b-gray-200 border-t-gray-200 bg-white'>
        <div className="container">
          <div className='flex justify-between items-center gap-8 font-[500]'>
            {/* Shop Category Menus */}
              <div className="col_1 w-[20%]">
                <Button onClick={toggleDrawer(true)} className='!text-black gap-4 flex justify-between items-center w-full'>
                  <RiMenu2Fill/>Shop By Categories
                  <div className='ml-10'><FaAngleDown/></div>
                </Button>
              </div>

            {/* Navigation Menu */}
              <div className="col_2 w-[60%]">
                <MainMenu/>
              </div>

            {/* End Column */}
              <div className="col_3 w-[20%]">
                <div className='flex items-center gap-3 justify-end'>
                  <IoRocketOutline style={{ fontSize: "20px" }} />Free Internation Delivery
                </div>
              </div>
            </div>
        </div>

        <ShopCategoryPanel toggleDrawer={toggleDrawer} showPanel={showPanel}/>
    </nav>
    
  )
}

export default Navigation
