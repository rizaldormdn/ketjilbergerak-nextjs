import MediaSosial from '@/components/atoms/MediaSosial'
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
  image: {
    original: string
    thumbnail: string
  }
  alt: string
}
type Props = {
  articles: Article
}

const DetailArticle = ({ articles }: Props) => {
  const router = useRouter()
  return (
    <BlankTemplate>
      <>
        <PrimaryNavigation />
        <div className="p-4 mb-20">
          <div className="flex gap-3 text-sm">
            <div className="flex gap-2 items-center text-cyan-700">
              <p className="text-xs md:text-base">Pusat Edukasi</p>
              <ArrowForwardIosIcon className="text-sm" />
            </div>
            <div className="flex items-center gap-2 text-cyan-700">
              <p className="text-xs md:text-base">Article Ilmiah</p>
              <ArrowForwardIosIcon className="text-sm" />
            </div>
            <div>
              <p className="text-xs md:text-base">Sekolah Pemuda Desa</p>
            </div>
          </div>
          {/* {articles && articles.length > 0 && articles.map((v) => { */}
          {articles && (
            <div key={articles.slug}>
              <div className="mb-6 mt-6">
                <h1 className="text-3xl md:text-4xl">{articles.title}</h1>
                <div className="flex items-center mt-2 text-xs">
                  <CalendarMonthIcon />
                  <p className="px-2">31 january 2030</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src={articles.image.original} width={1300} height={600} alt='' className="mb-6" />
                <p>{articles.content}</p>
                <Image src={articles.image.thumbnail} width={250} height={300} alt='' className="mt-6 mb-6 md:w-[500px]" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi praesentium commodi nesciunt asperiores aperiam voluptatem. Cum eveniet,</p>
              </div>
              <div className="h-[1px] w-[100%] md:w-[80%] mx-auto bg-gray-400  mt-10"></div>
              <div className="mt-4 flex items-center">
                <h3 className="mr-2">Bagikan</h3>
                <MediaSosial style="text-md px-1 mr-2 text-white bg-gray-500 rounded-full" />
              </div>
              <div className="mt-10 md:flex md:flex-wrap gap-10">
                <h2 className="font-bold py-3 text-3xl text-start w-full">Lihat Juga</h2>
              </div>
              <div className="md:flex flex items-center justify-center gap-5 md:justify-between flex-wrap md:gap-5">
                {/* <CardContent /> */}
              </div>
            </div>
          )}

          {/* })} */}
        </div>
        <Footer />
      </>
    </BlankTemplate>
  )
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await axios.get(`http://localhost:8080/v1/articles/${slug}`)
  const articles = res.data.data
  console.log(articles);

  return {
    props: {
      data: articles
    },
  };
};

export default DetailArticle
