import React from 'react'
import Image from 'next/image'
import VendorInput from '../components/VendorInput'
import UploadButton from '../components/UploadButton'

const ThirdPage = () => {
  return (
    <div>
        <div style={{ backgroundImage: "url('/signup/ClientSignup.png')" }} className='bg-cover justify-center flex items-center flex-col gap-30'>
            <div className=''>
                <Image src="/core/logo.png" width="150" height="50" alt='logo' />
            </div>

            <div className='flex flex-col justify-center items-center bg-white border border-[#E7E7E8] w-[1000px] h-[1200px] rounded-4xl gap-20'>
                <div className=' flex flex-col justify-center items-center'>

                    <span className='font-clash text-4xl mt-8 '>Get Started now</span>
                    
                </div>
            <div className='flex flex-col gap-5'>
                <VendorInput label='Owner full name' placeholder='Enter your Full name' /> 
                <VendorInput label='Owner email' placeholder='Enter your email' /> 
                <VendorInput label='Owners phone number' placeholder='enter your main contact number' /> 
                <UploadButton label='Upload ID Proof' buttonname='Upload documents' />
                <UploadButton label='Upload Photo' buttonname='Upload documents' />    
                <VendorInput label='Manager full name' placeholder='Enter your full name' /> 
                <VendorInput label='Manager email' placeholder='Enter your email' /> 
                <VendorInput label='Manager Phone number' placeholder='Enter your main contact number' /> 
                <VendorInput label='Position' placeholder='Enter Position' /> 
                
                
            </div>
            <div className='flex gap-4'>
            <div className='border w-[200px] h-12 rounded-2xl flex justify-center items-center'>Previous</div>
            <div className='bg-[#0058E5] text-white w-[200px] h-12 rounded-2xl flex justify-center items-center'>Next</div>
            </div>



                
            </div>
        </div>
    </div>
  )
}

export default ThirdPage