import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Props = {
     images: string
}

export const Slider = ({ images }: Props) => {
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
                    <SwiperSlide>
                         <Image
                              className='w-[180px] h-[100px] bg-orange-500 rounded-xl p-2'
                              src={images}
                              height={50}
                              width={200}
                              alt=''
                         />
                    </SwiperSlide>
               </div>
          </Swiper>
     )
}
