import { ProgramSection } from "@/components/molecules/ProgramSection";
import { CommonSEO } from "@/components/SEO";
import { ProgramTemplate } from "@/components/templates/ProgramTemplate";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { motion } from 'framer-motion';
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
     programs: Program[]
     totalPages: number
}
type Program = {
     image_thumbnail_url: string,
     slug: string,
     title: string,
     excerpt: string
}
const Index = ({ programs, totalPages }: Props) => {
     const router = useRouter()

     const [data, setData] = useState([...programs])
     const [currentPage, setCurrentPage] = useState(Number(router.query.page) || 1)

     const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
          setCurrentPage(page)
          router.push(`/program?page=${page}`)
     }

     return (
          <ProgramTemplate>
               <CommonSEO title="Program" description="" />
               {programs.map((v, index) => (
                    <div key={v.slug}>
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                         >
                              <ProgramSection
                                   slug={v.slug}
                                   image_thumbnail_url={v.image_thumbnail_url}
                                   title={v.title}
                                   excerpt={v.excerpt}
                                   index={index}
                              />
                         </motion.div>
                    </div>
               ))}
               <div className='flex justify-center'>
                    <Pagination
                         count={totalPages}
                         page={currentPage}
                         onChange={handleChange}
                    />
               </div>
          </ProgramTemplate >
     )
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
     const page = context.query.page ? parseInt(context.query.page as string) : 1
     const response = await axios.get(`http://localhost:8080/v1/program?page=${page}`,)
     const programs = await response.data.data.program
     const totalPages = await response.data.paging.pages

     return {
          props: {
               programs,
               totalPages
          }
     }
}
export default Index;