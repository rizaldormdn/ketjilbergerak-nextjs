import { ImageLoader } from "@/utils/ImageLoader";
import Image from "next/image";
import React from "react";
import logo15 from '../../assets/images/m.jpg'


type props = {
	username: string;
	position: string;
};

const UserCard = ({ username, position }: props) => {

	return (
		<div className="mt-5 md:mx-6 flex flex-col items-center ">
			<Image src={logo15} height={150} width={200} alt='' className="bg-slate-600 rounded-full" />
			<p className="text-xl text-center w-[15rem] font-bold text-[#F07167] ">{username}</p>
			{/* <p className="text-center mt-2">{position}</p> */}
		</div>
	);
}

export default UserCard;
