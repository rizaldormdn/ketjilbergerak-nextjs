import Image from "next/image";
import kb3 from "../../assets/images/kb3.png";
import kb2 from "../../assets/images/kb2.png";


const CardContent = () => {
  const listContent = [
    {
      image: kb3,
      title: "Dapoer Bergerak",
      desc: "Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.",
    },
    {
      image: kb3,
      title: "Pemuda Desa",
      desc: "Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.",
    },
    {
      image: kb3,
      title: "Company growth",
      desc: "Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.",
    }
  ];
  return (
    <>
    {listContent.map((list) => (
      <div key={list.title} className="relative">
      <Image className="rounded-xl opacity-80" src={list.image} width={300} height={225} alt='' />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h1 className="text-[#F07167]">{list.title}</h1>
        <p className="text-white">{list.desc}</p>
      </div>
    </div>
    ))}
    
    </>
  );


};

export default CardContent;