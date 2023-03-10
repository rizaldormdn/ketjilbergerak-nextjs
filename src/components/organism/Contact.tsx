import MediaSosial from '@/components/atoms/MediaSosial'
import FormContact from '@/components/molecules/FormContact'
import Image from 'next/image'
<<<<<<< HEAD
import { useState } from 'react'
import kb from '../../assets/images/Container.png'
=======
import kb1 from '../../assets/images/KB1.png'
import Map from '../atoms/Map'
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a


const Contact = () => {
     return (
          <>
               <div className='flex items-center flex-wrap justify-evenly md:mt-10'>
                    <div>
                         <Image src={kb} width={600} height={1104} alt='' />
                    </div>
                    <div className='px-10 mt-10 '>
                         <h1 className=' font-bold text-5xl text-[#F07167]'>Get in touch today</h1>
                         <p className='text-gray-300 mt-5 ml-1'>keep in touch with us!</p>
                         <div className='mt-10'>
                              <FormContact />
                         </div>
                    </div>
               </div>
<<<<<<< HEAD
               <div className='text-center mt-20 mb-12 '>
                    <h1 className='text-[#F07167] font-bold text-4xl'>Our Social Media</h1>
=======
               <div className='text-center mt-16 md:mb-32 mb-10 '>
                    <h1 className='text-[#F07167] font-bold text-4xl'>Sosial Media Kami</h1>
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
                    <div className="mt-10 text-center ml-8">
                         <MediaSosial style='bg-gray-100 mr-8 md:text-7xl text-4xl md:p-3 rounded text-[#F07167] cursor-pointer' />
                    </div>
               </div>
               <div>
                    <Map />
               </div>
          </>
     )
}

export default Contact
