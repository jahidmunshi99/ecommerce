import React from 'react'
import { Link } from "react-router";


const AddCartButton = ({to}) => {
  return (
    <Link to={to} className="w-full border text-theme py-2 inline-block cursor-pointer rounded-[2px] text-sm font-medium transition">
        Add to Cart
    </Link>
  )
}

export default AddCartButton