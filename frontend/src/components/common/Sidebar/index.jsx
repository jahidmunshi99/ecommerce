import React from 'react'

const Sidebar = ({children}) => {
  return (
    <aside className='sidebarWrapper px-4 w-full lg:w-[20%] '>
        {children}
    </aside>
  )
}

export default Sidebar