import React from 'react'
import MenuTitle from '../../../common/MenuTitle'
import MenuTab from '../../../common/MenuTab'

const Products = () => {
  return (
    <>
        <div className='flex justify-between items-center'>
            {/** Menu Name */}
            <div>
                <MenuTitle title={'Products'}></MenuTitle>
            </div>
            {/** menu */}
            <div className =''>    
                <MenuTab/>
            </div>
        </div>
    </>

  )
}

export default Products
