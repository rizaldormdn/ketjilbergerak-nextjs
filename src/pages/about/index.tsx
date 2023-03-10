import { AboutSection } from '@/components/molecules/AboutSection'
import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'
import React from 'react'

const index = () => {
     return (
          <>
               <BlankTemplate>
                    <CommonSEO title="About" description="This is meta of about page" />
                    <PrimaryNavigation />
                    <AboutSection />
                    <Footer />
               </BlankTemplate>
          </>
     )
}
export default index
