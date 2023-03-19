import MediaSosial from '@/components/molecules/MediaSosial'
import FormContact from '@/components/molecules/FormContact'
import Image from 'next/image'
import kb1 from '../../assets/images/KB1.png'
import Map from '../molecules/Map'


const Contact = () => {
     return (
          <>
               <div className='flex items-center flex-wrap justify-between md:mt-10'>
                    <div>
                         <Image src={kb1} width={500} height={1104} alt='' />
                    </div>
                    <div className='md:px-0 px-2 mt-10'>
                         <h1 className=' font-bold text-5xl text-[#F07167]'>Get in touch today</h1>
                         <p className='text-gray-300 mt-5 ml-3'>keep in touch with us!</p>
                         <div className='mt-10'>
                              <FormContact />
                         </div>
                    </div>
               </div>
               <div className='text-center mt-16 md:mb-32 mb-10 '>
                    <h1 className='text-[#F07167] font-bold text-4xl'>Sosial Media Kami</h1>
                    <div className="mt-10 text-center ml-8">
                         <MediaSosial style='bg-gray-100 mr-8 text-3xl rounded text-[#F07167] cursor-pointer' />
                    </div>
               </div>
               <div>
                    <Map />
               </div>
          </>
     )
}

export default Contact
