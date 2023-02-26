import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { ProgramSection } from "@/components/molecules/ProgramSection";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="About" description="This is meta of about page" />
      <Header required={false}/>
      <ProgramSection id="" url="" titles="" description="" images="" />
      <Footer />
    </BlankTemplate>
  );
}

export default about;