type props = {
	children?: React.ReactNode;
	title?: string;
	buttonColor?: string;
	textColor?: string;
  action: (e:  React.MouseEvent) => void;
};
const Button = ({ children, title, action, buttonColor }: props) => {
	return title === "" ? <button onClick={(e) => {action(e)}}>{children}</button> : <button className={`py-2 px-5 flex items-center rounded-md font-semibold popup border border-[#F07167] ${buttonColor}`} onClick={(e) => {action(e)}}>{title}</button>;
};

export default Button;
