import Button from '../atoms/Button'
import { CardArticle } from '../atoms/CardArticle'
import { CardArticleFirst } from '../atoms/CardArticleFirst'

type props = {
     title: string
     excerpt: string
     date: string
}

export const ArticleSection = (props: props) => {
     return (
          <div className=''>
               <h1 className='text-[#A03C78] md:text-6xl text-4xl md:p-0 p-2'>Artikel Ketjil Bergerak Terbaru</h1>
               <CardArticleFirst />
               <div className='mt-5'>
                    <h1 className='text-[#A03C78] md:text-6xl text-4xl md:p-0 p-2'>Artikel Ketjil Bergerak Lainnya</h1>
                    <div className='flex gap-10 mt-10 flex-wrap md:p-0 p-2'>
                         <div>
                              <CardArticle title={props.title} excerpt={props.excerpt} date={props.date} />
                         </div>
                    </div>
                    <Button action={(e) => { }} title='Muat Lebih Banyak' buttonColor='mt-10 mx-auto hover:bg-[#F07167] hover:text-white' />
               </div>
          </div>
     )
}
