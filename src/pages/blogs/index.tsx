import { ArticleSection } from '@/components/molecules/ArticleSection'
import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'

const Index = () => {

     return (
          <BlankTemplate>
               <CommonSEO title='blog' description='page blog' />
               <PrimaryNavigation />
               <ArticleSection
                    title='hallo'
                    excerpt='hallo'
                    date='19-30-2010'
               />
               <Footer />
          </BlankTemplate>
     )
}
export default Index