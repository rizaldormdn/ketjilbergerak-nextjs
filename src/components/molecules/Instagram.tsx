import React from 'react'
import Image from "next/image";
import sos1 from "../../assets/images/Sosmed1.png"
import Link from 'next/link';

export const Instagram = () => {
     const instagramList = [
          {
               id: 1,
               src: sos1,
               href: "https://www.instagram.com/p/Ckp-L_oNKmC/?hl=id"
          },
          {
               id: 2,
               src: sos1,
               href: "https://www.instagram.com/p/Ckp-L_oNKmC/?hl=id"
          },
          {
               id: 3,
               src: sos1,
               href: "https://www.instagram.com/p/Ckp-L_oNKmC/?hl=id"
          },
          {
               id: 4,
               src: sos1,
               href: "https://www.instagram.com/p/Ckp-L_oNKmC/?hl=id"
          },
          {
               id: 5,
               src: sos1,
               href: "https://www.instagram.com/p/Ckp-L_oNKmC/?hl=id"
          },
          {
               id: 6,
               src: sos1,
               href: "https://www.instagram.com/p/Ckp-L_oNKmC/?hl=id"
          },
     ]
     return (

          <div className="p-4 bg-[#F5F5F5]">
               <h1 className="mb-8 md:ml-[8rem] ml-[3.5rem] text-[#F07167] md:text-4xl">Follow Us!</h1>
               <div className='flex justify-evenly flex-wrap gap-x-[10rem] gap-y-5 w-3/4 mx-auto'>
                    {instagramList.map((list) => (
                         <Link key={list.id} href={list.href}>
                              <Image className="rounded-lg"
                                   src={list.src}
                                   unoptimized
                                   width={200}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
                    ))}
               </div>
          </div>
     )
}
