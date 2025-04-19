import React from 'react'
import AllOrders from '../Orders';
import SectionHead from '../../../common/SectionHead';


const Products = () => {
  return (
    <>
      <SectionHead title={'Products'} item1={'Add New Product'}/>
      <AllOrders/>
      {/* </div> */}
    </>

  )
}

export default Products
