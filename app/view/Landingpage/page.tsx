import React from 'react'
import Navigation from '../core/Navigation'
import HeadingScreen from './screens/headingScreen'
import Stepsofbooking from './screens/Stepsofbooking'
import BookingMySlot from './screens/BookingMySlot'
import FlexibleBooking from './screens/FlexibleBooking'
import Footer from '../core/Footer'

const Landingpage = () => {
  return (
    <div>
        <Navigation />
        <HeadingScreen />
        <Stepsofbooking />
        <BookingMySlot />
        <FlexibleBooking />
        <Footer />
    </div>
  )
}

export default Landingpage