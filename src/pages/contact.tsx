import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Footer from "@/components/molecules/Footer";
import { ProgramSection } from "@/components/molecules/ProgramSection";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="Contact" description="This is meta of Contact page" />
      <PrimaryNavigation />
      <ProgramSection id="" url="" titles="" description="" images="" />
      <Footer />
    </BlankTemplate>
  );
}

export default about;