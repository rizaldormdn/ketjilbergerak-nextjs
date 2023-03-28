import { HomePage } from "@/types/HomePageType";
import Image from "next/image";
import { useRouter } from "next/router";
import kb1 from "../../assets/images/KB1.png";
import Button from "../atoms/Button";

type Props = {
    home: HomePage
}
export const FirstSectionField = ({ home }: Props) => {
    const router = useRouter()
    return (
        <>
            <div className="md:flex items-center justify-between md:py-10 mx-auto">
                <div className="mb-4 p-2 text-white">
                    <h1 className="font-bold text-4xl text-[#F07167]">{home.attributes.banner_title}</h1>
                    <p className="w-[24rem] mt-4 mb-6 text-black">{home.attributes.banner_description}</p>
                    <Button action={(e) => router.push("/about")} title="Perkenalan Ketjil Bergerak!" buttonColor="bg-[#F07167]" />
                </div>
                <div className="p-2">
                    <Image
                        src={"http://127.0.0.1:1337" + home.attributes.banner_images.data.attributes.url}
                        unoptimized
                        width={520}
                        height={450}
                        alt=''
                    />
                </div>
            </div>
        </>
    )
}
