import React from 'react'
import Image from 'next/image'
import curve from '../public/curve.png'
import home_section from '../public/home_section.png'

const Services = () => {
  return (
    <section className='bottom-section'>
        <Image
        src={curve}
        alt='curve'
        className='mainTopCurve'
        />
        <Image
        src={home_section}
        alt='curve'
        className='mainPlatformImage'
        />




    </section>
  )
}

export default Services