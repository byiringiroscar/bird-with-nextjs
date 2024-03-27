import React from 'react'
import leftSide from '../public/left-side.png';
import rightSide from '../public/right-side.png';
import Image from 'next/image';

const MainContent = () => {
  return (
    <div className='w-full relative flex flex-col items-center py-8'>

        <p className='border text-[11px] tracking-[0.1px] font-semibold text-[#858585] px-7 py-[5px] rounded-[43px] border-solid border-[#b1aeae] cursor-pointer'>Organization</p>



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