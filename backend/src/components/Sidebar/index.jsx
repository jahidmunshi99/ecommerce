import React from 'react'
import NavigationMenu from './NavigationMenu'

const Sidebar = () => {
  return (
    <div className='flex h-screen overflow-hidden border-r-[0.1px] border-gray-800 w-[100%] px-4'>
        <aside className='sidebar w-[100%]'>
            {/** Sidebar Header */}
            <div className='sidebar-header p-5'>
                <h2 className='text-3xl'>ProgHive</h2>
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