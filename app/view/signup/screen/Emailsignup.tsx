import Image from 'next/image'
import React from 'react'
import OTPVerification from '../components/Otp'

const Emailsignup = () => {
    return (
        <div style={{ backgroundImage: "url('/signup/ClientSignup.png')" }} className='bg-cover h-[100vh] justify-center flex items-center flex-col gap-30'>
            <div className='-mt-20'>
                <Image src="/core/logo.png" width="150" height="50" alt='logo' />
            </div>

            <div className='flex flex-col justify-center items-center bg-white border border-[#E7E7E8] w-[1000px] h-[500px] rounded-4xl gap-20'>
                <div className=' flex flex-col justify-center items-center'>

                    <span className='font-clash text-4xl'>Get Started now</span>
                    <span className='font-poppins text-[#3B3B3B]'>Create your own account !</span>
                </div>

                <div className='flex gap-20'>
                    <div>
                        <div className='flex flex-col -mt-10'>
                            <label>Email</label>
                            <input type="text" className='bg-[#F7FBFF] border border-[#D4D7E3] rounded-2xl w-80 h-10 pl-3 pr-3' placeholder='Example@email.com' />
                        </div>
                        <OTPVerification />

                        <div><button className='bg-[#0058E5] text-white w-80 h-10 rounded-full mt-5 cursor-pointer'>send otp</button></div>
                    </div>

                    <div className='flex flex-col  items-center'>
                        
                        <Image src="/signup/Line 37.png" width="1" height="10" alt='image' /> 
                        <span className='font-poppins text-[#A7A7A7]'>or</span>
                        <Image src="/signup/Line 37.png" width="1" height="10" alt='image' /> 
                    </div>

                    <div className='flex flex-col gap-7'>
                        <div><button className='border border-[#D4D7E3] w-64 h-10 rounded-full flex justify-center items-center gap-3 cursor-pointer'> <Image src="/core/icons/google.svg" width="20" height="10" alt='google'  />Sign in with google</button></div>
                        <div><button className='border border-[#D4D7E3] w-64 h-10 rounded-full flex justify-center items-center gap-3 cursor-pointer' > <Image src="/core/icons/apple.svg" width="20" height="10" alt='google'  />Sign in with apple</button></div>
                        <div><button className='border border-[#D4D7E3] w-64 h-10 rounded-full flex justify-center items-center gap-3 cursor-pointer'> <Image src="/core/icons/microsoft.svg" width="20" height="10" alt='google'  />Sign in with microsoft</button></div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Emailsignup