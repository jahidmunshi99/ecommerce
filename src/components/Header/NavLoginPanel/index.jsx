import React from 'react'
import { Link } from 'react-router'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const NavLoginPanel = () => {
  return (
    <div className=''>
      <ul className='list-none flex justify-end items-center gap-2'>
        <li><Link to={"/singin"}>Login</Link></li>
        <li>|</li>
        <li><Link to={"/singup"}>Register</Link></li>
        <li className='px-5'><Link className='text-xl' to={"/wishlist"}>< FaRegHeart/></Link></li>
        <li><Link className='text-2xl' to={"/cart"}><IoCartOutline/></Link></li>
      </ul>
    </div>
  )
}

export default NavLoginPanel
