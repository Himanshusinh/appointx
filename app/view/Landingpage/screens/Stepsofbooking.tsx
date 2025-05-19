import React from 'react'
import Findservice from '../components/Findservice'
import Selectprovider from '../components/Selectprovider'
import Choosedate from '../components/Choosedate'
import ConfirmDetails from '../components/confirmdetails'
import GetConfermation from '../components/GetConfermation'

const Stepsofbooking = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

        <div>
        <h1 className='font-clash text-6xl m-20 flex justify-center '><span className='text-[#0058E5]'>Easy Setps</span> for booking online <br /> appointment</h1>
        </div>


        <div className='flex justify-center flex-col'>
            <Findservice />

            <div className='flex gap-7'> 
            <Selectprovider />
            <Choosedate />
            </div>

            <div className='flex gap-7 mt-10'>
                <ConfirmDetails />
                <GetConfermation />
            </div>
           
        </div>
            
        
    </div>
  )
}

export default Stepsofbooking