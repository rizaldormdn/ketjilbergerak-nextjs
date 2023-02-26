import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import { AboutSection } from "@/components/molecules/AboutSection";
import { AboutSecond } from "@/components/molecules/AboutSecond";
import Footer from "@/components/molecules/Footer";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="About" description="This is meta of about page" />
      <PrimaryNavigation />
      <AboutSection id="" url="" titles="" description="" images="" />
      <AboutSecond id="" url="" titles="" description="" images="" />
      <Footer />
    </BlankTemplate>
  );
}

export default about;