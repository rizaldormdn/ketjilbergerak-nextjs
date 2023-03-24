import Image from 'next/image'
import product2 from '../../assets/images/product2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useRouter } from 'next/router';

export const ProductCard = () => {
     const router = useRouter()
     const productList = [
          {
               slug: "ketjil-bergerak1",
               title: "T-shirt Ketjil Bergerak",
               img: product2,
               size: {
                    small: "S",
                    medium: "M",
                    large: "L",
                    extra_large: "XL",
               }
          },
          {
               slug: "ketjil-bergerak2",
               title: "T-shirt Ketjil Bergerak",
               img: product2,
               size: {
                    small: "S",
                    medium: "M",
                    large: "L",
                    extra_large: "XL",
               }
          },
          {
               slug: "ketjil-bergerak3",
               title: "T-shirt Ketjil Bergerak",
               img: product2,
               size: {
                    small: "S",
                    medium: "M",
                    large: "L",
                    extra_large: "XL",
               }
          },
          {
               slug: "ketjil-bergerak4",
               title: "T-shirt Ketjil Bergerak",
               img: product2,
               size: {
                    small: "S",
                    medium: "M",
                    large: "L",
                    extra_large: "XL",
               }
          },
          {
               slug: "ketjil-bergerak5",
               title: "T-shirt Ketjil Bergerak",
               img: product2,
               size: {
                    small: "S",
                    medium: "M",
                    large: "L",
                    extra_large: "XL",
               }
          },
          {
               slug: "ketjil-bergerak6",
               title: "T-shirt Ketjil Bergerak",
               img: product2,
               size: {
                    small: "S",
                    medium: "M",
                    large: "L",
                    extra_large: "XL",
               }
          },
     ]
     return (
          <div className='flex md:justify-between justify-center gap-10 mt-10 flex-wrap'>
               {productList.map((v) => (
                    <div key={v.slug} className='w-[300px]cursor-pointer rounded relative group'>
                         <div className='relative'>
                              <Image
                                   src={v.img}
                                   alt={''}
                                   width={300}
                                   height={200}
                                   className='rounded'
                              />
                              <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-500 to-black opacity-0 group-hover:opacity-30'></span>
                         </div>
                         <div className='absolute top-[65%] w-full p-2 transition-all duration-1000 opacity-0 group-hover:opacity-100'>
                              <h2 className='text-white text-2xl font-bold'>{v.title}</h2>
                              <div className='flex justify-between mt-4'>
                                   <span className='px-3 py-2 rounded text-sm font-bold'>Rp 99.000</span>
                                   <span className='bg-[#77FD61] px-3 py-2 rounded-xl text-xs'>Barang Tersedia</span>
                              </div>
                              <button
                                   className='text-white border 1px w-full p-1 rounded mt-4 bg-[#F07167] border-[#F07167]'
                                   onClick={() => { router.push(`/merch/${v.slug}`) }}
                              >
                                   Detail
                              </button>
                         </div>
                    </div>
               ))}
          </div >
     )
}
