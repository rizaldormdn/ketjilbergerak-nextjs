import Image from "next/image";
import kb2 from "/public/static/images/KB3.png";

type Props = {
  src?: string;
  title?: string;
  desc?: string;
  styled?: string;
  images?: string
};

const CardContent = (props: Props) => {
  return (
    <>
      <div className="relative">
        <Image className="rounded-xl opacity-80" src={kb2} width={300} height={225} alt='' />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h1 className="text-[#F07167]">{props.title}</h1>
          <p className="text-white">{props.desc}</p>
        </div>
      </div>
    </>
  );

};

export default CardContent;
