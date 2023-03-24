import CardContent from '@/components/molecules/CardContent'
import MediaSosial from '@/components/molecules/MediaSosial'
import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import BlankTemplate from '@/components/templates/BlankTemplate'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

type Article = {
  slug: string
  title: string
  content: string
  excerpt: string
  image_thumbnail_url: string
  image: {
    id: string
    url: {
      original: string
      thumbnail: string
    }
    alt: string
    dimension: {
      height: number
      width: number
    }
  }
  author: {
    name: string
    email: string
  }
  date: {
    created_at: string
    updated_at: string
}
}
type Props = {
  articles: Article
  relatedArticles: Article[]
}

const DetailArticle = ({ articles, relatedArticles }: Props) => {
  const router = useRouter()
  const content = articles.content.replace(/(<([^>]+)>)/gi, '')

  return (
    <BlankTemplate>
      <PrimaryNavigation />
      <div className="p-4 mb-20">
        <div className="flex gap-3 text-sm">
          <div className="flex gap-2 items-center text-[#F07167]">
            <p className="text-xs md:text-base">Article</p>
            <ArrowForwardIosIcon
              className="text-sm"
            />
          </div>
          <div>
            <p className="text-xs md:text-base">{articles.title}</p>
          </div>
        </div>
        <div>
          <div className="mb-6 mt-6">
            <h1 className="text-3xl md:text-4xl">{articles.title}</h1>
            <div className="flex items-center mt-2 text-xs">
              <CalendarMonthIcon />
              <p className="px-2">{new Date(articles.date.created_at).toLocaleString("id-ID")}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={articles.image.url.original}
              width={1300}
              height={600}
              alt={articles.image.alt}
              className="mb-6 md:h-full md:w-full"
            />
            <p>{content}</p>
            <Image src={articles.image.url.thumbnail}
              width={250} height={300}
              alt={articles.image.alt}
              className="mt-6 mb-6 md:w-[500px]"
            />
            <p>{content}</p>
          </div>
          <div className='underline-offset-1 mt-10 mb-10 h-[1px] bg-gray-400'></div>
          <div className="mt-4 flex items-center">
            <h3 className="mr-2">Bagikan</h3>
            <MediaSosial
              style="text-md px-1 mr-2 text-white bg-gray-500 rounded-full"
            />
          </div>
          <div className="mt-10 md:flex md:flex-wrap gap-10">
            <h2 className="font-bold py-3 text-3xl text-start w-full">Lihat Juga</h2>
          </div>
          <div className='flex justify-between mt-5'>
            {relatedArticles?.length > 0 && relatedArticles.map((v1) => (
              <div
                key={v1.slug}
                className=""
                onClick={() => router.push(`/articles${v1.slug}`)}
              >
                <CardContent
                  image_thumbnail_url={v1.image_thumbnail_url}
                  title={v1.title}
                  excerpt={v1.excerpt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </BlankTemplate >
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { slug } = context.params as { slug: string }
    const res = await axios.get(`http://localhost:8080/v1/articles/${slug}`)
    const articles = res.data.data
    const relatedArticles = res.data.data.related_articles

    return {
      props: {
        articles,
        relatedArticles
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        notFound: true
      }
    }
  }

};

export default DetailArticle
