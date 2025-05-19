import Image from 'next/image'
import React from 'react'

interface Details {
  image: string 
  service: string 
  gender : string 
  price : number
}

const ServicesCard:React.FC<
Details> = ({
  image="/bookingpage/services/logo.png",
  service,
  gender,
  price=20
}) => {
  return (
    <div className='flex border-[#E7E7E8] border-2 w-90 rounded-2xl justify-around items-center pl-4 pr-4 pt-2 pb-2'>
        <div>
          <Image src={image} width="50" height="50" alt="image" />
        </div>
        <div className='flex flex-col'>
          <a>{service}</a>
          <a>{gender} <span>{price}$</span></a>
        </div>
        <div className=''>
          <button className='border-[#E7E7E8] border-2 rounded-2xl pl-4 pr-4'>Book</button>
        </div>
    </div>
  )
}

export default ServicesCard