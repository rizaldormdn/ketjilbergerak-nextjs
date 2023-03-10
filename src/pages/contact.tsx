import Footer from "@/components/molecules/Footer";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Contact from "@/components/organism/Contact";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="Contact" description="This is meta of Contact page" />
      <PrimaryNavigation />
        <Contact />
      <Footer />
    </BlankTemplate>
  );
}

export default about;