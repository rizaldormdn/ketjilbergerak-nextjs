import { useRouter } from 'next/router'
import React from 'react'
import Button from '../atoms/Button'
import { Container } from '../atoms/Container'
import Footer from '../molecules/Footer'
import PrimaryNavigation from '../molecules/PrimaryNavigation'

type props = {
     children: React.ReactNode
}

export const ProgramTemplate = ({ children }: props) => {
     const router = useRouter()
     return (
          <>
               <div className='max-w-6xl mx-auto'>
                    <PrimaryNavigation />
                    <div className="md:p-0 p-2">
                         <h1 className="text-2xl md:text-4xl">Program Unggulan Ketjil Bergerak</h1>
                         <p>Berikut adalah program unggulan dari Ketjil Bergerak!</p>
                    </div>
                    <Container>{children}</Container>
                    <Button title="Muat Lebih Banyak" buttonColor="mx-auto mt-5 hover:bg-[#F07167] hover:text-white" action={() => {
                         const currentPage = Number(router.query.page) || 1
                         router.push(`/program?page=${currentPage + 1}`)
                    }}
                    />
                    <Footer />
               </div>
          </>
     )
}
