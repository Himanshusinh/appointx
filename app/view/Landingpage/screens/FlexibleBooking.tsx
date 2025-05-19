import React from 'react'
import FeaturesCard from '../components/Featurescard'

const FlexibleBooking = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-6xl font-clash pl-60 pr-60 pt-40 pb-20'> <span>Flexible Booking</span> Setting allow you have to complete control over you schedule</h1>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-24'>
            <FeaturesCard src="/landingpage/image 8.svg" text="Your time matters. Connect with reputable and verified providers for a hassle-free appointment experience. Our platform offers unmatched flexibility and convenience." />
            <FeaturesCard src="/landingpage/Frame 2610725.svg" text="Effortlessly book appointments with top-rated, legal service providers. Our platform ensures timely and reliable scheduling with the flexibility you need." />
            <FeaturesCard src="/landingpage/image 8.svg" text="Your time matters. Connect with reputable and verified providers for a hassle-free appointment experience. Our platform offers unmatched flexibility and convenience." /> 
            <FeaturesCard src="/landingpage/image 9.svg" text="Connect with the best and most trusted service providers. Our user-friendly platform offers on-time bookings and flexible scheduling to fit your lifestyle." />
            <FeaturesCard src="/landingpage/Frame 2610725.svg" text="Effortlessly book appointments with top-rated, legal service providers. Our platform ensures timely and reliable scheduling with the flexibility you need." />
            
        </div>
    </div>
  )
}

export default FlexibleBooking