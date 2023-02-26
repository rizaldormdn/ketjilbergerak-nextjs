import Link from "next/link";
import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/router";
import kb4 from "/public/static/images/KB4.png"


type ProgramSection = {
    id: string
    url: string
    titles: string
    description: string
    images: string
}



export const ProgramSection: FC<ProgramSection> = ({ id, url, titles, description, images }: ProgramSection) => {
    const router = useRouter()
    // const {id, url, titles} = 
    // const { id, url, titles, description } = router.query
    // router.query=props
    // console.log(router.query)
    // console.log(prop)
    return (
        <>
            <div className="w-full bg-[#F5F5F5]cd  p-3 ">
                <div className="mx-14">
                    <h1 className="text-5xl">Program</h1>
                    <p className="mt-10 ">Berikut adalah program unggulan dari Ketcjil Bergerak!</p>
                </div>
            </div>
            
            <div className="flex w-full bg-[#F5F5F5]cd  justify-between items-center ">
                <div className="w-full mx-16  bg-[#F5F5F5]cd ">
                <Image
                        src={kb4}
                        unoptimized
                        width={720}
                        height={650}
                        alt={titles}
                        id={id}
                        />                
                </div>
                <div className="w-5/6 p-6 mx-16 ">
                    <h1 className="mb-5 uppercase text-[#F07167] text-3xl">Sekolah Pemuda Desa</h1>
                    <p className="mb-5">Sekolah Pemuda Desa (SPD) akan hadir kembali nih, tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah, akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus..</p>
                    <Button action={(e) => {alert('Triggered')}} title="Selengkapnya" buttonColor="bg-[#F07167]"/>
                </div>
            </div>
            <div className="flex w-full bg-[#F5F5F5]cd  justify-between items-center ">
                <div className="w-5/6 p-6 mx-16 ">
                    <h1 className="mb-5 uppercase text-[#F07167] text-3xl">Video Production with BPIP</h1>
                    <p className="mb-5">Sekolah Pemuda Desa (SPD) akan hadir kembali nih, tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah, akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus..</p>
                    <Button action={(e) => {alert('Triggered')}} title="Selengkapnya" buttonColor="bg-[#F07167]"/>
                </div>
                <div className="w-full mx-16  bg-[#F5F5F5]cd ">
                <Image
                        src={kb4}
                        unoptimized
                        width={720}
                        height={650}
                        alt={titles}
                        id={id}
                        />                
                </div>
            </div>
            <div className="flex w-full bg-[#F5F5F5]cd  justify-between items-center ">
                <div className="w-full mx-16  bg-[#F5F5F5]cd ">
                <Image
                        src={kb4}
                        unoptimized
                        width={720}
                        height={650}
                        alt={titles}
                        id={id}
                        />                
                </div>
                <div className="w-5/6 p-6 mx-16 ">
                    <h1 className="mb-5 uppercase text-[#F07167] text-3xl">Musik</h1>
                    <p className="mb-5">Sekolah Pemuda Desa (SPD) akan hadir kembali nih, tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah, akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus..</p>
                    <Button action={(e) => {alert('Triggered')}} title="Selengkapnya" buttonColor="bg-[#F07167]"/>
                </div>
            </div>  
            <div className="flex w-full bg-[#F5F5F5]cd  justify-between items-center ">
                <div className="w-5/6 p-6 mx-16 ">
                    <h1 className="mb-5 uppercase text-[#F07167] text-3xl">Mural</h1>
                    <p className="mb-5">Sekolah Pemuda Desa (SPD) akan hadir kembali nih, tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah, akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus..</p>
                    <Button action={(e) => {alert('Triggered')}} title="Selengkapnya" buttonColor="bg-[#F07167]"/>
                </div>
                <div className="w-full mx-16  bg-[#F5F5F5]cd ">
                <Image
                        src={kb4}
                        unoptimized
                        width={720}
                        height={650}
                        alt={titles}
                        id={id}
                        />                
                </div>
            </div>
            <div className="flex w-full bg-[#F5F5F5]cd  justify-between items-center ">
                <div className="w-full mx-16  bg-[#F5F5F5]cd ">
                <Image
                        src={kb4}
                        unoptimized
                        width={720}
                        height={650}
                        alt={titles}
                        id={id}
                        />                
                </div>
                <div className="w-5/6 p-6 mx-16 ">
                    <h1 className="mb-5 uppercase text-[#F07167] text-3xl">Anti Corruption Youth Camp</h1>
                    <p className="mb-5">Sekolah Pemuda Desa (SPD) akan hadir kembali nih, tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah, akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus..</p>
                    <Button action={(e) => {alert('Triggered')}} title="Selengkapnya" buttonColor="bg-[#F07167]"/>
                </div>
            </div>  
        </>
    )
};

