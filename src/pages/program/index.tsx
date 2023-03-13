import { ProgramSection } from "@/components/molecules/ProgramSection";
import { CommonSEO } from "@/components/SEO";
import { ProgramTemplate } from "@/components/templates/ProgramTemplate";
import axios from "axios";
import { GetServerSideProps } from "next";

type props = {
     image_thumbnail_url: string,
     slug: string,
     title: string,
     excerpt: string
}
type program = {
     programs: props[]
}
const Index = (props: program) => {
     const { programs } = props
     return (
          <ProgramTemplate>
               <CommonSEO title="Program" description="" />
               {programs && programs.length && programs.map((v, index) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
     const response = await axios.get('http://localhost:8080/v1/program')
     const programs = await response.data.data.program

     return {
          props: {
               programs
          }
     }
}
export default Index;