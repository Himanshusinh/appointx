'use client'
import React from 'react'
import Image from 'next/image'

const SelectTypeofsignup = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-10 flex flex-col justify-center items-center font-clash "
      style={{ backgroundImage: "url('/signup/SignupSelection.png')" }}
    >

      <div>
        <Image src="/core/logo.png" width="150" height="100" alt='image' className='mb-20'></Image>
        </div>
      <div>
        <h1 className="text-4xl font-bold mb-2 flex justify-center ">Hey there</h1>
        <p className="text-2xl">Looking to <span className='text-[#0058E5]'>book</span> an appointment or <span className='text-[#0058E5]'>grow</span>  your business?</p>
        <p className="text- flex justify-center text-[#3B3B3B] italic">Book service or register your business in just a few clicks.</p>
      </div>

      <div className="mt-10 flex gap-10 ">
        <div className="mb-6 flex flex-col justify-center items-center w-[500px] h-[300px] bg-white border-2 border-[#E7E7E8] rounded-2xl cursor-pointer ">
          <h2 className="text-3xl font-semibold">Client</h2>
          <p>Book appointments at your fingertips</p>
        </div>

        <div className='flex flex-col justify-center items-center w-[500px] h-[300px] bg-white border-2 border-[#E7E7E8] rounded-2xl cursor-pointer'>
          <h2 className="text-3xl font-semibold">Vendor</h2>
          <p>Offer your service and get discovered <br /> by thousands</p>
        </div>
      </div>
    </div>
  )
}

export default SelectTypeofsignup
