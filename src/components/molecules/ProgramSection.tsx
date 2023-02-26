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
    return (
        <>
            <div className="">
                <div className="">
                    <h1 className="text-5xl">Program</h1>
                    <p className="mt-2">Berikut adalah program unggulan dari Ketcjil Bergerak!</p>
                </div>
            </div>
        </>
    )
};

