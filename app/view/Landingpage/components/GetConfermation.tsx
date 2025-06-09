import React from 'react'

const GetConfermation = () => {
  return (
    <div className='bg-[#3F454F] h-[400px] w-[400px] rounded-2xl flex flex-col justify-center items-center p-8'>  
        <h1 className='font-clash text-5xl text-[#ffffff] '>Get Confirmation</h1>
        <ul className='font-poppins list-disc text-[#D9D9D9] text-lg ml-6'>
            <li>Instant Confirmation: Receive an email or SMS confirmation of your booking. </li>
            <li>Add to Calendar: Option to add the appointment to your personal calendar.</li>
        </ul>
    </div>
  )
}

export default GetConfermation