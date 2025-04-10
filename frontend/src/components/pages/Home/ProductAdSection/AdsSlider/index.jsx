import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../../../SharedComponent/Button'
import 'swiper/css';
import 'swiper/css/navigation';
import { useFetch } from '../../../../../useHook/useFetch';
import '../AdsSlider/adsSlider.css'

import { Navigation, Autoplay, Pagination } from 'swiper/modules';


const AdsSlider = () => {
    const url = 'sliderAdsList.json';
    const allAdds = useFetch({url})
    return (
        <Swiper
            rewind={true}
            navigation={true}
            pagination={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
        >
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {allAdds.map((item)=> 
                <SwiperSlide key = {item.id} >
                    <div className='slide-item max-h-[480px] w-full'>
                        <img src={item.image} alt="slider-1" />
                        <div className='slide-body'>
                            <div className='subtitle text-[12px] lg:text-[18px] font-[500] w-full text-left mb-3 lg:block'>{item.subtitle}</div>
                            <div className='title sm:text-[20px] md:text-[25px] lg:text-[30px] font-[700]'>{item.title}</div>
                            <div className='price mb-5 flex items-center gap-4'>
                                Starting At Only <span className='text-primary text-[16px] lg:text-[30px] 
                            font-[700] block lg:inline'>{item.price}</span>
                            </div>
                            <Button btn={'Shop Now'} />
                        </div>
                    </div>
                </SwiperSlide>
                )}
            </Swiper>
        </Swiper>
    )
}

export default AdsSlider