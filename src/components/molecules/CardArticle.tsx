import Image from 'next/image'

type props = {
     title: string
     excerpt: string
     date: string
     image_thumbnail_url: string
}

export const CardArticle = ({ title, excerpt, date, image_thumbnail_url }: props) => {
     return (
          <div className='w-[350px] shadow-lg rounded-xl cursor-pointer hover:scale-110 duration-300'>
               <Image src={image_thumbnail_url} height={300} width={400} alt='' className='rounded-t-xl' />
               <div className='p-3'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <p className='text-sm mt-3'>{excerpt}</p>
                    <span className='text-xs'>{date}</span>
               </div>
          </div>
     )
}
