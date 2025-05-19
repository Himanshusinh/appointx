import React from 'react'
import ServicesCard from './components/ServicesCard'
import ReviewsSlot from '../reviews/ReviewsSlot'

const Aboutus = () => {
  return (
    <div className='w-[54vw]  rounded-2xl mt-10  border-2 border-[#E7E7E8]'>

        <div className='p-5'>
        <h1 className='font-clash text-2xl'>Aboutus</h1>
        <p className='font-poppins text-[#3B3B3B] '>The Luxe Hair Salon has been serving clients since 2017 with a commitment <br /> to elegance and excellence. We specialize in unisex haircuts, rejuvenating hair spas, <br /> expert hair coloring, and bridal styling. Our skilled stylists use top-quality products <br /> to deliver personalized, luxurious care in a relaxed environment.</p>
        </div>


        <div>
            <h1 className='font-clash text-2xl pl-5 '>Services</h1>
            <div className=' flex flex-wrap gap-5 pl-5 mt-4'>
                <ServicesCard service='Haircut' price={500} gender='women' image="/bookingpage/services/logo.png" />
                <ServicesCard service='Haircut' price={500} gender='men' image="/bookingpage/services/logo1.png" />
                <ServicesCard service='Threading' price={500} gender='mwn' image="/bookingpage/services/logo3.png" />
                <ServicesCard service='Blow dry' price={500} gender='women' image="/bookingpage/services/logo4.png" />
                <ServicesCard service='Hair color ' price={500} gender='women' image="/bookingpage/services/logo5.png" />
                <ServicesCard service='Hair color' price={500} gender='women' image="/bookingpage/services/logo6.png" />
            </div>
            <button className='ml-10 nt-3'>see more</button>
        </div>


        <ReviewsSlot />
    </div>

  )
}

export default Aboutus