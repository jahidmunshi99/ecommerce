import React from 'react'
import { NavLink } from 'react-router'

const MainMenu = () => {
  return (
    <ul className='flex justify-start items-center gap-6'>
        <li className='list-none link transition'><NavLink to={'/'}>Home</NavLink></li>
        <li className='list-none link transition'><NavLink to={'/productlisting'}>Fashion</NavLink></li>
        <li className='list-none link transition'><NavLink to={'/productlisting'}>Electronics</NavLink></li>
        <li className='list-none link transition'><NavLink to={'/productlisting'}>Blogs</NavLink></li>
        <li className='list-none link transition'><NavLink to={'/productlisting'}>Footware</NavLink></li>
        <li className='list-none link transition'><NavLink to={'/productlisting'}>Glowceries</NavLink></li>
        <li className='list-none link transition'><NavLink to={'/productlisting'}>Beauty</NavLink></li>
        <li className='list-none link transition'><NavLink to={'/productlisting'}>Wellness</NavLink></li>
        <li className='list-none link transition'><NavLink to={'/productlisting'}>Jewellery</NavLink></li>
    </ul>
  )
}

export default MainMenu
