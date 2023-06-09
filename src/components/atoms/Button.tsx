type props = {
	children?: React.ReactNode;
	title?: string;
	buttonColor?: string;
	textColor?: string;
	style?: string
	action: (e: React.MouseEvent) => void;
};
const Button = ({ children, title, action, style, buttonColor, textColor }: props) => {
	return title === "" ? <button onClick={(e) => { action(e) }}>{children}</button> : <button className={`py-2 px-5 flex items-center rounded-md font-semibold border border-[#F07167] ${buttonColor} ${textColor}`} onClick={(e) => { action(e) }}>{title}</button>;
};

export default Button;
