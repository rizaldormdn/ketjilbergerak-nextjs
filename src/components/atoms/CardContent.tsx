import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import kb3 from "../../assets/images/kb3.png";

type props = {
  slug: string
  image_thumbnail_url: string
  title: string
  excerpt: string
}

const CardContent = () => {
  const [featured, setFeatured] = useState<props[]>([])

  useEffect(() => {
    const getFeaturedArticle = async () => {
      try {
        const response = await axios.get('http://localhost:8080/v1/featured-program')
        setFeatured(response.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getFeaturedArticle()
  }, [])
  return (
    <>
      {featured.map((list) => (
        <div key={list.slug} className="relative">
          <Image className="rounded-xl opacity-80" src={kb3} width={300} height={225} alt='' />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h1 className="text-[#F07167]">{list.title}</h1>
            <p className="text-white">{list.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardContent;
