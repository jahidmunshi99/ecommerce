import React from 'react'
import ProductCard from '../../../../../SharedComponent/ProductCard'



const TableView = ({items}) => {

  return (
    <div className='flex flex-col md:flex-row justify-between items-stretch gap-26 overflow-hidden'>
      {
        items.map((item)=>
            <ProductCard key={item.id} item={item}/>
        )
      }
    </div>
  )
}

export default TableView