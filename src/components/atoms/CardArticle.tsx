import Image from 'next/image'
import React from 'react'
import sosmed5 from '../../assets/images/Sosmed5.png'

type props = {
     title: string
     excerpt: string
     date: string
}

export const CardArticle = ({ title, excerpt, date }: props) => {
     return (
          <div className='w-[400px] shadow-lg rounded-xl cursor-pointer transition hover:duration-700 ease-in-out'>
               <Image src={sosmed5} height={400} width={400} alt='' className='rounded-t-xl' />
               <div className='p-3'>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <p className='text-sm mt-3'>{excerpt}</p>
                    <span className='text-xs'>{date}</span>
               </div>
          </div>
     )
}
