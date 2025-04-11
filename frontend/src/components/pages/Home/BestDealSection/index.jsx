import React from 'react'
import SectionTitle from '../../../SharedComponent/SectionTitle'
import PromoCard from '../../../SharedComponent/PromoCard'
import { useFetch } from '../../../../useHook/useFetch'

const BestDealSection = () => {
    const url = 'bestDealAds.json' 
    const items = useFetch({url})
  return (
    <div className="py-10">
        <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 overflow-x-auto">
                {
                    items.map((item)=>
                        <div key={item.id}>
                            <PromoCard item={item}/>                    
                        </div>
                    )
                }
            </div>
        </div>

    </div>
  )
}

export default BestDealSection