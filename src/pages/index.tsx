import { FirstSectionField } from "@/components/molecules/FirstSection";
import Footer from "@/components/molecules/Footer";
import { Instagram } from "@/components/molecules/Instagram";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import ThirdSection from "@/components/molecules/ThirdSection";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";

const index = () => {
	return (
		<BlankTemplate>
			<CommonSEO title="Home" description="Description of Create Next Page by Russ" />
			<PrimaryNavigation />
			<FirstSectionField />
			<ThirdSection />
			<Instagram />
			<Footer />
		</BlankTemplate>
	);
};

export default index;
