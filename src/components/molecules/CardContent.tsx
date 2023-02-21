import React from "react";
import Image from "next/image"
import kb1 from "/public/static/images/KB1.png"
import kb2 from "/public/static/images/KB3.png"
import sekolahPemuda from "/public/static/imagess/sekolah-pemuda-desa.png"


type Props = {
  src?:string;
  title?: string;
  desc?: string;
  styled?: string;
  images?: string
};

const CardContent = (props: Props) => {
  const styled = {style: ""}
  const images = {image: ""}
  return (
    <div className={`card-1 p-6 ${styled.style} ${props.styled} ${images.image}`}>
      {/* <Image className=""
            src={props.src!}
            unoptimized
            width={720}
            height={650}
            alt=""
            /> */}
      <h2 className="mt-8 mb-2 text-[#F07167] font-semibold">{props.title}</h2>
      <p className="">{props.desc}</p>
    </div>
  );
  
};

export default CardContent;
