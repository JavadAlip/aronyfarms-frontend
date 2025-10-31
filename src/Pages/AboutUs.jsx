import React from 'react'
import Navbar from '../Components/AboutUs/Navbar'
import AboutMain from '../Components/AboutUs/AboutMain'
import AboutMain1 from '../Components/AboutUs/AboutMain1'
import WhyChooseUs from '../Components/AboutUs/WhyChooseUs'
import Footer from '../Components/Common/Footer'
import WorkTogether from '../Components/HomeMain/WorkTogether'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <AboutMain/>
        <AboutMain1/>
        <WhyChooseUs/>
        <WorkTogether/>
        <Footer/>
    </div>
  )
}

export default AboutUs