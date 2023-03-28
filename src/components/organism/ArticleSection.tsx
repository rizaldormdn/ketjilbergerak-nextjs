import { ArticleType } from "@/types/ArticleType";
import { MetaPagination } from "@/types/MetaPaginationType";
import Pagination from "@mui/material/Pagination";
import { useRouter } from 'next/router';
import { useState } from "react";
import { CardArticle } from '../molecules/CardArticle';
import { CardArticleFirst } from '../molecules/CardArticleFirst';


type props = {
     data1: ArticleType[]
     data2: ArticleType[]
     meta: MetaPagination
}

export const ArticleSection = ({ data1, data2, meta }: props) => {
     const router = useRouter()
     const [currentPage, setCurrentPage] = useState(Number(router.query.page) || 1)

     const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
          setCurrentPage(page)
          router.push(`/blogs?page=${page}`)
     }

     return (
          <div className=''>
               <h1 className='text-[#F07167] md:text-5xl text-4xl md:p-0 p-2 md:mb-10'>Artikel Ketjil Bergerak Terbaru</h1>
               <div>
                    {data1.map((data) => (
                         <CardArticleFirst
                              key={data.id}
                              title={data.attributes.title}
                              excerpt={data.attributes.excerpt}
                              image_thumbnail_url={"http://127.0.0.1:1337" + data.attributes.images.data.attributes.url}
                              slug={data.attributes.slug}
                         />
                    ))}
               </div>
               <div className='mt-5'>
                    <h1 className='text-[#F07167] md:text-5xl text-4xl md:p-0 p-2'>Artikel Ketjil Bergerak Lainnya</h1>
                    <div className='flex md:justify-start justify-center gap-10 mt-10 flex-wrap md:p-0 p-2'>
                         {data2.map((v2) => (
                              <div key={v2.attributes.slug} onClick={() => router.push(`blogs/${v2.id}`)}>
                                   <CardArticle
                                        image_thumbnail_url={"http://127.0.0.1:1337" + v2.attributes.images.data.attributes.url}
                                        title={v2.attributes.title}
                                        excerpt={v2.attributes.excerpt}
                                        date={new Date(v2.attributes.createdAt).toLocaleDateString('id-ID')}
                                   />
                              </div>
                         ))}
                    </div>
                    <div className='flex justify-center mt-10'>
                         <Pagination
                              count={meta.pagination.pageCount}
                              page={currentPage}
                              onChange={handleChange}
                         />
                    </div>
               </div>
          </div>
     )
}
