import { FirstSectionField } from "@/components/molecules/FirstSection";
import Footer from "@/components/molecules/Footer";
import { Instagram } from "@/components/molecules/Instagram";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import ThirdSection from "@/components/molecules/ThirdSection";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import { motion, AnimatePresence } from 'framer-motion'


const index = () => {
	return (
		<BlankTemplate>
			<CommonSEO title="Home" description="Description of Create Next Page by Russ" />
			<PrimaryNavigation />
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5 }}
				>
					<FirstSectionField />
					<ThirdSection />
					<Instagram />
				</motion.div>
			</AnimatePresence>
			<Footer />
		</BlankTemplate>
	);
};

export default index;
