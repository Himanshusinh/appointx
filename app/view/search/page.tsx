'use client';

import React, { useState } from 'react'
import Showcard from './components/Showcard'
import FilterSidebar from './components/FilterSidebar'
import AppointmentOptions from './components/AppointmentOptions';
import Footer from '../core/Footer';
import Navigation from '../core/Navigation';


const Search = () => {

  return (
    <div>
      <Navigation />
      <div className='flex flex-col justify-center items-center'>

      <div className='flex gap-10'>
        <div>
          <FilterSidebar />
        </div>

        <div>
          <div className='flex flex-col gap-10'>
            <Showcard
              imageSrc="/search/Frame 2610763.png"
              name="The Luxe Hair Salon"
              address="203, Lotus Complex, C.G. Road, Ahmedabad"
              specialties={['Haircuts', 'Hair Spa', 'Hair Coloring', 'Bridal Styling']}
              timings="10:00 AM – 8:00 PM"
              rating={4}
              isPopular={true}
            />


            <Showcard
              imageSrc="/search/Frame 2610763.png"
              name="The Luxe Hair Salon"
              address="203, Lotus Complex, C.G. Road, Ahmedabad"
              specialties={['Haircuts', 'Hair Spa', 'Hair Coloring', 'Bridal Styling']}
              timings="10:00 AM – 8:00 PM"
              rating={4}
              isPopular={true}
            />
          </div>
        </div>

      </div>

      <div>
        <AppointmentOptions />
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search