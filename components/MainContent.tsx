import React from 'react'
import leftSide from '../public/left-side.png';
import rightSide from '../public/right-side.png';
import Image from 'next/image';

const MainContent = () => {
  return (
    <div className='w-full relative'>
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