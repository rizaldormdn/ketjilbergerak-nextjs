import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { MerchSection } from '@/components/organism/MerchSection'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'

const Index = () => {
     return (
          <BlankTemplate>
               <CommonSEO title='' description='' />
               <PrimaryNavigation />
               <MerchSection />
               <Footer />
          </BlankTemplate>
     )
}
export default Index
