import React from 'react'
import BlankTemplate from '@/components/templates/BlankTemplate'
import PrimaryNavigation from '@/components/molecules/PrimaryNavigation'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

const ProgramPost = () => {
     const router = useRouter()
     return (
          <BlankTemplate>
               <PrimaryNavigation />
               <h1>Welcome to program page!</h1>
               <p>Here is the query of the program page: <code className="font-bold bg-red-500 px-2">{router.query.slug}</code></p>
          </BlankTemplate>
     )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
     return {
          props: {
               data: null,
          },
     };
};

export default ProgramPost
