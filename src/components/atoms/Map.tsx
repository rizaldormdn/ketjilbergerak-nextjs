import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import Button from "./Button";

const Map = () => {
     const router = useRouter()
     const handleWhatsApp = () => {
          const phone = "6287740902822"
          const message = ""
          const url = `https://wa.me/${phone}?text=${message}`
          router.push(url)
     }
     return (
          <>
               <div className="flex md:justify-between items-center flex-wrap">
                    <div className=''>
                         <iframe
                              className="rounded-xl md:w-[500px] md:h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.183889869245!2d106.86230024983246!3d-6.7474133678279005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cba972ba3183%3A0x53c233b4f3eda3f!2sWISATA%20SEKOLAH%20ALAM%20PANGRANGO!5e0!3m2!1sen!2sid!4v1678072846984!5m2!1sen!2sid"
                              width="410" height="350" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                         </iframe>
                    </div>
                    <div className='p-3'> 
                         <h1 className="mt-5 md:mt-0 text-4xl text-[#F07167]">Lokasi Kami</h1>
                         <p className="mt-5 text-[#9795B5]">Daerah Istimewa Yogyakarta</p>
                         <div className="flex md:gap-10 gap-5 mb-5 mt-10">
                              <div className="flex">
                                   <button className="hover:bg-[#F07167] popup border w-[10rem] border-[#F07167] text-[#F07167] hover:text-white rounded-3xl">
                                        Lihat Lokasi
                                        <ArrowForwardIcon className="" />
                                   </button>
                              </div>
                              <Button action={handleWhatsApp} title='Hubungi WhatsApp' buttonColor="hover:bg-[#F07167] text-[#F07167] hover:text-white rounded-3xl" />
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Map;
