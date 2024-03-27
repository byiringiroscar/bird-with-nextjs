import React from 'react'
import leftSide from '../public/left-side.png';
import rightSide from '../public/right-side.png';
import Image from 'next/image';

const MainContent = () => {
  return (
    <div className='w-full relative flex flex-col items-center py-8'>

        <p className='border text-[11px] tracking-[0.1px] font-semibold text-[#858585] px-7 py-[5px] rounded-[43px] border-solid border-[#b1aeae] cursor-pointer opensans-font-regular'>Organization</p>
        <h1 className='text-center text-[41px] leading-[50px] mt-[25px] mb-2.5 pt-0 pb-3 px-0 montserrat-700'><span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Evaluate Candidates</span> Quickly, <br /> Affordably, and Accurately</h1>



        <Image 
            src={leftSide}
            alt='left side'
            className='leftSideImage'
        />
        <Image 
            src={rightSide}
            alt='right side'
            className='rightSideImage'
        />

    </div>
  )
}

export default MainContent