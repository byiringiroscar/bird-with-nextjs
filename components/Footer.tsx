import React from 'react'
import Image from 'next/image'
import curve from '../public/curve.png'
import home_section from '../public/home_section.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <section className='flex w-full items-center justify-center pt-12 bg-[#032538] relative'>
        <Image
        src={home_section}
        alt='curve'
        className='w-[90%] lg:w-3/4'
        />
    </section>
    <footer className='bg-[#02324e] flex flex-col lg:flex-row gap-2 items-center justify-center py-4'>
      <p className='text-center text-sm text-[#e8e8e8] tracking-[0.1px] montserrat-400'>Are you a <span className='text-white font-bold'>developer</span> preparing for an Interview or trying to level up your coding skills</p>
      <Link href='https://www.linkedin.com/in/oscar-byiringiro-9baa8313a/' className='text-[#2ED1A5] no-underline font-bold'> Learn More&rarr;</Link>
    </footer>
    </>
  )
}

export default Footer