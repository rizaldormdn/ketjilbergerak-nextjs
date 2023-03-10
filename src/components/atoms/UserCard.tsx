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
		<div className="mt-5">
			<Image src={logo2} height={250} width={250} alt='' className="bg-slate-600 rounded-full" />
			<p className="text-3xl w-[18rem] font-bold text-[#F07167] ">{username}</p>
			<p className="text-center mt-2">{position}</p>
		</div>
	);
}

export default UserCard;
