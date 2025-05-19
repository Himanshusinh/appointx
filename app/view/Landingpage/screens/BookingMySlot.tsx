'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import React from 'react'

const BookingMySlot = () => {
  const images = [
    '/landingpage/marquee/Frame 3.png',
    '/landingpage/marquee/Frame 4.png',
    '/landingpage/marquee/Frame 5.png',
    '/landingpage/marquee/Frame 6.png',
    '/landingpage/marquee/Frame 34.png',
    '/landingpage/marquee/Frame 35.png',
    '/landingpage/marquee/Frame 2610701.png',
    '/landingpage/marquee/Frame 2610703.png',
    '/landingpage/marquee/Frame 2610704.png',
    '/landingpage/marquee/Frame 2610754.png',
  ]

  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear',
        },
      },
    })
  }, [controls])

  return (
    <div className="bg-[#DCE6F2] py-10 px-4 space-y-10 mt-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-clash text-6xl   ">
          BookMySlot can serve almost any
          <span className="text-[#0058E5]"> Industry segment</span>
        </h1>
        <p className="text-[#3B3B3B] mt-4 text-lg">
          Our appointment booking system is fit for all service-based local businesses,
          multi-location enterprises, franchises, and more.
        </p>
      </div>

      <div className="overflow-hidden w-full py-6">
        <motion.div className="flex w-max gap-10" animate={controls}>
          {[...images, ...images].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`scroll-image-${index}`}
              width={400}
              height={150}
              className="rounded-lg object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BookingMySlot
