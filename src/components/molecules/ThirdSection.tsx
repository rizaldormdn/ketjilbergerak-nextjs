import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Button from "../atoms/Button";
import CardContent from "./CardContent";

type props = {
  title: string;
  excerpt: string;
  image_thumbnail_url: string
  slug: string
};

const ThirdSection = () => {
  const router = useRouter()

  const [featured, setFeatured] = useState<props[]>([])
  const getFeaturedArticle = async () => {
    try {
      const response = await axios.get('http://localhost:8080/v1/featured-program')
      setFeatured(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getFeaturedArticle()
  }, [])
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
              {featured.map((v) => (
                <div key={v.title} className="cursor-pointer" onClick={() => router.push(`program/${v.slug}`)}>
                  <CardContent
                    title={v.title}
                    excerpt={v.excerpt}
                    image_thumbnail_url={v.image_thumbnail_url}
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