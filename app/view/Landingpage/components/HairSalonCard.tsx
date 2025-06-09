'use client'

import React from 'react'
import Image from 'next/image'

const timings = [
  { time: '16:00', color: 'green' },
  { time: '18:00', color: 'yellow' },
  { time: '18:45', color: 'green' },
  { time: '20:00', color: 'green' },
  { time: '21:00', color: 'green' },
]

const HairSalonCard = () => {
  return (
    <div className="w-[350px] bg-[#f7f9fd] rounded-2xl overflow-hidden shadow-sm font-poppins">
      {/* Image */}
      <div className="w-full h-[180px] relative">
        <Image
          src="/Landingpage/Frame 2610643.png" // replace with your image path
          alt="Hair Salon"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-black">Hair Salon</h2>
            <p className="text-sm text-gray-500">123, Anywhere St, Any City</p>
          </div>
          <button className="border border-black rounded-full px-4 py-1 text-sm font-medium hover:bg-black hover:text-white transition">
            Book
          </button>
        </div>

        <p className="mt-4 text-sm font-medium text-gray-600">Available Timings</p>

        {/* Timings */}
        <div className="mt-2 flex flex-wrap gap-2">
          {timings.map((slot, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 border px-3 py-1 rounded-full bg-white text-sm"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  slot.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'
                }`}
              ></span>
              <span>{slot.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HairSalonCard
