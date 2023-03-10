<<<<<<< HEAD
import React from 'react'

function index() {
  return (
    <div>index</div>
  )
}

export default index
=======
import Button from '@/components/atoms/Button'
import { CardArticle } from '@/components/atoms/CardArticle'
import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'
import Image from 'next/image'
import React from 'react'
import sosmed5 from '../../assets/images/Sosmed5.png'

const Index = () => {
     const articleList = [
          {
               title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam,
               et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.`,
               date: "31 January 2030"
          },
          {
               title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam,
               et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.`,
               date: "31 January 2030"
          },
          {
               title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam,
               et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.`,
               date: "31 January 2030"
          },
          {
               title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam,
               et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.`,
               date: "31 January 2030"
          },
          {
               title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam,
               et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.`,
               date: "31 January 2030"
          },
          {
               title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam,
               et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.`,
               date: "31 January 2030"
          },
     ]
     return (
          <BlankTemplate>
               <CommonSEO title='blog' description='page blog' />
               <PrimaryNavigation />
               <>
                    <div className='mx-auto max-w-7xl'>
                         <h1 className='text-[#A03C78] md:text-6xl text-4xl md:p-0 p-2'>Artikel Ketjil Bergerak Terbaru</h1>
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
                         <div className='mt-5'>
                              <h1 className='text-[#A03C78] md:text-6xl text-4xl md:p-0 p-2'>Artikel Ketjil Bergerak Lainnya</h1>
                              <div className='flex gap-10 mt-10 flex-wrap md:p-0 p-2'>
                                   {articleList.map((list) => (
                                        <div key={list.title}>
                                             <CardArticle title={list.title} excerpt={list.excerpt} date={list.date} />
                                        </div>
                                   ))}
                              </div>
                              <Button action={(e) => { }} title='Muat Lebih Banyak' buttonColor='mt-10 mx-auto hover:bg-[#F07167] hover:text-white' />
                         </div>
                    </div>
               </>
               <Footer />
          </BlankTemplate>
     )
}
export default Index
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
