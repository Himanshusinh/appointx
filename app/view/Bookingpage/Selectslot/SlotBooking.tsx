import React from 'react'
import Title from './Title'
import Calendar from './CollapsibleCalendar'
import CollapsibleCalendar from './CollapsibleCalendar'
import TimeSlotSelector from './TimeSlotSelector'


const SlotBooking = () => {
  return (
    <div className='border-2 border-[#E7E7E8] rounded-2xl mt-10 h-[800px] '>
      <Title />
      <CollapsibleCalendar />
      <TimeSlotSelector />
    </div>
  )
}

export default SlotBooking