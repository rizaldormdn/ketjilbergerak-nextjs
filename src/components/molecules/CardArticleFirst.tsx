import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '../atoms/Button'

type props = {
     slug: string
     title: string
     excerpt: string
     image_thumbnail_url: string
}
export const CardArticleFirst = (props: props) => {
     const router = useRouter()

     const handleClick = () => {
          router.push(`/blogs/${props.slug}`)
     }
     return (
          <div className='mt-10 flex items-center justify-between flex-wrap md:p-0 p-2'>
               <div className='w-[30rem] mb-10'>
                    <h2 className='md:text-4xl text-2xl text-[#F07167] font-bold mb-5'>{props.title}</h2>
                    <p>{props.excerpt}</p>
                    <Button title='Lihat Selengkapnya' buttonColor='mt-5 border-[#F07167] hover:bg-[#F07167] hover:text-white' action={handleClick} />
               </div>
               <div>
                    <Image src={props.image_thumbnail_url} width={500} height={500} alt='' />
               </div>
          </div>
     )
}
