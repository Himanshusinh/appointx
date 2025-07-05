import React from 'react'
import Image from 'next/image'
import VendorInput from '../components/VendorInput'


const SecondPage = () => {
  return (
    <div>
        <div style={{ backgroundImage: "url('/signup/ClientSignup.png')" }} className='bg-cover justify-center flex items-center flex-col gap-30'>
            <div className=''>
                <Image src="/core/logo.png" width="150" height="50" alt='logo' />
            </div>

            <div className='flex flex-col justify-center items-center bg-white border border-[#E7E7E8] w-[1000px] h-[1580px] rounded-4xl gap-20'>
                <div className=' flex flex-col justify-center items-center'>

                    <span className='font-clash text-4xl mt-8 '>Get Started now</span>
                    
                </div>
            <div className='flex flex-col gap-5'>
                <VendorInput label='Organization email' placeholder='Enter your office mail id' /> 
                <VendorInput label='Organization Phone Number' placeholder='Enter your main contact number' /> 
                <VendorInput label='Website' placeholder='Enter website if available' />     
                <VendorInput label='Address line 1' placeholder='Enter your organization address' /> 
                <VendorInput label='Address line 2' placeholder='' /> 
                <VendorInput label='Postal/Zip code ' placeholder='Enter your zip code' /> 
                <VendorInput label='City' placeholder='Enter your city' /> 
                <VendorInput label='State' placeholder='Enter your state' /> 
                <VendorInput label='Country' placeholder='Select your country' /> 
                <VendorInput label='Whatsapp Business Link' placeholder='Enter the link' />
                <VendorInput label='Social Media Link' placeholder='Enter your instagram account link' />
                <VendorInput label='' placeholder='Enter your Facebook account link' />
                <VendorInput label='' placeholder='Enter your Linkedin account link' />
                <VendorInput label='Description' placeholder='Enter your Description of you company' />
                
            </div>

            <div className='bg-[#0058E5] text-white w-[500px] h-12 rounded-2xl flex justify-center items-center'>Next</div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage