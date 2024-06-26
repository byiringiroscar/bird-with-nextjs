'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import { NAV_LINKS } from '@/constants' 
import { FiAlignJustify } from "react-icons/fi";
import MobileNav from './MobileNav'

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const handleToggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 1024) {
            setIsMobileNavOpen(false);
        }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
  return (
    <nav className='flex justify-between padding-container items-center z-50 xl:px-28 bg-[#021520] py-2'>
        <Link href='/' className='flex items-center'>
        <Image
            src={logo}
            width={140}
            height={50}
            alt="logo"
            className="h-[50px] w-[50px]"
        />
        <h3 className='font-bold opensans-font-700 text-[15px] lg:text-[20px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Coderazor</h3>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link
                href={link.href}
                key={link.key}
                className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-[15px] font-bold opensans-font-regular transition-all px-1 py-0.5 cursor-pointer rounded relative group text-left'
            >
                {link.label}
                <span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent transition-all duration-300 mt-2 group-hover:bg-gradient-span"
                style={{ backgroundColor: 'rgba(0,0,0,0)' }}
                ></span>

            </Link>
            ))}
        </ul>
        <button className="hidden lg:block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-white text-base font-bold py-1 px-2 lg:px-6  rounded-md transition-all hover:bg-gradient-to-r hover:from-blue-700 hover:via-green-600 hover:to-indigo-500 opensans-font-regular">
            Sign In
            </button>

            <div className='lg:hidden'>
          <FiAlignJustify onClick={handleToggleMobileNav} className='text-3xl text-white cursor-pointer' />
        </div>
        <MobileNav isMobileNavOpen={isMobileNavOpen} onToggleNav={handleToggleMobileNav} />


    </nav>
  )
}

export default Navbar