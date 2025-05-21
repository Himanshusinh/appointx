import React from 'react'
import Showcard from '../../search/components/Showcard'

const ClientSaved = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className='flex flex-col'>
        <span className='font-poppins text-[#707070]'>Home > Saved</span>
        <span className='font-clash text-2xl mt-5'>My Saved Services</span>
        </div>

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
  )
}

export default ClientSaved