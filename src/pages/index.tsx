import { FirstSectionField } from "@/components/molecules/FirstSection";
import Footer from "@/components/molecules/Footer";
import { Instagram } from "@/components/molecules/Instagram";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import ThirdSection from "@/components/molecules/ThirdSection";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import { HomePage } from "@/types/HomePageType";
import { InstagramType } from "@/types/InstagramType";
import { ProgramType } from "@/types/ProgramType";
import { Adapter } from "@/utils/api";
import axios from "axios";
import { GetServerSideProps } from "next";

type Props = {
	home: HomePage
	programs: ProgramType[]
	instagrams: InstagramType[]
}
const index = ({ home, programs, instagrams }: Props) => {
	return (
		<BlankTemplate>
			<CommonSEO title="Home" description="Description of Create Next Page by Russ" />
			<PrimaryNavigation />
			<FirstSectionField home={home} />
			<ThirdSection programs={programs} />
			<Instagram instagrams={instagrams} />
			<Footer />
		</BlankTemplate>
	);
};
export const getServerSideProps: GetServerSideProps = async () => {
	const response1 = await Adapter.get('/api/homepage?populate=*')
	const response2 = await Adapter.get('/api/programs?populate=*&filters[featured][$eq]=true&pagination[pageSize]=3')
	const response3 = await Adapter.get('/api/instagrams?populate=*')
	const [res1, res2, res3] = await axios.all([response1, response2, response3])
	return {
		props: {
			home: res1.data.data,
			programs: res2.data.data,
			instagram: res3.data.data
		}
	}
}
export default index;
