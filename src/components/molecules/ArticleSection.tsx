import { useRouter } from 'next/router'
import Button from '../atoms/Button'
import { CardArticle } from '../atoms/CardArticle'
import { CardArticleFirst } from '../atoms/CardArticleFirst'

type props = {
     data1: {
          title: string,
          excerpt: string,
          image_thumbnail_url: string,
          slug: string
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

export const ArticleSection = ({ data1, data2 }: props) => {
     const router = useRouter()

     return (
          <div className=''>
               <h1 className='text-[#F07167] md:text-5xl text-4xl md:p-0 p-2 md:mb-10'>Artikel Ketjil Bergerak Terbaru</h1>
               {data1 && data1.length > 0 && data1.map((v1) => (
                    <div key={v1.slug}>
                         <CardArticleFirst
                              title={v1.title}
                              excerpt={v1.excerpt}
                              image_thumbnail_url={v1.image_thumbnail_url}
                              slug={v1.slug}
                         />
                    </div>
               ))}
               <div className='mt-5'>
                    <h1 className='text-[#F07167] md:text-5xl text-4xl md:p-0 p-2'>Artikel Ketjil Bergerak Lainnya</h1>
                    <div className='flex md:justify-start justify-center gap-10 mt-10 flex-wrap md:p-0 p-2'>
                         {data2.articles && data2.articles.length > 1 && data2.articles.map((v2) => (
                              <div key={v2.slug} onClick={() => router.push(`blogs/${v2.slug}`)}>
                                   <CardArticle
                                        title={v2.title}
                                        excerpt={v2.excerpt}
                                        date={new Date(v2.date.created_at).toLocaleDateString('id-ID')}
                                   />
                              </div>
                         ))}
                    </div>
                    <Button
                         action={(e) => {
                              const currentPage = Number(router.query.page) || 1
                              router.push(`/blogs?page=${currentPage + 1}`)
                         }}
                         title='Muat Lebih Banyak'
                         buttonColor='mt-10 mx-auto hover:bg-[#F07167] hover:text-white'
                    />
               </div>
          </div>
     )
}
