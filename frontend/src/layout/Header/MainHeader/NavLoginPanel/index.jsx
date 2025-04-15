import React from 'react'
import { Link } from 'react-router'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const NavLoginPanel = () => {
  return (
    <div className=''>
      <ul className='list-none flex justify-end items-center gap-5 w-full'>
        <li><Link className='link' to={"/myaccount"}>Login</Link> | <Link className='link' to={"/myaccount"}>Register</Link></li>
        <li>
          {/* Compare */}
          <Tooltip title="compare">
            <Link className='text-2xl px-1' to={"/cart"}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent = {4} color = "secondary">
                  <IoMdGitCompare/>
                </StyledBadge>
              </IconButton>
            </Link>
          </Tooltip>

          {/* Wishlist */}
          <Tooltip title="wishlists">
            <Link className='text-2xl px-1' to={"/cart"}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent = {4} color = "secondary">
                  < FaRegHeart/>
                </StyledBadge>
              </IconButton>
            </Link>
          </Tooltip>

          {/* Cart */}
          <Tooltip title="cart">
            <Link className = 'text-2xl px-1' to = {"/cart"}>
              <IconButton  aria-label   = "cart">
                <StyledBadge badgeContent = {4} color = "secondary">
                  <IoCartOutline/>
                </StyledBadge>
              </IconButton>
            </Link>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}

export default NavLoginPanel
