import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import product2 from '../../assets/images/product.png'

export const FeaturedProduct = () => {
     const router = useRouter()
     const product = [
          {
               title: "T-shirt ketjilbergerak",
               desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
               sunt in culpa qui officia deserunt mollit anim id est laborum.`,
               img: product2,
               status: "Barang Tersedia",
               size: {
                    small: "S",
                    medium: "M",
                    large: "L",
                    extra_large: "XL",
               }
          }
     ]
     return (
          <>
               {product.map((v) => (
                    <div key={v.title} className='flex md:justify-between md:space-x-10 p-4 flex-wrap md:flex-nowrap'>
                         <div className=''>
                              <Image
                                   src={v.img}
                                   width={600}
                                   height={100}
                                   alt=""
                                   className='border border-black rounded shadow-2xl'
                              />
                         </div>
                         <div className='md:w-6/12 md:mt-0 mt-2'>
                              <div className='flex gap-2'>
                                   <h1 className='md:text-4xl text-3xl mb-4'>{v.title}</h1>
                                   <p className='text-sm rounded text-center'>new</p>
                              </div>
                              <span className='text-sm border 1px p-2 rounded-2xl bg-[#77FD61]'>{v.status}</span>
                              <p className='mt-6 w-full'>{v.desc}</p>
                              <p className='font-bold mt-2'>Rp 99.000</p>
                              <div className='space-x-3 mt-4'>
                                   <span className='bg-white border border-black px-3 py-2 rounded text-xs'>{v.size.small}</span>
                                   <span className='bg-white border border-black px-3 py-2 rounded text-xs'>{v.size.medium}</span>
                                   <span className='bg-white border border-black px-3 py-2 rounded text-xs'>{v.size.large}</span>
                                   <span className='bg-white border border-black px-3 py-2 rounded text-xs'>{v.size.extra_large}</span>
                              </div>
                              <button
                                   className='text-white border 1px w-full p-2 rounded-xl mt-8 bg-[#F07167] border-[#F07167]'
                                   onClick={() => { }}
                              >
                                   Detail
                              </button>
                         </div>
                    </div>
               ))}
          </>
     )
}
