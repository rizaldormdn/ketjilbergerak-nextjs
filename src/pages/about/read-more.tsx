import Footer from '@/components/molecules/Footer'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { CommonSEO } from '@/components/SEO'
import BlankTemplate from '@/components/templates/BlankTemplate'
import Image from 'next/image'
import React from 'react'
import kb from '../../assets/images/KB.jpg'
import logo1 from '../../assets/images/1_logo KPK.png'
import logo2 from '../../assets/images/2_logo Kemendesa.png'
import logo3 from '../../assets/images/3_logo UGM.png'
import logo4 from '../../assets/images/4_logo USD.png'

const readMore = () => {
     const tim = [
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
          { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
     ]

     return (
          <>
               <BlankTemplate>
                    <CommonSEO title='' description='' />
                    <PrimaryNavigation />
                    <div className='max-w-7xl mx-auto'>
                         <h1 className='font-bold text-4xl'>Tim Ketjil Bergerak</h1>
                    </div>
                    <Footer />
               </BlankTemplate>
          </>
     )
}
export default readMore
