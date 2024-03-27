import React from 'react'
import leftSide from '../public/left-side.png';
import rightSide from '../public/right-side.png';
import Image from 'next/image';

const MainContent = () => {
  return (
    <div className='w-full relative flex flex-col items-center py-20 xl:py-40'>

        <p className='border text-[11px] tracking-[0.1px] font-semibold text-[#858585] px-7 py-[5px] rounded-[43px] border-solid border-[#b1aeae] cursor-pointer opensans-font-regular'>Organization</p>
        <h1 className='text-center text-[30px] lg:text-[41px] leading-[40px] lg:leading-[50px] mt-[25px] mb-2.5 pt-0 pb-3 px-0 montserrat-700'><span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Evaluate Candidates</span> Quickly, <br /> Affordably, and Accurately</h1>
        <div className='flex flex-col items-center'>
            <p className='text-center leading-[27px] opacity-70 text-base montserrat-400'>The #1 platform for technical assessments, interviews, and projects.</p>
            <p className='text-center leading-[27px] opacity-70 text-base montserrat-400'>Get unlimited candidates and admins on every plan.</p>
        </div>
        <div className="trial-form">
            <input type="email" placeholder="Work email address" className="mainEmail"></input> <button className="mainTopButton">Start Trial</button>
        </div>


        <Image 
            src={leftSide}
            alt='left side'
            className='leftSideImage z-50'
        />
        <Image 
            src={rightSide}
            alt='right side'
            className='rightSideImage z-50'
        />

    </div>
  )
}

export default MainContent