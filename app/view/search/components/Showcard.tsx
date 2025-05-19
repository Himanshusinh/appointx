'use client'
import React from 'react'
import Image from 'next/image'

interface ShowcardProps {
  imageSrc: string
  name: string
  address: string
  specialties: string[]
  timings: string
  rating: number
  isPopular: boolean
}

const Showcard: React.FC<ShowcardProps> = ({
  imageSrc,
  name,
  address,
  specialties,
  timings,
  rating,
  isPopular
}) => {
  return (
    <div className="flex w-full max-w-[800px] bg-white shadow-md rounded-2xl p-4 gap-6">
      {/* Left Image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt="Salon"
          width={450}
          height={300}
          className="object-cover h-full w-[400px]"
        />
      </div>

      {/* Right Details */}
      <div className="flex flex-col justify-between w-full">
        {/* Header */}
        <div className="flex items-center gap-3">
          <h1 className="font-clash font-semibold text-2xl text-[#111]">
            {name}
          </h1>
          {isPopular && (
            <div className="flex items-center gap-2 border border-[#E7E7E8] rounded-full px-3 py-1">
              <Image
                src="/core/icons/icons8-green-dot-48.png"
                alt="Online"
                width={10}
                height={10}
              />
              <span className="text-sm text-gray-700 font-medium">Popular</span>
            </div>
          )}
        </div>

        {/* Address */}
        <p className="text-gray-500 mt-1 text-sm">📍 {address}</p>

        {/* Specialities */}
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-800 mb-2">Specialties:</p>
          <div className="flex flex-wrap gap-2">
          {(specialties || []).map((item, idx) => (
  <span
    key={idx}
    className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full"
  >
    {item}
  </span>
))}

          </div>
        </div>

        {/* Timings */}
        <div className="mt-4">
          <span className="font-semibold text-gray-800">Timings:</span>{' '}
          <span className="text-gray-600">{timings}</span>
        </div>

        {/* Reviews */}
        <div className="mt-2">
          <p className="font-semibold text-gray-800 mb-1">Reviews:</p>
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Image
                  key={i}
                  src={
                    i < rating
                      ? '/core/icons/star-filled.png'
                      : '/core/icons/star-outline.png'
                  }
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-sm">
            Book Now
          </button>
          <button className="border px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
            <Image
              src="/core/icons/bookmark-outline-svgrepo-com.svg"
              alt="Bookmark"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Showcard
