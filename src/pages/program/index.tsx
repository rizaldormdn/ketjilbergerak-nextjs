import { ProgramSection } from "@/components/molecules/ProgramSection";
import { CommonSEO } from "@/components/SEO";
import { ProgramTemplate } from "@/components/templates/ProgramTemplate";
import axios from "axios";
import { GetServerSideProps } from "next";

type Props = {
     programs: Program[]
}
type Program = {
     image_thumbnail_url: string,
     slug: string,
     title: string,
     excerpt: string
}
const Index = ({ programs }: Props) => {
     return (
          <ProgramTemplate>
               <CommonSEO title="Program" description="" />
               {programs.map((v, index) => (
                    <div key={v.slug}>
                         <ProgramSection
                              slug={v.slug}
                              image_thumbnail_url={v.image_thumbnail_url}
                              title={v.title}
                              excerpt={v.excerpt}
                              index={index}
                         />
                    </div>
               ))}
          </ProgramTemplate>
     )
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
     const page = query.page ? parseInt(query.page as string) : 1
     const response = await axios.get(`http://localhost:8080/v1/program?page=${page}`,)
     const programs = await response.data.data.program

     return {
          props: {
               programs
          }
     }
}
export default Index;