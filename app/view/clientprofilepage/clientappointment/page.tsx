import React from 'react'
import AppointmentOptions from '../../search/components/AppointmentOptions'
import AppointmentTable from '../components/AppointmentTable'
import AppointmentTableDetails from '../components/AppointmentTableDetails'
import AppointmentTabs from '../components/AppointmentTabs'
import CompletedAppointments from '../components/CompletedAppointments'
import PendingAppointments  from '../components/PendingAppointments'


const Clientappointment = () => {
  return (
    <div>
         <div className='flex flex-col'>
        <span className='font-poppins text-[#707070]'>Home > Appointments</span>
        <span className='font-clash text-2xl mt-5'>My upcomming Appointments</span>
        </div>

        <div className='mt-10'>
            {/* <span className='text-2xl font-clash mb-10'>My Upcomming Appointment</span> */}
            <AppointmentTable serviceprovider='serviceprovider' service='service' location='location' timing='timing' payment='payment' status='status' data='data'  />
            <AppointmentTableDetails image="/clientprofile/Frame 2610634.png" username='mira Khan' servicetype='haircut' date="20 oct 2025" time="15:32pm" status='schedule' paymenttype="online" />
            <AppointmentTableDetails image="/clientprofile/Frame 2610634.png" username='mira Khan' servicetype='haircut' date="20 oct 2025" time="15:32pm" status='schedule' paymenttype="online" />
        </div>


        <div>
        <AppointmentTabs
      PendingComponent={<PendingAppointments />}
      CompletedComponent={<CompletedAppointments />}
    />
        </div>


    </div>
  )
}

export default Clientappointment