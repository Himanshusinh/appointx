import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex flex-col '>
        <div className=''>
        <h1 className='font-clash text-4xl flex items-start'>The Luxe Hair salon</h1>
        </div>

        <div className='text-[#707070] mb-7'>
            <a>4.6 Starts</a>
            <a>open until 8:00pm </a>
            <a>Lotus complex C.G. Road </a>
            <a href="">Get Details</a>
        </div>


        <div>
            <Image alt="image" src="/bookingpage/Image.png" width="1000" height="500" />
        </div>
        
    </div>
  )
}

export default Header