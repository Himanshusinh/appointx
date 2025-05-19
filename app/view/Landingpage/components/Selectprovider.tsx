import React from 'react'

import Image from 'next/image'

const Selectprovider = () => {
  return (
    <div className='bg-[#DCE6F2] w-[600px] h-[600px] rounded-2xl flex items-center justify-center mt-10'>
        <div>
            <h1 className='font-clash text-6xl text-[#263238] '>Select your <br /> service provider</h1>
            <ul className='font-poppins list-disc text-[#707070] text-lg ml-6'>
                <li>View profile: Check out profile and reviews of service providers.</li>
                <li>Compare options : Compare rating , prices, and availability.</li>
            </ul>
            
            <div>
        <Image width="500" height="300" alt='image' src="/Landingpage/Frame 2610684.svg" className='ml-10 mt-10' ></Image>
    </div>
        </div>


    </div>
  )
}

export default Selectprovider