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
               <ProgramSection/>
               <Footer />
          </BlankTemplate>
     );
};

export default Index;