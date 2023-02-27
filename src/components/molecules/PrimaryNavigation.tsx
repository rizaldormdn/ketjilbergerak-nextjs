import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Logo } from "../atoms/Logo";

const PrimaryNavigation = () => {
	const userData = {
		name: "Jane Doe",
		email: "envkt@example.com",
		password: "password",
		role: "admin",
	};

	return (
		<nav className="flex mx-auto justify-between items-center md:max-w-7xl">
			<div className="px-4 md:ml-10 ">
				<Logo />
			</div>
			<div className="px-4">
				<ul className="hidden md:flex gap-2 mx-7">
					<Link className="block hyperlink hovers" href="/">Home</Link>
					<Link className="block hyperlink hovers" href="/program">Program</Link>
					<Link className="block hyperlink hovers" href="/about">About</Link>
					<Link className="block hyperlink hovers" href="/contact">Contact</Link>
					<Link className="block hyperlink hovers" href="/donate">Merch</Link>
				</ul>
				<MobileMenu />
			</div>
		</nav>
	);
};

export default PrimaryNavigation;
