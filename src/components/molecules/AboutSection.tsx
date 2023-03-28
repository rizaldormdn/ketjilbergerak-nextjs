import Image from "next/image";
import img from '../../assets/images/Image.png';
import UserCard from "./UserCard";
import { AboutPage } from "@/types/AboutPageType";
import { TeamsType } from "@/types/TeamType";
import { useRouter } from "next/router";
import { FormAbout } from "./FormAbout";
import { Slider } from "../atoms/Slider";
import { PartnersType } from "@/types/PartnersType";

type Props = {
    latarBelakang: AboutPage
    teams: TeamsType[]
    partners: PartnersType[]
}
export const AboutSection = ({ latarBelakang, teams, partners }: Props) => {
    const router = useRouter()

    const content = latarBelakang.attributes.latar_belakang.split('.')
    const quarter = Math.ceil(content.length / 4)

    const first = content.slice(0, quarter).join('.')
    const second = content.slice(quarter, 2 * quarter).join('.')
    const third = content.slice(2 * quarter, 3 * quarter).join('.')
    return (
        <>
            <div>
                <div className="mx-auto max-w-7xl p-2 ">
                    <h1 className="font-bold md:text-4xl text-2xl mx-auto">Tentang Ketjil Bergerak</h1>
                    <iframe
                        className="mt-5 mx-auto w-full h-[35rem] rounded-xl"
                        src="https://www.youtube.com/embed/CUqQtTdRocE"
                        allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <p className="text-gray-400 text-center md:text-base text-sm">Telah Rilis! Sebuah lagu penyemangat di situasi yang semakin menghimpit</p>
                </div>
                <div className="">
                    <h2 className="font-bold text-4xl ">Latar Belakang</h2>
                    <p className="mt-5">{first}</p>
                    <p className="mt-5">{second}</p>
                    <p className="mt-5">{third}</p>
                </div>
                <div className="">
                    <h2 className="font-bold text-4xl mt-10">Linimasa Ketjil Bergerak</h2>
                    <Image
                        className="mx-auto mt-10"
                        src={img}
                        width={1140}
                        height={500}
                        alt=''
                    />
                </div>
                <div className=" p-2">
                    <h2 className="font-bold text-4xl mt-10">Mitra Kerja Sama</h2>
                    <p className=" text-xl">Berikut adalah partner yang bekerja sama dengan Ketjil Bergerak</p>
                    <div className="md:ml-10 mt-10">
                        {partners.map((v) => (
                            <Slider
                                key={v.attributes.title}
                                images={"http://127.0.0.1:1337" + v.attributes.image.data.attributes.url}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-10 bg-gray-100 md:p-4 p-2 rounded flex-wrap">
                    <div className="md:w-6/12">
                        <h1 className="md:text-6xl text-4xl md:mb-0 mb-10 font-bold">Bantu Komunitas Kami Menyalurkan Kebaikan Terhadap Sesama</h1>
                    </div>
                    <div>
                        <FormAbout />
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="font-bold text-4xl md:p-0 p-2">Tim Ketjil Bergerak</h2>
                    <div className="flex md:justify-between justify-center items-center flex-wrap">
                        {teams.map((list) => (
                            <div key={list.attributes.name}>
                                <UserCard
                                    username={list.attributes.name}
                                    position={list.attributes.position}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};