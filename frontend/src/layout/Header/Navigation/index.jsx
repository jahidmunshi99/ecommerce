import React, { useState } from 'react'
import MainMenu from './MainMenu'
import { IoRocketOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import Container from '../../../components/common/Container';
import SideMenuPanel from './SideMenuPanel';


const Navigation = () => {
  const [showPanel, setShowPanel] = useState(false);

  const toggleDrawer = (showPanel) => () => {
    setShowPanel(showPanel);
  };

  return (
    <nav className='py-2 md:py-4 border-t-1 border-b-1 border-b-gray-200 border-t-gray-200 bg-white hidden md:block'>
        <Container className="max-w-screen py-0 md:py-2 px:0 md:px-10">
          <div className='grid grid-cols-1 md:grid-cols-[18%_60%_18%] gap-8 items-center text-sm font-medium'>
            {/* Shop Category Menus */}
              <div className="col">
                <div className='w-full'>
                  {/** Sidebar Menu Button */}
                  <Button onClick={toggleDrawer(true)} className='!text-black gap-4 flex justify-between items-center w-full'>
                    <RiMenu2Fill className='text-xl'/>Shop By Categories
                    <div className=''><FaAngleDown/></div>
                  </Button>
                </div>
              </div>

            {/* Navigation Menu */}
              <div className="col flex justify-start">
                <MainMenu/>
              </div>

            {/* End Column */}
              <div className="col">
                <div className='flex items-center gap-3 justify-end'>
                  <IoRocketOutline style={{ fontSize: "20px" }} />Free Internation Delivery
                </div>
              </div>
            </div>
        </Container>

        <SideMenuPanel toggleDrawer={toggleDrawer} showPanel={showPanel}/>
    </nav>
    
  )
}

export default Navigation
