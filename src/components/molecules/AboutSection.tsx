import Link from "next/link";
import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/router";
import kb1 from "/public/static/images/KB1.png"


type AboutSection = {
    id: string
    url: string
    titles: string
    description: string
    images: string
}



export const AboutSection: FC<AboutSection> = ({ id, url, titles, description, images }: AboutSection) => {
    const router = useRouter()
    // const {id, url, titles} = 
    // const { id, url, titles, description } = router.query
    // router.query=props
    // console.log(router.query)
    // console.log(prop)
    return (
        <>
            <div className="flex w-full bg-[#F5F5F5] justify-between items-center ">
                <div className="w-5/6 p-14">
                    <h1 className="mb-7 uppercase text-[#F07167]">Tentang Ketjil Bergerak</h1>
                    <p className="mb-7">Selamat datang di Ketjil Bergerak! Kami adalah organisasi nirlaba yang didirikan pada 2006 dan berbasis di Yogyakarta, Indonesia.</p>
                    <Button action={(e) => {alert('Triggered')}} title="Perkenalan Ketjil Bergerak!" buttonColor="bg-[#F07167]"/>
                </div>
                <div className="w-full">
                    <Image
                        src={kb1}
                        unoptimized
                        width={720}
                        height={650}
                        alt={titles}
                        id={id}
                        />
                    {/* <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /> */}
                </div>
            </div>
        </>
    )
};

