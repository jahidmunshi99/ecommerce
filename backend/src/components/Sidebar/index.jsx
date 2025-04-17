import React from 'react'
import NavigationMenu from './NavigationMenu'

const Sidebar = () => {
  return (
    <div className='flex h-screen overflow-hidden px-4 border-r-[0.1px] border-gray-800 w-[100%]'>
        <aside className='sidebar w-[100%]'>
            {/** Sidebar Header */}
            <div className='sidebar-header'>
                <h2>ProgHive</h2>
            </div>
            {/** Sidebar Menu */}
            <div className='pt-10'>
                <NavigationMenu/>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar