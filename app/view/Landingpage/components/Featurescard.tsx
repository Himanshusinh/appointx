'use client'
import React from 'react'
import Image from 'next/image'

interface Cards {
  src: string
  text: string
}

const FeaturesCard: React.FC<Cards> = ({ src, text }) => {
  const mid = Math.floor(text.length / 1.5)
  const part1 = text.slice(0, mid)
  const part2 = text.slice(mid)

  return (
    <div className="w-[300px] text-center flex flex-col justify-center items-center group transition-all duration-300">
      {/* Slide-up effect container */}
      <div className="transition-transform duration-500 group-hover:-translate-y-2 flex flex-col justify-center items-center ">
        {/* Icon */}
        <div>
          <Image src={src} alt="image" width={100} height={100} />
        </div>

        {/* Text */}
        <div className="mt-2 text-base font-poppins text-[#3B3B3B] leading-relaxed">
          <span>{part1}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {part2}
          </span>
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard
