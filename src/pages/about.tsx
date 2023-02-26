import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Header from "@/components/molecules/Header";
import { AboutSection } from "@/components/molecules/AboutSection";
import { AboutSecond } from "@/components/molecules/AboutSecond";
import Footer from "@/components/molecules/Footer";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="About" description="This is meta of about page" />
      <Header required={false}/>
      <AboutSection id="" url="" titles="" description="" images="" />
      <AboutSecond id="" url="" titles="" description="" images="" />
      <Footer />
    </BlankTemplate>
  );
}

export default about;