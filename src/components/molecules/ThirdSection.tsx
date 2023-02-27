import { useRouter } from "next/router";
import { ReactElement } from "react";
import Button from "../atoms/Button";
import CardContent from "../molecules/CardContent";

type props = {
  title?: string;
  url?: String;
  src?: ReactElement;
  styled?: string
};

const ThirdSection = () => {
  const listContent = [
    {
      title: "Dapoer Bergerak",
      desc: "Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.",
      styled: "bg-bg1 no-repeat bg-cover text-xl"
    },
    {
      title: "Pemuda Desa",
      desc: "Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.",
      styled: "bg-bg2 no-repeat bg-cover text-xl"
    },
    {
      title: "Company growth",
      desc: "Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.",
      styled: "bg-bg3 no-repeat bg-cover text-xl "
    }
  ];
  const router = useRouter()
  return (
    <>
      <div className=" w-full flex items-center justify-between p-6 font-bol bg-[#F5F5F5]">
        <div className="w-full p-8 ">
          <div className="">
            <div className="flex-row justify-center items-center text-center ">
              <h1 className="text-[#F07167]">Program Unggulan</h1>
              <p className="text-black">Program unggulan untuk mencapai misi kami.</p>
            </div>
            <div className="flex justify-evenly flex-wrap gap-5 mt-14">
              {listContent.map((list) => (
                <div key={list.title}>
                  <CardContent title={list.title} desc={list.desc} />
                </div>
              ))}
            </div>
            <div className="flex mt-16 justify-center">
              <Button action={(e) => { router.push('/program') }} title="Lihat Program Selengkapnya" buttonColor="bg-[#F5F5F5]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;