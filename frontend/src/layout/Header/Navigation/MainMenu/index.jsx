import React from 'react'
import { NavLink } from 'react-router'

const MainMenu = () => {
  return (
    <ul className='flex justify-start items-center gap-6'>
        <li className='list-none link transition'><NavLink to={'#'}>Home</NavLink></li>
        <li className='list-none link transition'><NavLink to={'#'}>Fashion</NavLink></li>
        <li className='list-none link transition'><NavLink to={'#'}>Electronics</NavLink></li>
        <li className='list-none link transition'><NavLink to={'#'}>Blogs</NavLink></li>
        <li className='list-none link transition'><NavLink to={'#'}>Footware</NavLink></li>
        <li className='list-none link transition'><NavLink to={'#'}>Glowceries</NavLink></li>
        <li className='list-none link transition'><NavLink to={'#'}>Beauty</NavLink></li>
        <li className='list-none link transition'><NavLink to={'#'}>Wellness</NavLink></li>
        <li className='list-none link transition'><NavLink to={'#'}>Jewellery</NavLink></li>
    </ul>
  )
}

export default MainMenu
