import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <div>
            <Image src="/profile/image.png" alt='image' width="20" height="20" />
        </div>
    </div>
  )
}

export default page