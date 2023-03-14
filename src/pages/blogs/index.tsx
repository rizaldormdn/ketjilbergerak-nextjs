import { ArticleSection } from '@/components/molecules/ArticleSection'
import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'
import axios from 'axios'
import { GetServerSideProps } from 'next'

type Props = {
     data1: {
          slug: string
          title: string,
          excerpt: string,
          image_thumbnail_url: string,
     }[]
     data2: {
          articles: {
               title: string,
               excerpt: string,
               image_thumbnail_url: string,
               slug: string
               date: {
                    created_at: string
               }
          }[]
     }
}

const Index = ({ data1, data2 }: Props) => {

     return (
          <BlankTemplate>
               <CommonSEO title='blog' description='page blog' />
               <PrimaryNavigation />
               <>
                    <div className='mx-auto max-w-7xl'>
                         <h1 className='text-[#A03C78] md:text-6xl  text-4xl md:p-0 p-2  md:ml-10'>Artikel Ketjil Bergerak Terbaru</h1>
                         <div className='mt-10 flex items-center justify-evenly flex-wrap md:p-0 p-2'>
                              <div className='w-[30rem] mb-10 '>
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
                         <div className='mt-5 md:ml-10'>
                              <h1 className='text-[#A03C78] md:text-6xl text-4xl md:p-0 p-2'>Artikel Ketjil Bergerak Lainnya</h1>
                              <div className='flex gap-10 justify-evenly mt-10 flex-wrap md:p-0 p-2'>
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
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
     const page = query.page ? parseInt(query.page as string) : 1
     const [res1, res2] = await Promise.all([
          axios.get('http://localhost:8080/v1/featured-articles'),
          axios.get(`http://localhost:8080/v1/articles?page=${page}`)
     ])
     console.log(res1.data.data);
     console.log(res2.data.data);

     return {
          props: {
               data1: res1.data.data,
               data2: res2.data.data
          }
     }
}
export default Index