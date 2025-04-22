import React from 'react'
import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";


const AddCartButton = ({to}) => {
  return (
    <Link to={to} className="border-1 w-full cartbtn-theme py-2 px-5 cursor-pointer rounded-[2px] text-sm text-center font-medium transition flex items-center gap-3">
        <IoCartOutline className='text-[18px]' /> Add to Cart
    </Link>
  )
}

export default AddCartButton