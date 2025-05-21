import Image from 'next/image'
import React from 'react'


interface details{
    serviceprovider: string 
    service : string 
    location : string 
    data : string 
    timing : string 
    payment : string
    status : string 
}

const AppointmentTable: React.FC<details> = ({
    serviceprovider,
    service,
    location,
    data,
    timing,
    payment,
    status
}) => {
  return (
    <div className=''>
        <div>
        <div className='flex bg-[#D9EAFF] h-18  rounded-t-lg items-center font-poppins '>
            <span className='ml-14'>{serviceprovider}</span>
            <span className='ml-20'>{service}</span>
            <span className='ml-20'>{location}</span>
            <span className='ml-22'>{data}</span> 
            <span className='ml-24'>{timing}</span>
            <span className='ml-18'> {payment}</span>
            <span className='ml-24'>{status}</span>
        </div>
        </div>

       
    </div>
  )
}

export default AppointmentTable