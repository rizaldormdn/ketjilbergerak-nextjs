import { NextPage } from "next";

type props = {
	children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
	return <div className="min-h-screen max-w-6xl mx-auto">{children}</div>;
};

export default BlankTemplate;
