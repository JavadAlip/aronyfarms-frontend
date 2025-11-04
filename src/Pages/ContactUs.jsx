import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'
import ContactUss from '../Components/ContactUs/ContactMain'
import GetInTouch from '../Components/ContactUs/GetInTouch'
import Approch from '../Components/ContactUs/ContactApproach'
import WorkTogether from '../Components/HomeMain/WorkTogether'

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <ContactUss />
      <GetInTouch />
      <Approch />
      <WorkTogether />
      <Footer />
    </div>
  )
}

export default ContactUs