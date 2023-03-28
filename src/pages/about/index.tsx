import { AboutSection } from '@/components/molecules/AboutSection'
import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'
import { AboutPage } from '@/types/AboutPageType'
import { PartnersType } from '@/types/PartnersType'
import { TeamsType } from '@/types/TeamType'
import { Adapter } from '@/utils/api'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'

type Props = {
     latarBelakang: AboutPage
     teams: TeamsType[]
     partners: PartnersType[]
}

const index = ({ latarBelakang, teams, partners }: Props) => {
     return (
          <>
               <BlankTemplate>
                    <CommonSEO title="About" description="This is meta of about page" />
                    <PrimaryNavigation />
                    <AboutSection
                         latarBelakang={latarBelakang}
                         teams={teams}
                         partners={partners}
                    />
                    <Footer />
               </BlankTemplate>
          </>
     )
}

export const getServerSideProps: GetServerSideProps = async () => {
     const response1 = await Adapter.get('/api/aboutpage')
     const response2 = await Adapter.get('/api/teams')
     const response3 = await Adapter.get('/api/partners?populate=*')
     const [res1, res2, res3] = await axios.all([response1, response2, response3])

     return {
          props: {
               latarBelakang: res1.data.data,
               teams: res2.data.data,
               partners: res3.data.data
          }
     }
}
export default index
