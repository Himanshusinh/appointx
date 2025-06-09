import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#1C3B69] text-white flex flex-col justify-center items-center font-poppins mt-20 ' >

            <div className='-mt-8 bg-white text-black font-clash text-2xl  p-4 rounded-2xl border border-[#DCE6F2]'>
                <p className=''>Its very easy to make an appointment now <button className='font-poppins text-lg border-2 rounded-4xl p-2 ml-8 hover:bg-black hover:text-white'>Make appointment</button></p>
            </div>

            <div className='flex mt-24'>
                <div>
                    <h1 className='text-3xl font-bold mb-3'>AppointX</h1>
                    <p>Effortlessly book doctor visits, spa <br /> sessions, or business meetings on our <br /> user-friendly platform. Stay organized <br /> and never miss an appointment with <br /> our streamlined booking system!</p>
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-20'>

                        <div className='ml-60'>
                            <h1 className='text-2xl'>Usefull Links</h1>
                            <ul className='flex flex-col gap-2 mt-2'>
                                <a href='#'>Home</a>
                                <a href='#'>Services
                                </a>
                                <a href='#'>Blog</a>
                                <a href='#'>About</a>
                            </ul>
                        </div>

                        <div>
                            <h1 className='text-2xl mb-3'>Contact</h1>
                            <a href='#'>appointx@gmail.com</a>
                        </div>

                    </div>

                </div>




            </div>

            <div className='mt-20 mb-5'>@2024 All rights Reserved</div>


        </div>
    )
}

export default Footer