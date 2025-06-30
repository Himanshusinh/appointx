import Image from 'next/image'
import React from 'react'

interface details{
    label: string
    buttonname: string
}

const UploadButton:React.FC<details> = ({
    label,
    buttonname
}) => {
  return (
    <div className='flex flex-col font-poppins'>
        <label>{label}</label>
        <button className='bg-black text-white w-56 h-10 rounded-2xl flex items-center justify-center gap-2'><Image src="/core/icons/Vector.svg" width={20} height={20} alt='upload' /> {buttonname}</button>
    </div>
  )
}

export default UploadButton