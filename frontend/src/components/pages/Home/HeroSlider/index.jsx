import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { Navigation, Autoplay } from 'swiper/modules';


const HeroSlider = () => {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src="https://serviceapi.spicezgold.com/download/1741660907985_NewProject.jpg" alt="slider-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg" alt="slider-2"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg" alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://serviceapi.spicezgold.com/download/1741660777364_NewProject(12).jpg" alt="4" />
          </SwiperSlide>
        </Swiper>
      </Swiper>
    </>
  )
}

export default HeroSlider
