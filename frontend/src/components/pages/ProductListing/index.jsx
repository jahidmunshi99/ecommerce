import React from 'react'
import Sidebar from './Sidebar'

const ProductListing = () => {
  return (
    <section>
        <div className="container py-6">
            <div className="flex justify-between flex-col lg:flex-row sm:flex-auto gap-6">
                <aside className='sidebarWrapper px-4 w-full lg:w-[25%] '>
                    <Sidebar/>
                </aside>
                <div className="rightContent w-full bg-gray-300 lg:w-[75%]">
                    <div className='p-5'>
                        Body Content
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductListing