import React from 'react'
import logo from '../public/logo.png'   
import Link from 'next/link'
import { IoClose } from "react-icons/io5";
import Image from 'next/image'
import { NAV_LINKS } from '@/constants' 

type ToggleType = {
    isMobileNavOpen?: boolean;
    onToggleNav?: any;
  };

const MobileNav = ({ isMobileNavOpen, onToggleNav }: ToggleType) => {
  return (
    <div className={`h-screen w-full fixed gap-5 bg-[#021520] z-50 flex flex-col lg:hidden items-center p-8 transition-all duration-[1s] ${isMobileNavOpen ? 'right-0' : '-right-full'} top-0`}>
        <div className='flex justify-between w-full'>
          <Link href='/' className='flex items-center'>
          <Image
              src={logo}
              width={140}
              height={50}
              alt="logo"
              className="h-[80px] w-[80px]"
          />
          <h3 className='font-bold opensans-font-700 text-[25px] lg:text-[20px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Coderazor</h3>
          </Link>
            <IoClose onClick={onToggleNav} className='text-3xl text-white cursor-pointer' />
        </div>
        <hr className='w-full text-[#E6E6E6] text-[1px]' />
        <ul className='flex flex-col gap-9 items-start w-full'>
        {NAV_LINKS.map((link) => (
                <Link
                href={link.href}
                key={link.key}
                className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-[20px] font-bold opensans-font-regular transition-all px-1 py-0.5 cursor-pointer rounded relative group text-left'
            >
                {link.label}
                <span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent transition-all duration-300 mt-2 group-hover:bg-gradient-span"
                style={{ backgroundColor: 'rgba(0,0,0,0)' }}
                ></span>

            </Link>
            ))}
        </ul>

    </div>
  )
}

export default MobileNav