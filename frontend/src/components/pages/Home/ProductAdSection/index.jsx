import React from 'react'
import AdsSlider from './AdsSlider';
import { useFetch } from '../../../../useHook/useFetch';
import ProductAdsCard from '../../../SharedComponent/ProductAdsCard';


const ProductAdSection = () => {

  const url = "bannerAdsList.json"
  const cardAdds = useFetch({url})
  

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 overflow-hidden">
        <div className="md:w-2/3 w-full">
          <AdsSlider />
        </div>
        <div className="md:w-1/3 w-full">
          <div className='flex md:flex-col flex-row gap-6 overflow-x-auto'>
            {
              cardAdds.slice(0, 2).map((item)=>            
                <ProductAdsCard key={item.id} item={item}
                className={item.id%2 === 0 ? 'right-0 !w-[60%]' : ''}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAdSection
