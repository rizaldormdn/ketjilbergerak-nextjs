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
<<<<<<< HEAD
          <div>
               <div className="p-4 bg-[#F5F5F5]">
                    <h1 className="mb-8 md:ml-[4rem] ml-[3.5rem] text-[#F07167] md:text-4xl">Follow Us!</h1>
                    <div className="w-[70%] md:w-[90%] mx-auto gap-5 flex flex-wrap justify-between">
                         <Link href={'https://www.instagram.com/p/Ckp-L_oNKmC/?hl=id'}>
=======

          <div className="p-4 bg-[#F5F5F5]">
               <h1 className="mb-8 md:ml-[17rem] ml-[3.5rem] text-[#F07167] md:text-4xl">Follow Us!</h1>
               <div className='flex justify-evenly flex-wrap gap-x-[10rem] gap-y-5 w-3/4 mx-auto'>
                    {instagramList.map((list) => (
                         <Link key={list.id} href={list.href}>
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
                              <Image className="rounded-lg"
                                   src={list.src}
                                   unoptimized
                                   width={320}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
<<<<<<< HEAD
                         <Link href={'https://www.instagram.com/reel/CjDDHFGOJWL/?utm_source=ig_web_copy_link'}>
                              <Image className="rounded-lg"
                                   src={sos2}
                                   unoptimized
                                   width={320}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
                         <Link href={'https://www.instagram.com/p/CirzRSUPR9b/?utm_source=ig_web_copy_link'}>
                              <Image className="rounded-lg"
                                   src={sos3}
                                   unoptimized
                                   width={320}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
                         <Link href={'https://www.instagram.com/p/ChBlG8TvrQu/?utm_source=ig_web_copy_link'}>
                              <Image className="rounded-lg"
                                   src={sos4}
                                   unoptimized
                                   width={320}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
                         <Link href={'https://www.instagram.com/p/CgeNEKNvVwW/?utm_source=ig_web_copy_link'}>
                              <Image className="rounded-lg"
                                   src={sos5}
                                   unoptimized
                                   width={320}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
                         <Link href={'https://www.instagram.com/p/CbZmNrrLSxj/?utm_source=ig_web_copy_link'}>
                              <Image className="rounded-lg"
                                   src={sos6}
                                   unoptimized
                                   width={320}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
                    </div>
=======
                    ))}
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
               </div>
          </div>
     )
}
