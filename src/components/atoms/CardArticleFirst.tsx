import Image from 'next/image'
import React from 'react'
import Button from './Button'
import sosmed5 from '../../assets/images/Sosmed5.png'

export const CardArticleFirst = () => {
     return (
          <div className='mt-10 flex items-center justify-between flex-wrap md:p-0 p-2'>
               <div className='w-[30rem] mb-10'>
                    <h2 className='md:text-4xl text-2xl text-[#A03C78] font-bold mb-5'>3 Skripsi yang digarap dengan kreatif oleh para mahasiswa Amikom Yogyakarta</h2>
                    <p>Wow, sudah ada 13 skripsi/thesis yang mencoba mengupas gerakan
                         <span>
                              <a href="https://www.instagram.com/explore/tags/ketjilbergerak/" className="hover:underline hover:text-[#FF597B] text-[#A03C78]">#ketjilbergerak</a>
                         </span>
                         dari berbagai sisi.
                    </p>
                    <Button title='Lihat Selengkapnya' buttonColor='mt-5 border-[#A03C78] hover:bg-[#A03C78] hover:text-white' action={(e) => { }} />
               </div>
               <div>
                    <Image src={sosmed5} width={500} height={500} alt='' />
               </div>
          </div>
     )
}
