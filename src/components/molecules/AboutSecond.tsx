import { useRouter } from "next/router";
import { FC } from "react";
import Button from "../atoms/Button";


type AboutSecond = {
    id: string
    url: string
    titles: string
    description: string
    images: string
}



export const AboutSecond: FC<AboutSecond> = ({ id, url, titles, description, images }: AboutSecond) => {
    const router = useRouter()
    return (
        <>
            <div className="bg-[#2C7284] justify-between items-center ">
                <div className="p-4 md:ml-[18rem]">
                    <h1 className="mb-5 uppercase text-[#F07167] text-3xl">Support Our Mission</h1>
                    <p className="mb-5">Mari dukung gerakan sosial kami untuk <br /> mewujudkan Visi dan Misi Ketjil Bergerak.</p>
                    <Button action={(e) => { alert('Triggered') }} title="Donasi" buttonColor="bg-[#F07167]" textColor="text-white"/>
                </div>
            </div>
        </>
    )
};

