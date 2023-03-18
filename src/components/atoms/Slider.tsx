import Image from 'next/image';
import React from 'react'
import sa from "../../assets/images/1_logo KPK.png"
import sb from "../../assets/images/4_logo USD.png"
import sc from "../../assets/images/3_logo UGM.png"
import sd from "../../assets/images/2_logo Kemendesa.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const Slider = () => {
     return (
          <Swiper
               slidesPerView={2}
               breakpoints={{
                    640: {
                         slidesPerView: 4
                    }
               }}
          >
               <div className='bg-slate-700'>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sb} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sc} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sd} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sa} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sb} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sc} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sd} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[170px] h-[100px] bg-orange-500 rounded-xl p-2' src={sa} height={50} width={200} alt='' /></SwiperSlide>
               </div>
          </Swiper>
     )
}
