'use client'

import React, { useState } from 'react'
import {
  Home,
  CalendarDays,
  Bookmark,
  HelpCircle,
  Settings,
  LogOut,
} from 'lucide-react'

// Import actual components
import ClientDashboard from '../dashboard/page'
import Clientappointment from '../clientappointment/page'
import ClientSaved from '../clientsaved/page'
import ClientFAQ from '../clientFAQ/page'
import ClientSetting from '../clientsetting/page'



const SidebarLayout = () => {
  const menuItems = [
    { name: 'DashBoard', icon: <Home size={20} />, component: ClientDashboard },
    { name: 'Appoitments', icon: <CalendarDays size={20} />, component: Clientappointment },
    { name: 'Saved', icon: <Bookmark size={20} />, component: ClientSaved },
    { name: 'FAQs', icon: <HelpCircle size={20} />, component: ClientFAQ },
    { name: 'Settings', icon: <Settings size={20} />, component: ClientSetting },
  ]

  const [activePage, setActivePage] = useState(menuItems[0].name)

  const ActiveComponent = menuItems.find(item => item.name === activePage)?.component

  return (
    <div className="flex h-[85vh]">
      {/* Sidebar */}
      <div className="w-[250px] bg-[#ffffff] py-6 px-4 flex flex-col justify-between font-sans border-r border-gray-200">
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`flex items-center space-x-3 cursor-pointer ${
                activePage === item.name
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div
          className="flex items-center space-x-3 text-gray-600 hover:text-black cursor-pointer"
          onClick={() => console.log('Logout')}
        >
          <LogOut size={20} className='' />
          <span className=''>Logout</span>
        </div>
      </div>

      {/* Main content: only show active component */}
      <div className="flex-1 bg-white p-6">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  )
}

export default SidebarLayout
