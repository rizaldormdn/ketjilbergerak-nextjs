import Image from 'next/image';
import React from 'react'
import sa from "../../assets/images/Sosmed2.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const Slider = () => {
     return (
          <Swiper
               slidesPerView={1}
               breakpoints={{
                    640: {
                         slidesPerView: 4
                    }
               }}
          >
               <div className='bg-slate-700'>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[50px]' src={sa} height={50} width={200} alt='' /></SwiperSlide>
               </div>
          </Swiper>
     )
}
