import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useFetch } from '../../../../useHook/useFetch';
import './style.css'


const CategoriesSlide = () => {
  const url = 'allCategory.json'
  const items = useFetch({url})

  return (
    <div className='pt-0 lg:pt-4 py-4 lg:py-8'>
      <div className="container">
        <Swiper 
          watchSlidesProgress={true} 
          slidesPerView={8}
          spaceBetween={12}
          className="mySwiper ">
              {                
                items.map((item)=>  
                    <SwiperSlide key={item.id}>
                      <div className="item bg-white lg:py-7 rounbded-sm text-center flex items-center justify-center flex-col">
                          <img className=" !w-[65px] !lg:w-[60px] !transition-all" src={item.image} />
                          <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">{item.category}</h3>
                      </div>
                    </SwiperSlide>
                )
              }
        </Swiper>
      </div>
    </div>
  )
}

export default CategoriesSlide
