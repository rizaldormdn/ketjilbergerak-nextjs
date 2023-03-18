import Button from "../atoms/Button";
import { Logo } from "../atoms/Logo";
import { LinkFooter } from "../atoms/Link";
import MediaSosial from "../atoms/MediaSosial";
import salt from '../../assets/images/salt.png'
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="p-2 bg-[#FFFFFF] md:mt-10">
			<div className="flex md:justify-between md:items-center md:flex-row flex-col space-y-10 p-2">
				<div className="md:mt-12">
					<Logo />
					<p className="mt-2">Siapa saja yang muda, kreatif, <br /> berani dan berdikari adalah <span><a href="https://www.instagram.com/explore/tags/ketjilbergerak/" className="hover:underline hover:text-[#FF597B] text-[#F07167]">#ketjilbergerak</a></span><br /> Indonesia</p>
					<MediaSosial style="bg-gray-200 mr-5 mt-2 text-[#F07167] cursor-pointer rounded" />
				</div>
				<LinkFooter />
				<div className="text-white ml-[]">
					<Button action={(e) => { alert('Triggered') }} title="Donate Us!" buttonColor="bg-[#F07167]" />
					<p className="font-bold text-black mt-5 mb-5">Powered By</p>
					<Image src={salt} width={100} height={100} alt='' className="md:w-[120px]" />
				</div>
			</div>
			<div className="h-[1px] bg-black mx-auto text-center text-lg items-center mt-6" >
				<p className="p-4 text-xs md:text-lg">Copyright &copy; 2023 BRIX Templates | All Rights Reserved |
					<span className=" underline underline-offset-1 text-[#F07167]"><a href="htpps://saltacademy.id">Terms and Conditions</a> </span> | <span className=" underline underline-offset-1 text-[#F07167]"><a href="htpps://saltacademy.id">Privacy Policy</a></span>
				</p>
			</div>
		</footer >
	);
};

export default Footer;
