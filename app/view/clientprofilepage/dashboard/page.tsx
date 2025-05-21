import React from 'react'
import DashBoardHeader from './DashBoardHeader'
import Calender from '../components/Calender'
import AppointmentTable from '../components/AppointmentTable'
import AppointmentTableDetails from '../components/AppointmentTableDetails'



const ClientDashboard = () => {
  return (
    <div>

        <div className='flex'>
        <DashBoardHeader />
        <Calender />
        </div>

        <div className='mt-14'>
            
            <AppointmentTable serviceprovider='serviceprovider' service='service' location='location' timing='timing' payment='payment' status='status' data='data'  />
            <AppointmentTableDetails image="/clientprofile/Frame 2610634.png" username='mira Khan' servicetype='haircut' date="20 oct 2025" time="15:32pm" status='schedule' paymenttype="online" />
        </div>

    </div>
  )
}

export default ClientDashboard