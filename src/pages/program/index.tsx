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
<<<<<<< HEAD
               <ProgramSection/>
=======
               <ProgramSection />
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
               <Footer />
          </BlankTemplate>
     );
};

export default Index;