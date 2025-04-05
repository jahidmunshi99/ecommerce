import React from 'react'

const Button = ({btn}) => {
  return (
    <button className='text-[15px] text-white font-[600] m-0 uppercase bg-primary py-2 px-4 rounded-[5px] cursor-pointer'>{btn}</button>
  )
}

export default Button