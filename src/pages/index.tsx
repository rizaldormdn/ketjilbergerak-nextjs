import { CommonSEO } from "@/components/SEO";
import Footer from "@/components/molecules/Footer";
import ThirdSection from "@/components/molecules/ThirdSection";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Link from "next/link";
import Header from "@/components/molecules/Header";
import { FirstSectionField } from "@/components/molecules/FirstSection";
import { SecondSectionField } from "@/components/molecules/SecondSection";

const index = () => {
	return (
		<BlankTemplate>
      <CommonSEO title="Home" description="Description of Create Next Page by Russ" />
			{/* <PrimaryNavigation/> */}
			<Header required={false}/>
			<FirstSectionField id="" url="" titles="" description="" images="" />
			{/* <SecondSectionField id={""} url={""} titles={""} description={""} /> */}
			{/* <h1>Hello Guys!</h1>
			<p>Ini routing yang tersedia ya!</p> */}

			{/* <ul className="flex flex-col">
				<Link className="hover:text-violet-500" href="/users">Users</Link>
				<Link className="hover:text-violet-500" href="/blogs">Blogs</Link>
				<Link className="hover:text-violet-500" href="/admin">Admin</Link>
				<Link className="hover:text-violet-500" href="/about">About</Link>
				<Link className="hover:text-violet-500" href="/404">Custom 404 Page</Link>
				<Link className="hover:text-violet-500" href="/api/hello">Hello API</Link>
			</ul> */}
			<ThirdSection />
			<Footer />
		</BlankTemplate>
	);
};

export default index;
