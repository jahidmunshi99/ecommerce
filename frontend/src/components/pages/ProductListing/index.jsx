import React from 'react'
import Sidebar from './Sidebar'

const ProductListing = () => {
  return (
    <section>
        <div className="container py-6">
            <div className="flex justify-between flex-col lg:flex-row sm:flex-auto gap-6">
                <aside className='sidebarWrapper bg-amber-200 px-4 w-full lg:w-[25%] '>
                    <Sidebar/>
                </aside>
                <div className="rightContent w-full py-3 bg-amber-900 lg:w-[75%]">
                    Body Content
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductListing