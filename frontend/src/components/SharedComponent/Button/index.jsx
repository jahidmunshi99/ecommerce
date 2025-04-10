import React from 'react'

const Button = ({btn, className}) => {
  return (
    <button className={`text-[14px] text-white font-[600] m-0 uppercase bg-theme py-[10px] px-7 rounded-[5px] cursor-pointer z-40 hover:bg-black-600 ${className}`}>{btn}</button>
  )
}

export default Button