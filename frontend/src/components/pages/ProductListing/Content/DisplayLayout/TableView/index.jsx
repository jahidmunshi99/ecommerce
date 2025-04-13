import React from 'react'
import ProductCard from '../../../../../SharedComponent/ProductCard'



const TableView = ({items}) => {

  return (
    <div className='grid lg:grid-cols-5 grid-cols-2 items-stretch gap-5 my-6'>
      {
        items.map((item)=>
            <ProductCard key={item.id} item={item}/>
        )
      }
    </div>
  )
}

export default TableView