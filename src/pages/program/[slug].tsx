import Footer from '@/components/molecules/Footer'
import MediaSosial from '@/components/molecules/MediaSosial'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import BlankTemplate from '@/components/templates/BlankTemplate'
import { ProgramType } from '@/types/ProgramType'
import { Adapter } from '@/utils/api'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'


type Props = {
     programs: ProgramType
}

const DetailProgram = ({ programs }: Props) => {
     const router = useRouter()

     const content = programs.attributes.content.split('.')
     const half = Math.ceil(content.length / 2)

     const first = content.slice(0, half).join('.')
     const second = content.slice(half, content.length).join('.')

     return (
          <BlankTemplate>
               <PrimaryNavigation />
               <div className="p-4">
                    <div className="flex gap-3 text-sm">
                         <div className="flex gap-2 items-center text-[#F07167]">
                              <p className="text-xs md:text-base">Program</p>
                              <ArrowForwardIosIcon
                                   className="text-sm"
                              />
                         </div>
                         <div>
                              <p className="text-xs md:text-base">{programs.attributes.title}</p>
                         </div>
                    </div>
                    <div>
                         <div className="mb-6 mt-6">
                              <h1 className="text-3xl md:text-4xl">{programs.attributes.title}</h1>
                              <div className="flex items-center mt-2 text-xs">
                                   <CalendarMonthIcon />
                                   <p className="px-2">{new Date(programs.attributes.createdAt).toLocaleString("id-ID")}</p>
                              </div>
                         </div>
                         <div className="flex flex-col items-center">
                              <Image
                                   src={"http://127.0.0.1:1337" + programs.attributes.images.data.attributes.url}
                                   width={1300}
                                   height={600}
                                   alt={""}
                                   className="mb-6 md:h-full md:w-full"
                              />
                              <p>{first}</p>
                              <Image src={"http://127.0.0.1:1337" + programs.attributes.images.data.attributes.url}
                                   width={250} height={300}
                                   alt={""}
                                   className="mt-6 mb-6 md:w-[500px]"
                              />
                              <p>{second}</p>
                         </div>
                         <div className='underline-offset-1 mt-10 mb-10 h-[1px] bg-gray-400'></div>
                         <div className="mt-4 flex items-center">
                              <h3 className="mr-2">Bagikan</h3>
                              <MediaSosial
                                   style="text-md px-1 mr-2 text-white bg-gray-500 rounded-full"
                              />
                         </div>
                    </div>
               </div>
               <Footer />
          </BlankTemplate >
     )
};

export const getServerSideProps: GetServerSideProps = async (context) => {

     const { slug } = context.params as { slug: string }
     const res = await Adapter.get(`/api/programs/${slug}?populate=*`)
     const programs = res.data.data

     return {
          props: {
               programs
          },
     };
};

export default DetailProgram
