import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";



const ShopCategoryPanel = ({toggleDrawer, showPanel}) => {

  const DrawerList = (
    <Box sx={{ width: 250 }} className="px-3" role="presentation">
      <List>

        {/* Logo */}
        <div className='w-[180px]'>
          <img src="src/assets/logo.jpg" alt="logo" />
        </div>
        <div className='!text-black gap-4 flex justify-between items-center my-7'>
          <p className='text-[16px] font-[500]'>Shop By Categories</p>
          <IoMdClose onClick={toggleDrawer(false)} className='text-[20px]'/>
        </div>

        {/** All Menus */}
        <ul className='font-[500]'>
          <li className='list-none w-full'>
            <Button className='!text-black capitalize flex !justify-between items-center w-full'>
              <div>Fashion</div>
              <div className='ml-10'><FaRegPlusSquare className='!text-black text-[16px]'/></div>
            </Button>
          </li>
          <li className='list-none w-full'>
            <Button className='!text-black capitalize flex !justify-between items-center w-full'>
              <div>Electronics</div>
              <div className='ml-10'><FaRegPlusSquare className='!text-black text-[16px]'/></div>
            </Button>
          </li>
          <li className='list-none w-full'>
            <Button className='!text-black capitalize flex !justify-between items-center w-full'>
              <div>Blogs</div>
              <div className='ml-10'><FaRegPlusSquare className='!text-black text-[16px]'/></div>
            </Button>
          </li>
          <li className='list-none w-full'>
            <Button className='!text-black capitalize flex !justify-between items-center w-full'>
              <div>Footware</div>
              <div className='ml-10'><FaRegPlusSquare className='!text-black text-[16px]'/></div>
            </Button>
          </li>
          <li className='list-none w-full'>
            <Button className='!text-black capitalize flex !justify-between items-center w-full'>
              <div>Glowceries</div>
              <div className='ml-10'><FaRegPlusSquare className='!text-black text-[16px]'/></div>
            </Button>
          </li>
          <li className='list-none w-full'>
            <Button className='!text-black capitalize flex !justify-between items-center w-full'>
              <div>Beauty</div>
              <div className='ml-10'><FaRegPlusSquare className='!text-black text-[16px]'/></div>
            </Button>
          </li>
          <li className='list-none w-full'>
            <Button className='!text-black capitalize flex !justify-between items-center w-full'>
              <div>Wellness</div>
              <div className='ml-10'><FaRegPlusSquare className='!text-black text-[16px]'/></div>
            </Button>
          </li>
          <li className='list-none w-full'>
            <Button className='!text-black capitalize flex !justify-between items-center w-full'>
              <div>Jewellery</div>
              <div className='ml-10'><FaRegPlusSquare className='!text-black text-[16px]'/></div>
            </Button>
          </li>
        </ul>
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

export default ShopCategoryPanel
