'use client'
import React from 'react'

const leftOptions = [
  'Spa Services',
  'Tutoring Services',
  'Retail Consultations',
  'Gym & Fitness',
  'Medical Appointments',
  'Pet Services',
  'Home Services',
  'Legal Consultations',
  'Financial Advisors',
]

const rightOptions = [
  'Career Counselling',
  'Photography Sessions',
  'Event Planning Services',
  'Pet Care Guidance',
  'Therapy & Support',
  'Makeup Artists',
  'Electrician',
  'Real Estate Agents',
  'Astrology & Tarot Reading',
]

const AppointmentOptions = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 p-6 mt-10">
      <h2 className="text-blue-600 font-semibold text-lg mb-6">
        Explore 100+ Appointment Options on AppointX
      </h2>
      <div className="grid grid-cols-2 gap-x-8 text-gray-700 text-sm">
        <ul className="list-disc list-inside space-y-2">
          {leftOptions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <ul className="list-disc list-inside space-y-2">
          {rightOptions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AppointmentOptions
