import React from 'react'
import Button from '../../ui/Button'
import Image from 'next/image';
import InvoiceTable from '../components/InvoiceTable';



const HeadingScreen = () => {
  return (
    <div>
      <div className='flex'>
        {/* left  */}
        <div className='m-10 flex flex-col'>
          <div>
            <h1 className='font-clash text-5xl'>Discover,Click, Done <br /> Your <span className='text-[#0058E5]'>Appointment</span>  Awaits!</h1>
            <p className='font-poppins'>Book appointments with ease and efficiency on our user-friendly platform. <br /> Whether you need a doctor's visit, a spa session, or a business meeting, our <br /> streamlined booking system ensures a hassle-free experience. Stay organized and <br /> never miss an appointment again!</p>
          </div>

          <div className='flex gap-10 '>
            <Button text="Make appoitment" textColor='#fff' className='w-56 mt-10' bgColor='black' />
            <Button text="Serve Service" textColor='#000' bgColor='#fff' className='border-2 border-black mt-10' />
          </div>

        </div>

        {/* right */}
        <div className='flex flex-col'>
          <div className='flex'>
            <Image alt="image" width={300} height={10} className='z-10' src="/landingpage/dancinggirl.png" />
            <Image alt="image" width={200} height={40} className='ml-54 z-10' src="/landingpage/Frame 2610642.png" />
          </div>


          <div className="relative ">
            {/* Bottom Image (Blob) */}
            <Image
              alt="blob background"
              width={500}
              height={100}
              src="/landingpage/Blob.png"
              className="absolute top-0 left-0 z-0 -mt-32 ml-32"
            />

            {/* Top Image (Businesswoman) */}
            <Image
              alt="businesswoman"
              width={600}
              height={100}
              src="/landingpage/charming-businesswoman-glasses-striped-shirt-working-with-laptop-computer-while-siting-home 1.png"
              className="absolute top-0 left-0 z-10 ml-32 -mt-32"
            />
          </div>


          <div className='mt-54 z-30'>
            <Image alt="image" width={300} height={60} className='ml-64 mt-10' src="/landingpage/Frame 2610652.png" />
          </div>
        </div>



        {/* bottom */}
        
      </div>
      <div className='-mt-64 mr-[500px] z-50'>
          {/* <Image alt='image' width={600} height={200} src="/landingpage/Frame 2610641.png" /> */}
          <InvoiceTable /> 
        </div>
    </div>
  )
}

export default HeadingScreen