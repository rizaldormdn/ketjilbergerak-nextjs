import CardContent from '@/components/atoms/CardContent'
import MediaSosial from '@/components/atoms/MediaSosial'
import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rectangle229 from '../../assets/images/Rectangle 229.png'
import Rectangle228 from '../../assets/images/Rectangle 228.png'
import Image from 'next/image'
import React from 'react'

const ReadMore = () => {
     return (
          <div>
               <BlankTemplate>
                    <CommonSEO title='Article' description='this is Article page' />
                    <PrimaryNavigation />
                    <div className="p-4 md:max-w-7xl md:mx-auto mb-20">
                         <div className="flex gap-3 text-sm">
                              <div className="flex gap-2 items-center text-cyan-700">
                                   <p className="text-xs md:text-base">Pusat Edukasi</p>
                                   <ArrowForwardIosIcon className="text-sm" />
                              </div>
                              <div className="flex items-center gap-2 text-cyan-700">
                                   <p className="text-xs md:text-base">Article Ilmiah</p>
                                   <ArrowForwardIosIcon className="text-sm" />
                              </div>
                              <div>
                                   <p className="text-xs md:text-base">Sekolah Pemuda Desa</p>
                              </div>
                         </div>
                         <div className="mb-6 mt-6">
                              <h1 className="text-3xl md:text-4xl">Sekolah Pemuda Desa</h1>
                              <div className="flex items-center mt-2 text-xs">
                                   <CalendarMonthIcon />
                                   <p className="px-2">31 january 2030</p>
                              </div>
                         </div>
                         <div className="flex flex-col items-center">
                              <Image src={Rectangle229} width={1300} height={600} alt='' className="mb-6" />
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi praesentium commodi nesciunt asperiores aperiam voluptatem. Cum eveniet,</p>
                              <Image src={Rectangle228} width={250} height={300} alt='' className="mt-6 mb-6 md:w-[500px]" />
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi praesentium commodi nesciunt asperiores aperiam voluptatem. Cum eveniet,</p>
                         </div>
                         <div className="h-[1px] w-[100%] md:w-[80%] mx-auto bg-gray-400  mt-10"></div>
                         <div className="mt-4 flex items-center">
                              <h3 className="mr-2">Bagikan</h3>
                              <MediaSosial style="text-md px-1 mr-2 text-white bg-gray-500 rounded-full" />
                         </div>
                         <div className="mt-10 md:flex md:flex-wrap gap-10">
                              <h2 className="font-bold py-3 text-3xl text-start w-full">Lihat Juga</h2>
                         </div>
                         <div className="md:flex flex items-center justify-center gap-5 md:justify-between flex-wrap md:gap-5">
                              <CardContent />
                         </div>
                    </div>
                    <Footer />
               </BlankTemplate>
          </div>
     )
}
export default ReadMore