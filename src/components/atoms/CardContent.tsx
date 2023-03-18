import Image from "next/image";

type props = {
  image_thumbnail_url: string
  title: string
  excerpt: string
}

const CardContent = (props: props) => {
  return (
    <>
      <div className="relative bg-opacity-100 hover:scale-110 duration-300">
        <Image className="rounded-xl opacity-80 lg:w-[280px]" src={props.image_thumbnail_url} width={300} height={225} alt='' />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h1 className="text-[#F07167]">{props.title}</h1>
          <p className="text-white">{props.excerpt}</p>
        </div>
      </div>
    </>
  );
};

export default CardContent;
