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
               <div className="p-2 md:p-8 bg-[#F5F5F5]">
                    <h1 className="text-2xl md:text-4xl md:ml-6">Program</h1>
                    <p className="md:ml-6">Berikut adalah program unggulan dari Ketjil Bergerak!</p>
                    <ProgramSection/>
               </div>
               
               <Footer />
          </BlankTemplate>
     );
};

export default Index;