"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Mylink = ({href, children}) => {
    const pathname = usePathname()
    return (
        <Link 
            className={` btn rounded-md  ${pathname==href ? 'bg-[#1F5C4A] text-white':'btn-ghost text-[#64748B]'}`}
         href={href}>{children}</Link>
    );
};

export default Mylink;