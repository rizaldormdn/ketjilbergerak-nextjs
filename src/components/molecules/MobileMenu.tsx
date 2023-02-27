import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div>
        <DehazeIcon fontSize='large' className='md:hidden' onClick={() => { setMenu(!menu) }} />
      </div>
      {menu && (
        <div className='absolute top-[4rem] left-[0] bg-white w-full rounded-b-xl min-h-full'>
          <ul className="p-1 flex flex-col items-center justify-center">
            <Link className="block hyperlink hovers p-3" href="/">Home</Link>
            <Link className='block hyperlink hovers p-3' href='/program'>Program</Link>
            <Link className="block hyperlink hovers p-3" href="/about">About</Link>
            <Link className="block hyperlink hovers p-3" href="/contact">Contact</Link>
            <Link className="block hyperlink hovers p-3" href="/merch">Merch</Link>
          </ul>
        </div>
      )}
    </>
  )
}
export default MobileMenu;