import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../atoms/Button";

type program = {
    id: number
    slug: string
    image_thumbnail_url: string
    title: string
    excerpt: string
    index: number
}
export const ProgramSection = ({ slug, image_thumbnail_url, title, excerpt, index, id }: program) => {
    const router = useRouter()
    return (
        <>
            <div className="">
                <div className="">
                    <div key={slug} className={`p-2 py-8 text-white md:flex justify-between items-center mx-auto flex-wrap  
                    ${index === 1 || index === 3 || index === 5 || index === 7 || index === 9 ? "md:flex-row-reverse" : ""}`}>
                        <div>
                            <Image src={image_thumbnail_url} width={500} height={500} alt='' className="md:w-[400px]" />
                        </div>
                        <div>
                            <h1 className="mt-2 text-[#F07167] text-2xl md:text-4xl">{title}</h1>
                            <p className="mt-2 mb-2 text-black md:w-[40rem]">{excerpt}</p>
                            <Button action={(e) => { router.push(`/program/${id}`) }} title="Selengkapnya" buttonColor="bg-[#F07167]" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};