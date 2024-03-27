import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-[#02324e] flex flex-col lg:flex-row gap-2 items-center justify-center py-4'>
      <p className='text-center text-sm text-[#e8e8e8] tracking-[0.1px] montserrat-400'>Are you a <span className='text-white font-bold'>developer</span> preparing for an Interview or trying to level up your coding skills</p>
      <Link href='https://www.linkedin.com/in/oscar-byiringiro-9baa8313a/' className='text-[#2ED1A5] no-underline font-bold'> Learn More&rarr;</Link>
    </footer>
  )
}

export default Footer