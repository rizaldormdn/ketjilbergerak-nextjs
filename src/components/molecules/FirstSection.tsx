import Link from "next/link";
import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/router";
import kb1 from "../../assets/images/KB1.png"


type TFirstSection = {
    id: string
    url: string
    titles: string
    description: string
    images: string
}



export const FirstSectionField: FC<TFirstSection> = ({ id, url, titles, description, images }: TFirstSection) => {
    const router = useRouter()
    return (
        <>
            <div className="md:flex items-center justify-evenly py-10 mx-auto bg-[#F5F5F5]">
                <div className="mb-4 p-2 text-white">
                    <h1 className="font-bold text-4xl text-[#F07167]">Hai Anak Muda Indonesia</h1>
                    <p className="w-[24rem] mt-4 mb-6 text-black">Selamat datang di Ketjil Bergerak! Kami adalah organisasi nirlaba yang didirikan pada 2006 dan berbasis di Yogyakarta, Indonesia.</p>
                    <Button action={(e) => { alert('Triggered') }} title="Perkenalan Ketjil Bergerak!" buttonColor="bg-[#F07167]" />
                </div>
                <div className="p-2">
                    <Image
                        src={kb1}
                        unoptimized
                        width={520}
                        height={450}
                        alt={titles}
                        id={id}
                    />
                </div>
            </div>
        </>
    )
}
