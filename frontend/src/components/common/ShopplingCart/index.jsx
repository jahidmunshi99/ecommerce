import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { IoMdClose } from "react-icons/io";
import Button from '../../common/Button'
import { MdDeleteOutline } from "react-icons/md";



const ShoppingCart = ({displayCart})=> {

  const {showCart, handleShopCart} = displayCart;

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <List>
        <div className='!text-black gap-4 flex justify-between items-center p-1 px-4'>
          <p className='text-[16px] font-[600]'>Shopping Cart (1)</p>
          <IoMdClose onClick={handleShopCart(false)} className='text-[20px] cursor-pointer'/>
        </div>
      </List>
      <Divider />
      {/* <List>
        <div className='flex !items-center justify-center flex-col pt-[100px] gap-5'>
          <img className='w-[150px]' src="https://ecommerce-frontend-view.netlify.app/empty-cart.png" alt="cart image" />
          <h4 className='text-[16px] font-[600]'>Your Cart is currently empty</h4>
          <Button btn={'Continue Shopping'}/>          
        </div>
      </List> */}
      <List>
        <div className='scroll w-full max-h-[60vh] overflow-y-scroll overflow-x-hidden py-3 px-4'>
          <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4'>
            <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
              <img className='w-full group-hover:scale-105' src="https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp" alt="prodcut-image" />
            </div>
            <div className='info w-[75%] pr-5 relative pt-3'>
                <h4 className='text-[12px] sm:text-[14px] font-[500] link'>
                  Men Pure Cotton Stri...
                </h4>
                <p className='flex items-center gap-5 mt-2 mb-2'>
                  <span className='text-[13px] sm:text-[14px]'>Qty : <span>1</span></span>
                  <span className='text-primary font-bold'>₹1,999.00</span>
                </p>
              <div className='absolute right-0 top-3 text-xl cursor-pointer link'>
                <MdDeleteOutline />
              </div>
            </div>

          </div>
        </div>
        <br />
        <div className='bottomSec bottom-[10px] left-[10px] w-full overflow-hidden pr-5'>
          <div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
            <div className='flex items-center justify-between w-full'>
              <span className='text-[14px] font-[600]'>1 item</span>
              <span className='text-primary font-bold'>1,999.00</span>
            </div>
          </div>
          <div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
            <div className='flex items-center justify-between w-full'>
              <span className='text-[14px] font-[600]'>Total (tax excl.)</span>
              <span className='text-primary font-bold'>₹1,999.00</span>
            </div>
            <div className='flex items-center gap-4 justify-center w-full pt-4'>
              <Button btn={'View Cart'}/>
              <Button btn={'Checkout'}/>
            </div>

          </div>
        </div>
      </List>

      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={showCart} onClose={handleShopCart(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default ShoppingCart