import React from 'react'
import Image from 'next/image'
import Calender from '../../clientprofilepage/components/Calender'

const Choosedate = () => {
  return (
    <div className='bg-[#A4C9F5] h-[600px] w-[600px] rounded-2xl mt-10 flex-col justify-center items-center'>
        <div className='m-10'>
            <h1 className='font-clash text-6xl text-[#263238]'>Choose Data and Time</h1>
            <ul className='font-poppins list-disc text-[#707070] text-lg ml-6'>
                <li>Interactive Calendar: Select your preferred date and time from the provider’s calendar. 
              </li>
                <li>Real-Time Availability: See available slots in real-time.</li>
            </ul>
        </div>

        <div className="relative w-[320px] h-[360px] mx-auto flex justify-center items-center -mt-5 ">
  {/* Left card (time slots) */}
  <Image
    alt="time options"
    src="/Landingpage/Frame 2610686.png"
    width={300}
    height={100}
    className="absolute top-0 -ml-52 z-0"
  />

  {/* Right card (calendar) */}
    <div className='bg-white rounded-2xl z-20 ml-44'>
    <Calender />
    </div>

  {/* <Image
    alt="calendar"
    src="/Landingpage/Frame 2610695.png"
    width={300}
    height={300}
    className="absolute top-20 left-10 z-10 ml-20"
  /> */}
</div>

    </div>
  )
}

export default Choosedate