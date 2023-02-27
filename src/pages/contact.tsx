import Footer from "@/components/molecules/Footer";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Contact from "@/components/organism/Contact";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Map from "@/components/molecules/Map";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="Contact" description="This is meta of Contact page" />
      <PrimaryNavigation />
        <Contact />
        <Map />
      <Footer />
    </BlankTemplate>
  );
}

export default about;