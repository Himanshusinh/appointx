import Image from 'next/image'
import React from 'react'
import OTPVerification from '../components/Otp'
import Input from '../../ui/Input'
import InputBox from '../components/InputBox'

const Emailsignup = () => {
    return (
        <div style={{ backgroundImage: "url('/signup/ClientSignup.png')" }} className='bg-cover justify-center flex items-center flex-col gap-30'>
            <div className=''>
                <Image src="/core/logo.png" width="150" height="50" alt='logo' />
            </div>

            <div className='flex flex-col justify-center items-center bg-white border border-[#E7E7E8] w-[1000px] h-[1100px] rounded-4xl gap-20'>
                <div className=' flex flex-col justify-center items-center'>

                    <span className='font-clash text-4xl'>Get Started now</span>
                    <span className='font-poppins text-[#3B3B3B]'>Create your own account !</span>
                </div>

                <div className='flex gap-4 flex-col'>
                   <InputBox placeholder='name' label='name' />
                   <InputBox placeholder='+91 00000000' label='Phone number' />
                   <button className='text-[#0058E5] flex justify-end cursor-pointer'>send otp</button>
                   <OTPVerification />
                   <InputBox placeholder='enter you address' label='Address' />
                   <InputBox placeholder='city' label='city' />
                   <InputBox placeholder='state' label='State' />
                   <InputBox placeholder='country' label='country' />
                    <button className='w-[500px] h-12 bg-[#0058E5] text-white rounded-full mt-5'>Create account</button>
                </div>
            </div>
        </div>
    )
}

export default Emailsignup