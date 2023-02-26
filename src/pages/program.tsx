import Footer from "@/components/molecules/Footer";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import { ProgramSection } from "@/components/molecules/ProgramSection";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="About" description="This is meta of about page" />
      <PrimaryNavigation />
      <ProgramSection id="" url="" titles="" description="" images="" />
      <Footer />
    </BlankTemplate>
  );
}

export default about;