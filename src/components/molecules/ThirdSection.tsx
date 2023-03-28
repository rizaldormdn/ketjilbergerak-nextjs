import { ProgramType } from "@/types/ProgramType";
import { useRouter } from "next/router";
import Button from "../atoms/Button";
import CardContent from "./CardContent";

type Props = {
  programs: ProgramType[]
};

const ThirdSection = ({ programs }: Props) => {
  const router = useRouter()

  return (
    <>
      <div className=" w-full flex items-center justify-between p-6">
        <div className="w-full p-8 ">
          <div className="">
            <div className="flex-row justify-center items-center text-center ">
              <h1 className="text-[#F07167]">Program Unggulan</h1>
              <p className="text-black">Program unggulan untuk mencapai misi kami.</p>
            </div>
            <div className="flex md:justify-between justify-evenly flex-wrap md:gap-10 gap-5 mt-14">
              {programs.map((program) => (
                <div key={program.attributes.title} className="cursor-pointer" onClick={() => router.push(`program/${program.attributes.slug}`)}>
                  <CardContent
                    title={program.attributes.title}
                    excerpt={program.attributes.excerpt}
                    image_thumbnail_url={"http://127.0.0.1:1337" + program.attributes.images.data.attributes.url}
                  />
                </div>
              ))}
            </div>
            <div className="flex mt-16 justify-center">
              <Button action={(e) => { router.push('/program') }} title="Lihat Program Selengkapnya" buttonColor=" hover:bg-[#F07167] hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;