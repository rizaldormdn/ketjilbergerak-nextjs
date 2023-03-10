import React from 'react'
import Link from "next/link";

export const LinkFooter = () => {
     const program = [
          { label: 'Sekolah Desa', href: '#' },
          { label: 'Video Production with BPIP', href: '#' },
          { label: 'Music', href: '#' },
          { label: 'Mural', href: '#' },
          { label: 'Anti Corruption Youth Camp', href: '#' },
     ]
     const blog = [
          { label: 'About', href: '/about' },
          { label: 'Contact Us', href: '/contact' },
          { label: 'Careers', href: '#' },
          { label: 'Culture', href: '#' },
          { label: 'Blog', href: 'blogs' },
     ]
     return (
          <>
               <div className="mb-4">
                    <h2 className="font-bold text-[#F07167]">Product</h2>
                    <div className="flex flex-col">
                         {program.map(link => (
                              <Link key={link.label} className="hyperlink hovers" href={link.href}>{link.label}</Link>
                         ))}
                    </div>
               </div>
               <div className="mb-4">
                    <h2 className="font-bold text-[#F07167]">Company</h2>
                    <div className="flex flex-col">
                         {blog.map(link => (
                              <Link key={link.label} className="hyperlink hovers" href={link.href}>{link.label}</Link>
                         ))}
                    </div>
               </div>
          </>
     )
}
