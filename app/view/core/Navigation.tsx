'use client';

import React from 'react'
import Image from 'next/image'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'



const Navigation = () => {
  const router = useRouter();

  const handlerouter = () => {
    router.push("/view/SelectTypeofsignup");
  }

  return (
    <div className='flex justify-between bg-primary'>
        <div>
          <Image src={'/core/logo.png'} width={136} height={50} alt='Appointx logo' className='m-10' />
          </div>
        <div className=''>
          <Input />
        </div>

        <div>
          <Button text="signup" textColor='white' className='m-10 cursor-pointer' onClick={handlerouter}  />
        </div>
    </div>
  )
}

export default Navigation