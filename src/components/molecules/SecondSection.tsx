import Link from "next/link";
import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/router";

type TFirstSection = {
    id: string
    url: string
    titles: string
    description: string
}


export const SecondSectionField: React.FC<TFirstSection> = (prop: TFirstSection): ReactElement => {
    const router = useRouter()
    // const {id, url, titles} = 
    const { id, url, titles = 'Misi Kami', description = 'Selamat datang di Ketjil Bergerak! Kami adalah organisasi nirlaba yang didirikan pada 2006 dan berbasis di Yogyakarta, Indonesia.' } = router.query
    // router.query=prop
    console.log(router.query)
    // console.log(prop)
    return (

        <div className="w-full ">
            <div className="flex max-w-[1440px] bg-[#FFFFFF] mx-auto h-[450px]  ">
                <div className=" w-full max-h-[450] justify-evenly items-center relative max-[600px]:w-[200px]  flex gap-[2%] pt-[5px]">
                    <div className="  w-[18.27%]  flex justify-center items-center relative ">
                        <div className="mb-[1.6vh] items-center justify-start ">
                            <Link href="/" className="">
                                <p className="hovers max-w-[516px] pb-10 max-[600px]:pb-2 font-[900] text-[2.5vh] text-[#5D5A88] ">{titles}</p>
                                <p className="max-w-[455px] pb-10 text-[1.6vh] font-normal max-[600px]:pb-2" onClick={() => console.log()}
                                >{description}</p>
                            </Link>
                        </div>
                    </div>
                    <Image className=" max-w-[250px] max-h-[250px] bg-red-200 rounded-xl"
                        src={prop.url}
                        unoptimized
                        width={250}
                        height={250}
                        alt={prop.titles}
                        id={prop.id}
                    />
                    <Image className=" max-w-[250px] max-h-[250px] bg-red-200 rounded-xl"
                        src={prop.url}
                        unoptimized
                        width={250}
                        height={250}
                        alt={prop.titles}
                        id={prop.id}
                    />
                    <Image className=" max-w-[250px] max-h-[250px] bg-red-200 rounded-xl"
                        src={prop.url}
                        unoptimized
                        width={250}
                        height={250}
                        alt={prop.titles}
                        id={prop.id}
                    />
                </div>


            </div>
        </div>

    )
}
