import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';


import { Autoplay, Navigation  } from 'swiper/modules';
import ProductCard from '../ProductCard';
import { useFetch } from '../../../useHook/useFetch';


const Slider = () => {
    const url = "productsLists.json";
    const items = useFetch({url})
  return (
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={12}
            rewind={true}
            // loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
                640: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 4,
                spaceBetween: 30,
                },
                1024: {
                slidesPerView: 6,
                spaceBetween: 40,
                },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            {
                items.map( (item)=> 
                <SwiperSlide key={item.id}>
                    <ProductCard  item = {item}/> 
                </SwiperSlide>
                )
            }
        </Swiper>
    </>
  )
}

export default Slider