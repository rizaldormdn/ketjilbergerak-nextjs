import Pagination from "@mui/material/Pagination";
import { useRouter } from 'next/router';
import { useState } from "react";
import { CardArticle } from '../molecules/CardArticle';
import { CardArticleFirst } from '../molecules/CardArticleFirst';


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
     totalPages: number | undefined
}

export const ArticleSection = ({ data1, data2, totalPages }: props) => {
     const router = useRouter()
     const [data, setData] = useState([data2])
     const [currentPage, setCurrentPage] = useState(Number(router.query.page) || 1)

     const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
          setCurrentPage(page)
          router.push(`/blogs?page=${page}`)
     }

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
                    <div className='flex justify-center mt-10'>
                         <Pagination
                              count={totalPages}
                              page={currentPage}
                              onChange={handleChange}
                         />
                    </div>
               </div>
          </div>
     )
}
