import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { MobileNavigation } from "./MobileMenu";

const PrimaryNavigation = () => {

	return (
		<nav className="md:py-8 py-4 flex mx-auto justify-between items-center">
			<div className="md:px-1 px-2">
				<Logo />
			</div>
			<div className="px-2">
				<ul className="hidden md:flex space-x-6">
					<Link className="block hyperlink hovers" href="/">Home</Link>
					<Link className="block hyperlink hovers" href="/program">Program</Link>
					<Link className="block hyperlink hovers" href="/about">About</Link>
					<Link className="block hyperlink hovers" href="/contact">Contact</Link>
					<Link className="block hyperlink hovers" href="/merch">Merch</Link>
				</ul>
				<MobileNavigation />
			</div>
		</nav>
	);
};

export default PrimaryNavigation;
