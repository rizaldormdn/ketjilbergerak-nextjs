import Image from "next/image";
import { useRouter } from "next/router";
import kb4 from "../../assets/images/KB4.png";
import Button from "../atoms/Button";

export const ProgramSection = () => {
    const program = [
        {
            title: "Sekolah Pemuda Desa",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        },
        {
            title: "Sekolah Pemuda Desa",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        },
        {
            title: "Sekolah Pemuda Desa",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        },
        {
            title: "Sekolah Pemuda Desa",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        },
        {
            title: "Sekolah Pemuda Desa",
            desc: "Sekolah Pemuda Desa (SPD) akan hadir kembali nih,tapi dengan format yang sedikit berbeda dari biasanya.Setelah 4 kali penyelenggaraan di DIY dan Jawa Tengah,akhir tahun ini SPD akan diselenggarakan di 3 kabupaten di 3 provinsi sekaligus."
        }
    ]
    const router = useRouter()
    return (
        <>
            {program.map((list, index) => (
                <div key={list.title} className={`p-2 py-8 text-white md:flex gap-10 justify-evenly items-center mx-auto flex-wrap ${index === 1 || index === 3 ? "md:flex-row-reverse" : ""}`}>
                    <div>
                        <Image src={kb4} width={450} height={500} alt='' className="" />
                    </div>
                    <div>
                        <h1 className="mt-2 text-[#F07167] text-2xl md:text-4xl">{list.title}</h1>
                        <p className="mt-2 mb-2 text-black md:w-[40rem]">{list.desc}</p>
                        <Button action={(e) => { router.push('/program/read-more') }} title="Selengkapnya" buttonColor="bg-[#F07167]" />
                    </div>
                </div>
            ))}
        </>
    )
};

