import React from 'react'
import Header from './Header/header'
import Navigation from '../core/Navigation'
import Aboutus from './aboutus/Aboutus'
import SlotBooking from './Selectslot/SlotBooking'
import Footer from '../core/Footer'




const Bookingpage = () => {
  return (
    <div  >
      <div>
        <Navigation />
      </div>
      <div className='pl-56 pr-56'>
        <Header />
      </div>

      <div>
      <div className='flex gap-5 justify-center '>
          <Aboutus />
          <SlotBooking />
        </div>
      </div>
        
      <Footer />


      

    </div>
  )
}

export default Bookingpage