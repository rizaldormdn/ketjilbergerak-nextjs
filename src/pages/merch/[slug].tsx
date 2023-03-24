import { DetailProduct } from '@/components/molecules/DetailProduct'
import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'
import React from 'react'

const Slug = () => {
     return (
          <BlankTemplate>
               <CommonSEO title={''} description={''} />
               <PrimaryNavigation />
               <DetailProduct />
               <Footer />
          </BlankTemplate>
     )
}
export default Slug