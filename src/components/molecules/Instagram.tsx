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

          <div className="p-4">
               <h1 className="mb-8 md:ml-[] ml-[] text-[#F07167] md:text-4xl">Follow Us!</h1>
               <div className='flex md:justify-between justify-evenly gap-10 flex-wrap gap-y-5'>
                    {instagramList.map((list) => (
                         <Link key={list.id} href={list.href}>
                              <Image className="rounded-lg"
                                   src={list.src}
                                   unoptimized
                                   width={280}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
                    ))}
               </div>
          </div>
     )
}
