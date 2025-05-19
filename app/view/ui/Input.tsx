import Image from 'next/image'
import React from 'react'

const Input = () => {
  return (
<div className="flex justify-center items-center m-10">
  <div className="relative w-96">
    <Image 
      src="/core/icons/icons.png" 
      width={20} 
      height={20} 
      alt="search svg" 
      className="absolute left-4 top-1/2 transform -translate-y-1/2" 
    />
    <input 
      type="text" 
      placeholder="Search..." 
      className="w-full pl-12 pr-4 py-2 rounded-full border-2 border-gray-400"
    />
  </div>
</div>

  )
}

export default Input