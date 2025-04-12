import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const ProductListing = () => {
  return (
    <section className='bg-white'>
        <div className="container py-6">
            <div className="flex justify-between flex-col lg:flex-row sm:flex-auto gap-6">
                {/** Left Side Bar */}
                <aside className='sidebarWrapper px-4 w-full lg:w-[20%] '>
                    <Sidebar/>
                </aside>

                {/** Right Sizd Display All Products */}
                <div className="rightContent w-full bg-white lg:w-[80%]">
                    <div>
                        <Content/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductListing