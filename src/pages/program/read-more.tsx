import Footer from "@/components/molecules/Footer"
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation"
import { CommonSEO } from "@/components/SEO"
import BlankTemplate from "@/components/templates/BlankTemplate"

const ReadMore = () => {
  
  return (
    <BlankTemplate>
      <CommonSEO title='Article' description='this is Article page' />
      <PrimaryNavigation />
     
      <Footer />
    </BlankTemplate>
  )
}
export default ReadMore