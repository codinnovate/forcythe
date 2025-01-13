'use client';


import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Image from "next/image";
import { menuIcon } from "@/assets";
import { useState } from "react";
import { navItems } from "@/constants";






export default function Header(){
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    return (

        <header className="flex justify-between px-2 py-7 sticky top-0 z-30 backdrop-blur-lg gap-10 items-center">
        <Logo />
        <nav className="hidden md:flex gap-5">
            {navItems.map((nav, i) => (
                <Link 
                key={i}
                href={nav.href}>
                    {nav.label}
                </Link>
            ))}
        </nav>

        <button 
        onClick={toggleMenu}
        className="cursor-pointer rounded-md flex items-center gap-4 bg-opacity-10 bg-white p-3 md:hidden">
         <Image 
          src={menuIcon}
          width={18}
          height={18}
          alt="menu icon" />
        </button>
        <Button
        className='hidden md:flex'
        title="Book a Call"
        />


        {showMenu && (
            <div 
            className="absolute top-0  left-0 z-40 mt-[5em] w-full p-5 py-8 rounded-[2rem]"
            style={{ background: "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)" }}>
        <ul className="flex flex-col gap-2.5">
            {navItems.map((nav, i) => (
                 <li key={i}>
                 <Link href={nav.href}>
                     {nav.label}
                 </Link>
             </li>
            ))}
        </ul>
        </div>
       )}
        </header>
    )
}