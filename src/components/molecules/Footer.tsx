import Link from "next/link";
import Button from "../atoms/Button";
import { LinkFooter } from "./Link";
import MediaSosial from "./MediaSosial";
import { Logo } from "../atoms/Logo";

const Footer = () => {
	return (
		<footer className="p-2 bg-[#FFFFFF] md:mt-2">
			<div className="flex lg:justify-evenly flex-wrap items-center p-5 md:ml-5 md:mb-12">
				<div className="">
					<Logo />
					<p className="">Siapa saja yang muda, kreatif, <br />berani dan berdikari adalah <span><a href="https://www.instagram.com/explore/tags/ketjilbergerak/" className="hover:underline hover:text-[#FF597B] text-[#F07167]">#ketjilbergerak</a></span><br /> Indonesia</p>
					<MediaSosial style="bg-gray-200 mr-5 mt-2 P-2 text-[#F07167] cursor-pointer rounded" />
				</div>

				<div className="md:flex md:px-10 gap-10 mt-4">
					<LinkFooter />
					<div className="text-white ml-[7rem]">
						<Button action={(e) => { alert('Triggered') }} title="Donate Us!" buttonColor="bg-[#F07167]" />
					</div>
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
