import Link from "next/link";
<<<<<<< HEAD
import MobileMenu from "./MobileMenu";
import { Logo } from "../atoms/Logo";
=======
import { Logo } from "../atoms/Logo";
import { MobileNavigation } from "./MobileMenu";
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a

const PrimaryNavigation = () => {

	return (
<<<<<<< HEAD
		<nav className="flex mx-auto justify-between items-center md:max-w-7xl">
			<div className="px-4 md:ml-10 ">
=======
		<nav className="md:py-8 py-4 flex mx-auto justify-between items-center md:max-w-7xl">
			<div className="md:px-1 px-3">
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
				<Logo />
			</div>
			<div className="px-4">
				<ul className="hidden md:flex gap-2 mx-7">
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
