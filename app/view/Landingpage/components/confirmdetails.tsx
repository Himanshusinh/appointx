import React from 'react'
import Image from 'next/image'

const ConfirmDetails = () => {
  return (
    <div className='bg-[#5B92E4] h-[400px] w-[800px] rounded-2xl flex flex-col justify-center items-center'>
        <div>
            <h1 className='font-clash text-6xl text-[#ffffff]'>Confirm Details</h1>
            <ul className='font-poppins list-disc text-[#D5EAFF] text-lg ml-6'> 
                <li>
                Review Selection: Double-check your chosen service, provider, date, and time. 
                </li>
                <li>Add Notes: Include any special requests or notes for the provider.</li>
            </ul>
        </div>

        <div className='flex gap-7'>
            <Image alt='image' src="/landingpage/Frame 2610696.png" width="200" height="100"></Image>
            <Image alt='image' src="/landingpage/Frame 2610697.png" width="150" height="50"></Image>
            <Image alt='image' src="/landingpage/Frame 2610698.png" width="150" height="100"></Image>
        </div>
    </div> 
  )
}

export default ConfirmDetails