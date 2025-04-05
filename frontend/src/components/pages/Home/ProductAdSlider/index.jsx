import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductAdSlider.css';
import Button from '../../../SharedComponent/Button';


import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const ProductAdSlider = () => {
    const products = [
        {
            id: '1',
            image : "https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg",
            title : "Buy New Trend Women Black Cotton Blend Top | top for women | women top...",
            subtitle : "Big saving days sale",
            price : "$35000.00",
        },
        {
            id: '2',
            image : "https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg",
            title : "Apple iPhone 13 128 GB, Pink",
            subtitle : "Buy New Trend Women Black Cotton Blend Top | top for women | women top...",
            price : "$35000.00",
        }
    ]
  return (
    <>
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
            {products.map((item)=> 
            <SwiperSlide key = {item.id} >
                <div className='slide-item'>
                    <img src={item.image} alt="slider-1" />
                    <div className='slide-body'>
                        <div className='subtitle text-[12px] lg:text-[18px] font-[500] w-full text-left mb-3 lg:block'>{item.subtitle}</div>
                        <div className='title sm:text-[20px] md:text-[25px] lg:text-[30px] font-[700]'>{item.title}</div>
                        <div className='price mb-5'>
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
    </>
  )
}

export default ProductAdSlider
