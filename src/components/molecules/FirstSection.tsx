import Image from "next/image";
import { useRouter } from "next/router";
import kb1 from "../../assets/images/KB1.png";
import Button from "../atoms/Button";

export const FirstSectionField = () => {
    const router = useRouter()
    return (
        <>
            <div className="md:flex items-center justify-between md:py-10 mx-auto">
                <div className="mb-4 p-2 text-white">
                    <h1 className="font-bold text-4xl text-[#F07167]">Hai Anak Muda Indonesia</h1>
                    <p className="w-[24rem] mt-4 mb-6 text-black">Selamat datang di Ketjil Bergerak! Kami adalah organisasi nirlaba yang didirikan pada 2006 dan berbasis di Yogyakarta, Indonesia.</p>
                    <Button action={(e) => router.push("/about")} title="Perkenalan Ketjil Bergerak!" buttonColor="bg-[#F07167]" />
                </div>
                <div className="p-2">
                    <Image
                        src={kb1}
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
