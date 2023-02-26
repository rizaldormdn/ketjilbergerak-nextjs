import Link from "next/link";
import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/router";


type AboutSecond = {
    id: string
    url: string
    titles: string
    description: string
    images: string
}



export const AboutSecond: FC<AboutSecond> = ({ id, url, titles, description, images }: AboutSecond) => {
    const router = useRouter()
    // const {id, url, titles} = 
    // const { id, url, titles, description } = router.query
    // router.query=props
    // console.log(router.query)
    // console.log(prop)
    return (
        <>
            <div className="flex w-full bg-[#2C7284] justify-between items-center ">
                <div className="w-5/12 p-14">
                    <h1 className="mb-5 uppercase text-[#F07167] text-3xl">Support Our Mission</h1>
                    <p className="mb-5">Mari dukung gerakan sosial kami untuk mewujudkan Visi dan Misi Ketjil Bergerak.</p>
                    <Button action={(e) => {alert('Triggered')}} title="Donasi" buttonColor="bg-[#F07167]"/>
                </div>
            </div>
        </>
    )
};

