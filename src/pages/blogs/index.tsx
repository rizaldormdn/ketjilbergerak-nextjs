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
               <ArticleSection data1={data1} data2={data2} />
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