import Image from 'next/image';
import React from 'react'
import sa from "../../assets/images/Sosmed2.png"
import sb from "../../assets/images/1_logo KPK.png"
import sc from "../../assets/images/2_logo Kemendesa.png"
import sd from "../../assets/images/3_logo UGM.png"
import se from "../../assets/images/4_logo USD.png"

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
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={sb} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={sc} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={sd} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={se} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={se} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={sb} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={sc} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={sd} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={se} height={50} width={200} alt='' /></SwiperSlide>
                    <SwiperSlide><Image className='w-[200px] h-[150px] bg-slate-700 p-2 rounded-xl shadow-2xl' src={se} height={50} width={200} alt='' /></SwiperSlide>
               </div>
          </Swiper>
     )
}
