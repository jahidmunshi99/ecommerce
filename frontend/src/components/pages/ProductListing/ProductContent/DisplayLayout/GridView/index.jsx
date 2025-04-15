import React from 'react'
import ProductCard2 from '../../../../../SharedComponent/ProductCard2'

const GridView = ({items}) => {


    return (
        <div className="mt-4">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4'>
                {
                    items.map((item)=>
                        <ProductCard2 key={item.id} item={item}/>
                    )
                }
            </div>
        </div>

    )
}

export default GridView     