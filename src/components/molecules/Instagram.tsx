import React from 'react'
import Image from "next/image";

import sos1 from "../../assets/images/Sosmed1.png"
import sos2 from "../../assets/images/Sosmed2.png"
import sos3 from "../../assets/images/Sosmed3.png"
import sos4 from "../../assets/images/Sosmed4.png"
import sos5 from "../../assets/images/Sosmed5.png"
import sos6 from "../../assets/images/Sosmed6.png"
import Link from 'next/link';

export const Instagram = () => {
     return (
          <div>
               <div className="p-4 bg-[#F5F5F5]">
                    <h1 className="mb-8 md:ml-[4rem] ml-[3.5rem] text-[#F07167] md:text-4xl">Follow Us!</h1>
                    <div className="w-[70%] md:w-[90%] mx-auto gap-5 flex flex-wrap justify-between">
                         <Link href={'https://www.instagram.com/p/Ckp-L_oNKmC/?hl=id'}>
                              <Image className="rounded-lg"
                                   src={sos1}
                                   unoptimized
                                   width={320}
                                   height={200}
                                   alt="instagram1"
                              />
                         </Link>
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
               </div>
          </div>
     )
}
