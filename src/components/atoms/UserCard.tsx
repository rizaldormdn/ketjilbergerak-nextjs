import { ImageLoader } from "@/utils/ImageLoader";
import Image from "next/image";
import React from "react";
import logo2 from '../../assets/images/2_logo Kemendesa.png'


type props = {
	username: string;
	position: string;
};

const UserCard = ({ username, position }: props) => {

	return (
		<div className="mt-10 flex flex-col items-center">
			<Image src={logo2} height={150} width={150} alt='' className="bg-slate-600 rounded-full" />
			<p className="text-1xl w-[15rem] text-center font-bold text-[#F07167] ">{username}</p>
			<p className="text-center text-gray-400 text-base">{position}</p>
		</div>
	);
}

export default UserCard;
