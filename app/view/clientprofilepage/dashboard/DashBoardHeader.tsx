import React from 'react'

const DashBoardHeader = () => {
  return (
    <div>
        <div className='flex flex-col'>
        <span className='font-poppins text-[#707070]'>Home > Dashboard</span>
        <span className='font-clash text-2xl mt-5'>Welcome Back, Himanshu </span>
            
        </div>


        <div className='flex font-poppins gap-10 mt-10'>
            <div className='rounded-2xl w-80 h-44 bg-[#A4C9F5] flex flex-col '>
                <span className='text-lg p-5'>Pending Appointments</span>
                <span className='text-6xl pl-5 font-clash'>2</span>
            </div>
            <div className='rounded-2xl w-80 h-44 bg-[#FFE3BA] flex flex-col '>
                <span className='text-lg p-5'>total Appointments</span>
                <span className='text-6xl pl-5 font-clash'>10</span>
            </div>
        </div>
    </div>
  )
}

export default DashBoardHeader