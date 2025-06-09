'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Card data
const cards = [
    {
      title: 'Hair Stylist',
      address: '123, Anywhere St, Any City',
      price: 30,
      image: '/landingpage/Ellipse 10.png',
      bgColor: '#283138',
    },
    {
      title: 'Yoga Session',
      address: '123, Anywhere St, Any City',
      price: 80,
      image: '/landingpage/Ellipse 11.png',
      bgColor: '#302A9B',
    },
    {
      title: 'Nail Studio',
      address: '123, Anywhere St, Any City',
      price: 10,
      image: '/landingpage/Ellipse 12.png',
      bgColor: '#E5EAF2',
    },
  ]
  

// Stack styling with gap between cards
const stackStyles = [
  { top: '0px', scale: 1, opacity: 1, zIndex: 30 },
  { top: '40px', scale: 0.95, opacity: 0.7, zIndex: 20 },
  { top: '80px', scale: 0.9, opacity: 0.5, zIndex: 10 },
]

export default function RotatingStack() {
  const [order, setOrder] = useState(cards)

  // Rotate the order every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(prev => {
        const newOrder = [...prev]
        const first = newOrder.shift()
        if (first) newOrder.push(first)
        return newOrder
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[320px] w-[360px] mx-auto mt-10">
      {order.map((card, index) => {
        const { top, scale, opacity, zIndex } = stackStyles[index] || {}

        return (
          <motion.div
            key={card.title}
            animate={{ top, scale, opacity, zIndex }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute left-0 right-0 mx-auto w-full mt-16"
          >
            <div className={`rounded-2xl px-4 py-3 flex items-center w-[450px] h-[120px] justify-between shadow-md text-white ${card.bgColor}`}>
  <div className="flex items-center gap-3">
    <Image
      src={card.image}
      alt={card.title}
      width={50}
      height={50}
      className="rounded-full object-cover"
    />
    <div>
      <h4 className="font-bold text-teal-300">{card.title}</h4>
      <p className="text-sm text-gray-300">{card.address}</p>
    </div>
  </div>
  <div>
    <p className="text-lg font-bold text-teal-400">${card.price}</p>
  </div>
</div>

          </motion.div>
        )
      })}
    </div>
  )
}
