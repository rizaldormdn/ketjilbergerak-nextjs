import Footer from "@/components/molecules/Footer";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import { ProgramSection } from "@/components/molecules/ProgramSection";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";



const Index = () => {
     return (
          <BlankTemplate>
               <CommonSEO title="Program" description="" />
               <PrimaryNavigation />
               <div className="p-2 md:ml-[15rem]">
                    <h1 className="text-2xl md:text-4xl">Program</h1>
                    <p>Berikut adalah program unggulan dari Ketjil Bergerak!</p>
               </div>
               <ProgramSection/>
               <Footer />
          </BlankTemplate>
     );
};

export default Index;