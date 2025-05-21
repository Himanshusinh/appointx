'use client'

import Image from 'next/image'
import { CreditCard, Bell, KeyRound, Bookmark, LogOut, HelpCircle } from 'lucide-react'
import React from 'react'

const Profile = () => {
  return (
    <div className="w-[380px] bg-white h-full font-poppins p-4">
      {/* Profile Header */}
      <div className="flex items-center pt-6 pb-4">
        <Image src="/profile/image.png" alt="image" width={60} height={60} className="rounded-full" />
        <div className="ml-4">
          <p className="text-lg font-semibold text-black">Vriddhi Shah</p>
          <p className="text-blue-600 text-sm font-medium cursor-pointer">View & Update Profile</p>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Appointment Section */}
      <div>
        <h2 className="text-lg font-semibold text-black mb-3">Your appointment</h2>

        <div className="flex bg-[#EAF2FF] rounded-xl py-4 px-6 justify-between">
          {/* Pending */}
          <div className="text-center w-1/2 border-r border-gray-300">
            <p className="text-3xl font-bold text-black">2</p>
            <p className="text-sm text-black">Pending Appointment</p>
            <p className="text-sm text-blue-600 font-medium cursor-pointer mt-1">View all</p>
          </div>
          {/* Total */}
          <div className="text-center w-1/2 pl-4">
            <p className="text-3xl font-bold text-black mt-1">10</p>
            <p className="text-sm text-black">Total Appointment</p>
            <p className="text-sm text-blue-600 font-medium cursor-pointer mt-5 ">View all</p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="mt-6">
        <h3 className="text-gray-500 text-sm font-semibold mb-4">Account settings</h3>

        <div className="flex flex-col space-y-4 pl-1">
          <div className="flex items-center space-x-3">
            <KeyRound size={18} />
            <span className="text-sm font-medium text-black">Change password</span>
          </div>
          <div className="flex items-center space-x-3">
            <Bell size={18} />
            <span className="text-sm font-medium text-black">Notifications</span>
          </div>
          <div className="flex items-center space-x-3">
            <Bookmark size={18} />
            <span className="text-sm font-medium text-black">Saved</span>
          </div>
        </div>
      </div>

      <hr className="my-5 border-gray-200" />

      {/* FAQs and Logout */}
      <div className="flex flex-col space-y-5 pl-1">
        <div className="flex items-center space-x-3">
          <HelpCircle size={18} />
          <span className="text-sm font-medium text-black">FAQs</span>
        </div>
        <div className="flex items-center space-x-3">
          <LogOut size={18} />
          <span className="text-sm font-medium text-black">Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
