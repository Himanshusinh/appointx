import React from 'react'

interface details{
    label : string
    placeholder: string
}

const InputBox:React.FC<details> = ({
    label,
    placeholder
}) => {
  return (
    <div className='flex flex-col font-poppins'>
        <label className='ml-3'>{label}</label>
        <input type="text" placeholder={placeholder} className='bg-[#F7FBFF] border border-[#D4D7E3] w-[500px] h-12 rounded-2xl pl-3 pr-3' />
    </div>
  )
}

export default InputBox