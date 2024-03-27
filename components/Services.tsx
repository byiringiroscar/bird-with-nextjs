import React from 'react'
import Image from 'next/image'
import curve from '../public/curve.png'
import home_section from '../public/home_section.png'

const Services = () => {
  return (
    <section className='flex w-full items-center justify-center pt-12 bg-[#032538]'>
        <Image
        src={home_section}
        alt='curve'
        className='w-[90%] lg:w-3/4'
        />
    </section>
  )
}

export default Services