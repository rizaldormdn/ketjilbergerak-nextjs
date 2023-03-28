import { InstagramType } from '@/types/InstagramType';
import Image from "next/image";
import Link from 'next/link';

type Props = {
     instagrams: InstagramType[]
}

export const Instagram = ({ instagrams }: Props) => {

     return (
          <div className="p-4">
               <h1 className="mb-8 text-[#F07167] md:text-4xl md:text-start text-center text-3xl">Follow Us!</h1>
               <div className='flex md:justify-between justify-evenly gap-10 flex-wrap gap-y-5 '>
                    {instagrams && instagrams.length > 0 && instagrams.map((list) => (
                         <Link
                              key={list.id}
                              href={list.attributes.url}
                         >
                              <Image className="rounded-lg hover:scale-110 duration-300"
                                   src={list.attributes.url}
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
