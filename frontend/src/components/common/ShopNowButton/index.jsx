import React from 'react'
import { Link } from 'react-router'

const ShopNowButton = ({to, btn, className}) => {
    return (
      <Link to={to} className={`text-[14px] font-[700] underline link m-0 uppercase cursor-pointer z-40 ${className}`}>{btn}</Link>
      )
}

export default ShopNowButton