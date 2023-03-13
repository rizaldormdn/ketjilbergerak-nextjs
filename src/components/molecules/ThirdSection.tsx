import { useRouter } from "next/router";
import { ReactElement } from "react";
import Button from "../atoms/Button";
import CardContent from "../atoms/CardContent";

type props = {
  title?: string;
  url?: String;
  src?: ReactElement;
  styled?: string
};

const ThirdSection = () => {
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
            <div className="flex justify-between flex-wrap md:gap-10 gap-5 mt-14">
                  <CardContent/>
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