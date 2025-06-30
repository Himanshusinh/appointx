import React from 'react'
import Image from 'next/image'
import VendorInput from '../components/VendorInput'
import UploadButton from '../components/UploadButton'

const FirstPage = () => {
  return (
    <div>
        <div style={{ backgroundImage: "url('/signup/ClientSignup.png')" }} className='bg-cover justify-center flex items-center flex-col gap-30'>
            <div className=''>
                <Image src="/core/logo.png" width="150" height="50" alt='logo' />
            </div>

            <div className='flex flex-col justify-center items-center bg-white border border-[#E7E7E8] w-[1000px] h-[850px] rounded-4xl gap-20'>
                <div className=' flex flex-col justify-center items-center'>

                    <span className='font-clash text-4xl mt-8 '>Get Started now</span>
                    
                </div>
            <div className='flex flex-col gap-5'>
                <VendorInput label='Organization Name' placeholder='Enter your Organization Name' /> 
                <VendorInput label='Legal Business Name' placeholder='Enter your Legal Business Name if different from organization name' /> 
                <VendorInput label='Type of orgainzation' placeholder='enter your type of organization(salon , clinic , Fitness center , etc)' />     
                <VendorInput label='Business Registration Name' placeholder='Enter goverment registration id(Eg:GST , PAN , etc)' /> 
                <UploadButton label='Upload Certificate' buttonname='Upload documents' />
                <VendorInput label='Description' placeholder='Enter your Description of you company' />
                
            </div>

            <div className='bg-[#0058E5] text-white w-[500px] h-12 rounded-2xl flex justify-center items-center'>Next</div>

                
            </div>
        </div>
    </div>
  )
}

export default FirstPage