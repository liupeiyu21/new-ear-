import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Banner1 from "/pc-top-banner1.png"
import Banner2 from "/pc-top-banner2.png"
import Banner3 from "/pc-top-banner3.png"
import Banner4 from "/pc-top-banner4.png"
import Banner5 from "/pc-top-banner5.png"
import Banner6 from "/pc-top-banner6.png"

import "../PcTop.css"
// import required modules

import { Autoplay, Navigation,  Mousewheel, Keyboard } from 'swiper/modules';

export default function Banner() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
    <div className='banner-swiper'>
      <Swiper
        // pagination={pagination}
         modules={[Navigation,  Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        breakpoints={{
            375:{
                slidesPerView:2,
                spaceBetween:10,
            },
            640:{
                slidesPerView:3,
                spaceBetween:10,
            },
            820: {
                slidesPerView:3,
                spaceBetween:10,
            },
            1024:{
                slidesPerView:6,
                spaceBetween:15,
            }
        }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={3000}
        loop = {{loop: true}}

      >
        <SwiperSlide>
            <img src={Banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner6} alt="" />
        </SwiperSlide>


        <SwiperSlide>
            <img src={Banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner6} alt="" />
        </SwiperSlide>
    
      </Swiper>
      </div>
    </>
  );
}