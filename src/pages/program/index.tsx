import { FormAbout } from "@/components/molecules/FormAbout";
import { ProgramSection } from "@/components/molecules/ProgramSection";
import { CommonSEO } from "@/components/SEO";
import { ProgramTemplate } from "@/components/templates/ProgramTemplate";
import { MetaPagination } from "@/types/MetaPaginationType";
import { ProgramType } from "@/types/ProgramType";
import { Adapter } from "@/utils/api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from 'react'
import Pagination from "@mui/material/Pagination";

type Props = {
     programs: ProgramType[]
     meta: MetaPagination
}
const Index = ({ programs, meta }: Props) => {
     const router = useRouter()
     const [currentPage, setCurrentPage] = useState(Number(router.query.page) || 1)

     const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
          setCurrentPage(value)
          router.push(`/program?page=${value}`)
     }
     return (
          <ProgramTemplate>
               <CommonSEO title="Program" description="" />
               {programs.map((program, index) => (
                    <ProgramSection
                         key={program.id}
                         id={program.id}
                         slug={program.attributes.slug}
                         image_thumbnail_url={"http://127.0.0.1:1337" + program.attributes.images.data.attributes.url}
                         title={program.attributes.title}
                         excerpt={program.attributes.excerpt}
                         index={index}
                    />
               ))}

               <div className="flex justify-between mb-10 bg-gray-100 p-2 flex-wrap">
                    <h1 className="text-4xl md:w-5/12">Dukung Program Rutin Kami</h1>
                    <FormAbout />
               </div>
               <div className='flex justify-center'>
                    <Pagination
                         count={meta.pagination.pageCount}
                         page={currentPage}
                         onChange={handleChange}
                    />
               </div>
          </ProgramTemplate >
     )
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
     const page = Number(ctx.query.page) || 1
     const pageSize = 5
     const res = await Adapter.get(`/api/programs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`)

     return {
          props: {
               programs: res.data.data,
               meta: res.data.meta
          }
     }
}
export default Index;