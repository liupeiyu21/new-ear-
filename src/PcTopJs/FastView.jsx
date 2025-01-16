import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Swiper1 from "/pc-top-swiper1.png";
import Swiper2 from "/pc-top-swiper2.png";
import Swiper3 from "/pc-top-swiper3.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../PcTop.css"

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function FastView() {
  return (
    <>
   
    <div className='fastview-swiper'>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        breakpoints={{
            375:{
                slidesPerView:1,
                spaceBetween:10,
            },
            640:{
                slidesPerView:1,
                spaceBetween:10,
            },
            768: {
                slidesPerView:2,
                spaceBetween:0,
            },
            1024:{
                slidesPerView:4,
                spaceBetween:15,
            }
        }}
        loop = {{loop: true}}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}


        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Swiper1} alt="バナーの画像" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Swiper2} alt="バナーの画像" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Swiper3} alt="バナーの画像" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Swiper1} alt="バナーの画像" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Swiper2} alt="バナーの画像" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Swiper3} alt="バナーの画像" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Swiper1} alt="バナーの画像" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Swiper2} alt="バナーの画像" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Swiper3} alt="バナーの画像" />
        </SwiperSlide>
      </Swiper>
    </div>

    </>
  );
}