import React from 'react'
import ShopNowButton from '../ShopNowButton'

const ProductAdsCard = ({item={}, className=""}) => {

    return (
        <div className='relative overflow-hidden h-[225px] rounded-[10px] group'>
            <img className='w-full object-fill group-hover:scale-105 transition-all' src={item.image} alt="image" />
            <div className={`absolute top-[50%] -translate-y-1/2 w-[75%] p-7 my-auto ${className}`}>
                <h2 className='text-xl font-[600]'>{item.title}</h2>
                <p className='text-xl text-theme font-[600] py-4'>${item.price}</p>
                <ShopNowButton to={'/'} btn={'Shop Now'}/>
            </div>
        </div>
    )
}

export default ProductAdsCard