import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";



const SideMenuPanel = ({toggleDrawer, showPanel}) => {

    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef(null);
  
    // Close submenu when clicking outside
    useEffect(() => {
      function handleClickOutside(event) {
        if (submenuRef.current && !submenuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
    }})

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {/* Logo */}
        <div className='w-[180px]'>
          <img src="src/assets/logo.jpg" alt="logo" />
        </div>
        <div className='!text-black gap-4 flex justify-between items-center my-7 px-3'>
          <p className='text-[16px] font-[500]'>Shop By Categories</p>
          <IoMdClose onClick={toggleDrawer(false)} className='text-[20px] cursor-pointer'/>
        </div>

        {/** All Menus */}
        <div className="scroll">
          <ul className='font-[500] w-full px-2'>
            <li className='list-none'>
              <Button className='!text-black !capitalize flex !justify-between items-center w-full relative'>
                <div>Fashion</div>
                <div><FaRegPlusSquare className='!text-black text-[16px]'/></div>
              </Button>
                {/** SubMenu */}
                <ul className='w-full pl-5'>
                  <li className='list-none'>
                    <Button className='!text-black !capitalize flex !justify-between items-center w-full relative'>
                      <div>SubMenu-1</div>
                      <div><FaRegPlusSquare className='!text-black text-[16px]'/></div>
                    </Button>
                  </li>
                  <li className='list-none'>
                    <Button className='!text-black !capitalize flex !justify-between items-center w-full relative'>
                      <div>SubMenu-2</div>
                      <div><FaRegPlusSquare className='!text-black text-[16px]'/></div>
                    </Button>
                  </li>
                  <li className='list-none'>
                    <Button className='!text-black !capitalize flex !justify-between items-center w-full relative'>
                      <div>SubMenu-3</div>
                      <div><FaRegPlusSquare className='!text-black text-[16px]'/></div>
                    </Button>
                  </li>
                </ul>
            </li>
            <li className='list-none w-full'>
              <Button className='!text-black !capitalize flex !justify-between items-center w-full'>
                <div>Electronics</div>
                <div><FaRegPlusSquare className='!text-black text-[16px]'/></div>
              </Button>
            </li>
            <li className='list-none w-full'>
              <Button className='!text-black !capitalize flex !justify-between items-center w-full'>
                <div>Blogs</div>
                <div><FaRegPlusSquare className='!text-black text-[16px]'/></div>
              </Button>
            </li>
            <li className='list-none w-full'>
              <Button className='!text-black !capitalize flex !justify-between items-center w-full'>
                <div>Footware</div>
                <div><FaRegPlusSquare className='!text-black text-[16px]'/></div>
              </Button>
            </li>
            <li className='list-none w-full'>
              <Button className='!text-black !capitalize flex !justify-between items-center w-full'>
                <div>Glowceries</div>
                <div ><FaRegPlusSquare className='!text-black text-[16px]'/></div>
              </Button>
            </li>
            <li className='list-none w-full'>
              <Button className='!text-black !capitalize flex !justify-between items-center w-full'>
                <div>Beauty</div>
                <div ><FaRegPlusSquare className='!text-black text-[16px]'/></div>
              </Button>
            </li>
            <li className='list-none w-full'>
              <Button className='!text-black !capitalize flex !justify-between items-center w-full'>
                <div>Wellness</div>
                <div ><FaRegPlusSquare className='!text-black text-[16px]'/></div>
              </Button>
            </li>
            <li className='list-none w-full'>
              <Button className='!text-black !capitalize flex !justify-between items-center w-full'>
                <div>Jewellery</div>
                <div ><FaRegPlusSquare className='!text-black text-[16px]'/></div>
              </Button>
            </li>
          </ul>
        </div>

      </List>
    </Box>
  );


  return (
    <div>
      <Drawer open={showPanel}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default SideMenuPanel
