import React, { useState } from 'react'
import { Link } from 'react-router'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCart from '../../../../components/SharedComponent/ShopplingCart';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const NavLoginPanel = () => {

  {/** Hanlde ShopCardToggle */}
  const [showCart, setShowCart] = useState(false);

  const handleShopCart = (showCart)=>()=>{
    setShowCart(showCart)
  }

  {/** Export as a Object to control the Shopping Cart Side Toggle */}
  const displayCart = {
    showCart,
    handleShopCart
  }



  return (
    <>
      <ul className='list-none flex justify-end items-center gap-5 w-full'>
        <li><Link className='link hoverEffect' to={"/myaccount"}>Login</Link> | <Link className='link hoverEffect' to={"/myaccount"}>Register</Link></li>
        <li className='text-2xl px-1 flex gap-1'>
          {/* Compare */}
          <Tooltip title="compare">
            <Link to={"/"}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent = {4} color = "secondary">
                  <IoMdGitCompare/>
                </StyledBadge>
              </IconButton>
            </Link>
          </Tooltip>

          {/* Wishlist */}
          <Tooltip title="wishlists">
            <Link className='text-2xl px-1 hoverEffect' to={"/"}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent = {4} color = "secondary">
                  < FaRegHeart/>
                </StyledBadge>
              </IconButton>
            </Link>
          </Tooltip>

          {/* Cart */}
          <Tooltip title="cart" >
              <IconButton onClick={ handleShopCart(true) } aria-label= "cart" className = 'text-2xl px-1'>
                <StyledBadge badgeContent = {4} color = "secondary">
                  <IoCartOutline/>
                </StyledBadge>
              </IconButton>
          </Tooltip>
        </li>
      </ul>
      <ShoppingCart displayCart={displayCart} />
    </>
  )
}

export default NavLoginPanel
