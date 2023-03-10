import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";

type program = {
    slug: string
    image_thumbnail_url: string
    title: string
    excerpt: string
}

export const ProgramSection = () => {
<<<<<<< HEAD
    const program = [
        {
            title: "Sekolah Pemuda Desa",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        },
        {
            title: "Video Production with BPIP",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        },
        {
            title: "Ketjil Bergerak Music",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        },
        {
            title: "Ketjil Bergerak Mural",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        },
        {
            title: "Anti Corruption Youth Camp",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
=======
    const [listProgram, setListProgram] = useState<program[]>([])

    useEffect(() => {
        const getProgram = async () => {
            try {
                const response = await axios.get('http://localhost:8080/v1/program')
                setListProgram(response.data.data.program)
            } catch (error) {
                console.log(error);
            }
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
        }
        getProgram()
    }, [])

    const router = useRouter()
    return (
        <>
<<<<<<< HEAD
            <div className="p-2 md:p-8 bg-[#F5F5F5] ">
                <div className="md:ml-14">
                    <h1 className="text-2xl md:text-4xl ">Program</h1>
                    <p className="">Berikut adalah program unggulan dari Ketjil Bergerak!</p>
                </div>
            {program.map((list, index) => (
                <div key={list.title} className={`p-2 py-8 bg-[#F5F5F5] text-white md:flex gap-10 justify-evenly items-center mx-auto flex-wrap ${index === 1 || index === 3 ? "md:flex-row-reverse" : ""}`}>
                    <div>
                        <Image src={kb4} width={450} height={500} alt='' className="md:w-[350px]" />
                    </div>
                    <div>
                        <h1 className="mt-2 text-[#F07167] text-2xl md:text-4xl">{list.title}</h1>
                        <p className="mt-2 mb-2 text-black md:w-[40rem]">{list.desc}</p>
                        <Button action={(e) => { router.push('/program/read-more') }} title="Selengkapnya" buttonColor="bg-[#F07167]" />
                    </div>
                </div>
            ))}
=======
            <div className="bg-[#f5f5f5]">
                <div className="p-2 md:ml-[19rem] ">
                    <h1 className="text-2xl md:text-4xl">Program Unggulan Ketjil Bergerak</h1>
                    <p>Berikut adalah program unggulan dari Ketjil Bergerak!</p>
                </div>
                <div className="">
                    {listProgram && listProgram.length > 0 && listProgram.map((list, index) => (
                        <div key={list.slug} className={`p-2 py-8 text-white md:flex justify-evenly items-center mx-auto flex-wrap  ${index === 1 || index === 3 ? "md:flex-row-reverse" : ""}`}>
                            <div>
                                <Image src={list.image_thumbnail_url} width={500} height={500} alt='' className="md:w-[400px]" />
                            </div>
                            <div>
                                <h1 className="mt-2 text-[#F07167] text-2xl md:text-4xl">{list.title}</h1>
                                <p className="mt-2 mb-2 text-black md:w-[40rem]">{list.excerpt}</p>
                                <Button action={(e) => { router.push('/program/read-more') }} title="Selengkapnya" buttonColor="bg-[#F07167]" />
                            </div>
                        </div>
                    ))}
                    <Button title="Muat Lebih Banyak" buttonColor="mx-auto mt-5 hover:bg-[#F07167] hover:text-white" action={(e) => { }} />
                </div>
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
            </div>
        </>
    )
};