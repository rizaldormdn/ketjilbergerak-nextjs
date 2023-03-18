import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../atoms/Button";

type program = {
    slug: string
    image_thumbnail_url: string
    title: string
    excerpt: string
    index: number
}

export const ProgramSection = ({ slug, image_thumbnail_url, title, excerpt, index }: program) => {
    const router = useRouter()
    return (
        <>
            <div className="bg-[#f5f5f5]">
                <div className="p-2 md:ml-[4rem] ">
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
                    <Button title="Muat Lebih Banyak" style="mb-5" buttonColor="mx-auto mt-5 hover:bg-[#F07167] hover:text-white" action={(e) => { }} />
                </div>
                
            </div>
        </>
    )
};