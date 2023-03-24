import Image from "next/image";
import { useRouter } from "next/router";
import logo2 from '../../assets/images/2_logo Kemendesa.png';
import img from '../../assets/images/Image.png';
import { FormAbout } from "./FormAbout";
import { Slider } from "./Slider";
import UserCard from "./UserCard";
export const AboutSection = () => {
    const router = useRouter()
    const tim = [
        { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
        { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
        { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
        { profile: logo2, name: "Dr. Rachmita Maun Harahap, ST., M Sn", position: "founder" },
    ]
    return (
        <>
            <div>
                <div className="mx-auto max-w-7xl p-2 ">
                    <h1 className="font-bold md:text-4xl text-2xl mx-auto">Tentang Ketjil Bergerak</h1>
                    <iframe className="mt-5 mx-auto w-full h-[35rem] rounded-xl" src="https://www.youtube.com/embed/CUqQtTdRocE" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p className="text-gray-400 text-center md:text-base text-sm">Telah Rilis! Sebuah lagu penyemangat di situasi yang semakin menghimpit</p>
                </div>
                <div className="">
                    <h2 className="font-bold text-4xl ">Latar Belakang</h2>
                    <p className="mt-5">
                        Greg Sindana dan Invani Lela Herliana pertama kali bertemu pada tahun 2005
                        ketika mereka masih menjadi mahasiswa di salah satu fakultas keguruan dan ilmu pendidikan di Yogyakarta.
                    </p>
                    <p className="mt-5">{`
                        Pada tahun 2006, mereka membuat zine berjudul "ketjilbergerak", yang dicetak secara terbatas dan sederhana,
                        diedarkan di tempat-tempat nongkrong anak muda di Jogja pada waktu itu.
                        Salah satu pertanyaan besar yang mendasari terciptanya zine ini adalah:
                        "Mengapa semakin rajin kita belajar, maka semakin jauh kita dari realitas di masyarakat?"
                    `}</p>
                    <p className="mt-5">
                        Pertanyaan ini memiliki dampak yang besar sehingga pada tahun - tahun berikutnya,
                        mereka berusaha menciptakan ruang - ruang yang dapat menjembatani berbagai elemen dalam masyarakat,
                        yang dirancang secara kreatif, terbuka, egaliter, dan tidak menggurui.
                    </p>
                    <p className="mt-5">
                        Lebih dari 100 program yang berfokus pada anak muda telah diciptakan oleh ketjilbergerak sejak tahun 2008,
                        menghubungkan anak muda dari kampung, kampus, dan desa sekaligus membangun dan memperkuat platform sosial dengan masyarakat sipil.
                    </p>
                    <p className="mt-5">
                        Setelah melalui perjalanan panjang, “ketjilbergerak” berevolusi secara organik menjadi ruang belajar bersama yang cair dan independen,
                        yang menggunakan seni budaya sebagai pendekatan utamanya.
                    </p>
                    <p className="mt-5">
                        Hingga saat ini, ketjilbergerak rajin mengajak pemuda dari berbagai konteks untuk mempelajari masa lalu, masa kini,
                        dan mempersiapkan masa depan, dengan terus belajar bersama secara dialogis dan dialektis, memperkuat posisi tawar pemuda dengan membentuk jaringan,
                        juga memantapkan pengetahuan dengan metode yang disarikan dari salah satu falsafah Jawa, ‘ngelmu iku kelakone kanthi laku’
                        (ilmu dan pengetahuan diperoleh dari pengalaman nyata).
                    </p>
                </div>
                <div className="">
                    <h2 className="font-bold text-4xl mt-10">Linimasa Ketjil Bergerak</h2>
                    <Image className="mx-auto mt-10" src={img} width={1140} height={500} alt='' />
                </div>
                <div className=" p-2">
                    <h2 className="font-bold text-4xl mt-10">Mitra Kerja Sama</h2>
                    <p className=" text-xl">Berikut adalah partner yang bekerja sama dengan Ketjil Bergerak</p>
                    <div className="md:ml-10 mt-10">
                        <Slider />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-10 bg-gray-100 md:p-4 p-2 rounded flex-wrap">
                    <div className="md:w-6/12">
                        <h1 className="md:text-6xl text-4xl md:mb-0 mb-10 font-bold">Bantu Komunitas Kami Menyalurkan Kebaikan Terhadap Sesama</h1>
                    </div>
                    <div>
                        <FormAbout />
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="font-bold text-4xl md:p-0 p-2">Tim Ketjil Bergerak</h2>
                    <div className="flex md:justify-between justify-center items-center flex-wrap">
                        {tim.map((list) => (
                            <div key={list.name}>
                                <UserCard username={list.name} position={list.position} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};





