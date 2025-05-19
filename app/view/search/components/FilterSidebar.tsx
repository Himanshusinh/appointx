'use client'
import React, { useState } from 'react'

const FilterSidebar = () => {
  const [price, setPrice] = useState(300)

  return (
    <div className="w-[280px] p-4 bg-white rounded-2xl border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg text-black">All Filters</h2>
        <button className="text-blue-600 text-sm font-medium">Applied(1)</button>
      </div>

      {/* Services Input */}
      <div className="mb-4">
        <label className="text-sm font-semibold text-black block mb-2">Services</label>
        <input
          type="text"
          placeholder="e.g. Gym, Salon etc"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400"
        />
      </div>

      {/* Location Input */}
      <div className="mb-4">
        <label className="text-sm font-semibold text-black block mb-2">Location</label>
        <input
          type="text"
          placeholder="e.g. Ahmedabad"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400"
        />
      </div>

      {/* Gender Checkboxes */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-black mb-2">Gender</p>
        {['Male', 'Female', 'Unisex'].map((option, i) => (
          <label key={i} className="block text-sm text-black mb-1">
            <input type="checkbox" className="mr-2" /> {option}
          </label>
        ))}
      </div>

      {/* Appointment Slots */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-black mb-2">Appointment slots</p>
        {['Morning', 'Afternoon', 'Evening'].map((slot, i) => (
          <label key={i} className="block text-sm text-black mb-1">
            <input type="checkbox" className="mr-2" /> {slot}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-2">
        <p className="text-sm font-semibold text-black mb-2">Price range</p>
        <input
          type="range"
          min={100}
          max={1000}
          step={50}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          {[100, 300, 400, 500, 800, 1000].map((val, idx) => (
            <span key={idx} className={val === price ? 'text-black font-medium' : ''}>
              {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
