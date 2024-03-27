import React from 'react'
import Image from 'next/image'
import curve from '../public/curve.png'
import home_section from '../public/home_section.png'

const Services = () => {
  return (
    <section className='flex w-full items-center py-14 bg-[#032538] h-[200px] lg:h-[500px] relative'>
        <Image
        src={curve}
        alt='curve'
        className='absolute w-full -top-1 lg:-top- z-50'
        />
        <Image
        src={home_section}
        alt='curve'
        className='w-[90%] lg:w-3/4 absolute bottom-0 left-1/2 transform -translate-x-1/2'
        />
    </section>
  )
}

export default Services