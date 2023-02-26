import Link from "next/link";
import Button from "../atoms/Button";
import CardContent from "../molecules/CardContent";
import Image from "next/image";
import { ReactElement } from "react";
import { validateHeaderValue } from "http";
import kb1 from "/public/static/images/KB1.png"
import kb2 from "/public/static/images/KB2.png"
import kb3 from "/public/static/images/KB3.png"
import kb4 from "/public/static/images/KB4.png"
import sos1 from "/public/static/images/Sosmed1.png"
import sos2 from "/public/static/images/Sosmed2.png"
import sos3 from "/public/static/images/Sosmed3.png"
import sos4 from "/public/static/images/Sosmed4.png"
import sos5 from "/public/static/images/Sosmed5.png"
import sos6 from "/public/static/images/Sosmed6.png"



type props = {
  title?: string;
  url?: String;
  src?: ReactElement;
  styled?: string
};


const ThirdSection = () => {
  const listContent = [
    {title:"Dapoer Bergerak", 
    desc:"Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.", 
    styled:"bg-bg1 no-repeat bg-cover text-xl"},
    {title: "Pemuda Desa", 
    desc:"Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.", 
    styled:"bg-bg2 no-repeat bg-cover text-xl"},
    {title: "Company growth", 
    desc:"Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.", 
    styled:"bg-bg3 no-repeat bg-cover text-xl "}
];

// const listImage = [
//   {src:"https://i.scdn.co/image/ab67616d00001e02cb40a585d3c5a53b3d84ef44", styled:"flex bg-bg1 p-8"},
//   {src:"https://i.scdn.co/image/ab67616d00001e02cb40a585d3c5a53b3d84ef44", styled:"p-8 bg-sos2"},
//   {src:"https://i.scdn.co/image/ab67616d00001e02cb40a585d3c5a53b3d84ef44"},
//   {src:"https://i.scdn.co/image/ab67616d00001e02cb40a585d3c5a53b3d84ef44"},
//   {src:"https://i.scdn.co/image/ab67616d00001e02cb40a585d3c5a53b3d84ef44"},
//   {src:"https://i.scdn.co/image/ab67616d00001e02cb40a585d3c5a53b3d84ef44", styled:"bg-bg4"},
// ]

    // const userData = {
    //   name: "Jane Doe",
    //   email: "envkt@example.com",
    //   password: "password",
    //   role: "admin",

    return (
        <>
          <div className=" w-full flex items-center justify-between p-6 font-bol bg-[#F5F5F5]">
            <div className="w-full p-8 ">
              <div className="">
                <div className="flex-row justify-center items-center text-center ">
                  <h1 className="text-[#F07167]">Program Unggulan</h1>
                  <p className="text-black">Program unggulan untuk mencapai misi kami.</p>
                </div>
                
                <div className="flex flex-col mt-14">
                  <ul className="flex flex-wrap justify-between gap-7">
                        {listContent.map((value, index) => {
                            return <CardContent title={value.title} desc={value.desc} styled={value.styled}/>
                        })}  
                    {/* <li className="card-1 bg-white h-full p-6">
                      <h2 className="mt-20 mb-2 ">Customer Satisfaction</h2>
                      <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, perspiciatis!</p>
                    </li> */}
                    
                    {/* <li className="card-1 bg-white h-full">
                      <h2>Active Users</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, perspiciatis!</p>                    
                    </li>
                    <li className="card-1 bg-white h-full">
                      <h2>Company Growth</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, perspiciatis!</p>
                    </li> */}
                  </ul>
                </div>
                
                <div className="flex mt-16 justify-center">
                  <Button action={(e) => {alert('Triggered')}} title="Lihat Program Selengkapnya" buttonColor="bg-[#F5F5F5]"/>
                </div>
              </div>

              <div className="flex flex-col p-8">
                <h1 className="flex mb-8">Follow Us!</h1>
                <ul className="flex flex-wrap justify-between gap-8 rounded">
                {/* {listImage.map((Images, index) => {
                            return <CardContent title={Images.title} desc={Images.desc} styled={Images.styled}/>
                        })}  */}
                  <Image className="rounded-lg"
                    src={sos1}
                    unoptimized
                    width={320}
                    height={300}
                    alt="instagram1"
                    />
                  <Image className="rounded-lg"
                    src={sos2}
                    unoptimized
                    width={320}
                    height={300}
                    alt="instagram1"
                    />
                  <Image className="rounded-lg"
                    src={sos3}
                    unoptimized
                    width={320}
                    height={300}
                    alt="instagram1"
                    />
                  <Image className="rounded-lg"
                    src={sos4}
                    unoptimized
                    width={320}
                    height={300}
                    alt="instagram1"
                    />
                  <Image className="rounded-lg"
                    src={sos5}
                    unoptimized
                    width={320}
                    height={300}
                    alt="instagram1"
                    />
                  <Image className="rounded-lg"
                    src={sos6}
                    unoptimized
                    width={320}
                    height={300}
                    alt="instagram1"
                    />
                </ul>
              </div>
            </div>
          </div>
        </>
    );
  };

  export default ThirdSection;