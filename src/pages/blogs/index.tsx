import { ArticleSection } from '@/components/organism/ArticleSection'
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
     totalPages: number | undefined
}

const Index = ({ data1, data2, totalPages }: Props) => {

     return (
          <BlankTemplate>
               <CommonSEO title='blog' description='page blog' />
               <PrimaryNavigation />
               <ArticleSection
                    data1={data1}
                    data2={data2}
                    totalPages={totalPages}
               />
               <Footer />
          </BlankTemplate>
     )
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
     const page = query.page ? parseInt(query.page as string) : 1

     try {
          const response1 = await axios.get('http://localhost:8080/v1/featured-articles')
          const response2 = await axios.get(`http://localhost:8080/v1/articles?page=${page}`)

          const [res1, res2] = await axios.all([response1, response2])

          const totalPages = res2.data.data.paging.pages

          return {
               props: {
                    data1: res1.data.data,
                    data2: res2.data.data,
                    totalPages: totalPages
               }
          }
     } catch (error) {
          return {
               props: {
                    data1: [],
                    data2: { articles: [] },
                    totalPages: 0
               }
          }
     }

}
export default Index