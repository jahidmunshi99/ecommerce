import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './CategorySlider.css';


const CategorySlider = () => {
  return (
    <div className='pt-0 lg:pt-4 py-4 lg:py-8'>
      <div className="container">
        <Swiper
                slidesPerView={8}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="homeCatSlider"
            >
                <SwiperSlide>
                  <div className="item py-4 lg:py-7 px-4 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img className=" !w-[65px] !lg:w-[60px] !transition-all" src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" />
                    <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Fashion</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item py-4 lg:py-7 px-4 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img className=" !w-[65px] !lg:w-[60px] !transition-all" src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png" />
                    <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Fashion</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item py-4 lg:py-7 px-4 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img className=" !w-[65px] !lg:w-[60px] !transition-all" src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Fashion</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item py-4 lg:py-7 px-4 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img className=" !w-[65px] !lg:w-[60px] !transition-all" src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Fashion</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item py-4 lg:py-7 px-4 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img className=" !w-[65px] !lg:w-[60px] !transition-all" src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Fashion</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item py-4 lg:py-7 px-4 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img className=" !w-[65px] !lg:w-[60px] !transition-all" src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Fashion</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item py-4 lg:py-7 px-4 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img className=" !w-[65px] !lg:w-[60px] !transition-all" src="https://serviceapi.spicezgold.com/download/1741661105893_well.png" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Fashion</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item py-4 lg:py-7 px-4 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img className=" !w-[65px] !lg:w-[60px] !transition-all" src="https://serviceapi.spicezgold.com/download/1741661120743_jw.png" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Jewellery</h3>
                  </div>
                </SwiperSlide>
            </Swiper>
      </div>
    </div>
  )
}

export default CategorySlider
