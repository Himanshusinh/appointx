import React from 'react'
import SidebarLayout from './components/Sidebar'
import Navigation from '../core/Navigation'

const ClientProfile = () => {
  return (
    <div>
        <div>
            <Navigation />
        </div>
        <div>
        <SidebarLayout />
        </div>
      
    </div>
  )
}

export default ClientProfile