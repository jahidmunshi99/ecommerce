import React from 'react'
import ProductAdsCard from '../../../SharedComponent/ProductAdsCard'
import { useFetch } from '../../../../useHook/useFetch'

const CardAdsSection = () => {
      const url = "bannerAdsList.json"
      const items = useFetch({url})

  return (
    <div className='container'>
        <div className="flex md:flex-row flex-col justify-between gap-4">
            {
                items.map((item)=>
                <div className="md:w-1/4 w-full">
                    <ProductAdsCard item={item}
                    className={ item.id%2 === 0 ? 'right-0 !w-[60%]' : ''}
                    />
                </div>
                )
            }
        </div>
    </div>
  )
}

export default CardAdsSection