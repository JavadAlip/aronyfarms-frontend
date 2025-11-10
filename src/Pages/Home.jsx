import React from 'react'
import Navbar from '../Components/Common/Navbar'
import HomeMain from '../Components/HomeMain/HomeMain'
import AboutUs from '../Components/HomeMain/AboutUs'
import AboutUs1 from '../Components/HomeMain/AboutUs1'
import Approach from '../Components/HomeMain/Approch'
import KeyPillars from '../Components/HomeMain/KeyPillars'
import Expertise from '../Components/HomeMain/Expertise'
import ChooseUs from '../Components/HomeMain/ChooseUs'
import Investors from '../Components/HomeMain/Investors'
import Blogs from '../Components/HomeMain/Blogs'
import WorkTogether from '../Components/HomeMain/WorkTogether'
import Faq from '../Components/HomeMain/Faq'
import Footer from '../Components/Common/Footer'
const Home = () => {
  return (

    <div>
      <Navbar />
      <HomeMain />
      <AboutUs />
      <AboutUs1/>
      <Approach/>
      <KeyPillars/>
      <Expertise/>
      <ChooseUs/>
      <Investors/>
      <Blogs/>
      <WorkTogether/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home