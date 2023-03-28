import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { ArticleSection } from '@/components/organism/ArticleSection'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'
import { ArticleType } from '@/types/ArticleType'
import { MetaPagination } from '@/types/MetaPaginationType'
import { Adapter } from '@/utils/api'
import axios from 'axios'
import { GetServerSideProps } from 'next'

type Props = {
     data1: ArticleType[]
     data2: ArticleType[]
     meta: MetaPagination
}

const Index = ({ data1, data2, meta }: Props) => {
     return (
          <BlankTemplate>
               <CommonSEO title='blog' description='page blog' />
               <PrimaryNavigation />
               <ArticleSection
                    data1={data1}
                    data2={data2}
                    meta={meta}
               />
               <Footer />
          </BlankTemplate>
     )
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
     const page = Number(ctx.query.page) || 1
     const pageSize = 1
     const response1 = await Adapter.get('/api/articles?populate=*&filters[featured][$eq]=true&pagination[pageSize]=1')
     const response2 = await Adapter.get(`/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`)
     const [res1, res2] = await axios.all([response1, response2])

     return {
          props: {
               data1: res1.data.data,
               data2: res2.data.data,
               meta: res2.data.meta
          }
     }
}
export default Index