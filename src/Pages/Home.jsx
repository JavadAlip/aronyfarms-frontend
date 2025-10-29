import React from 'react'
import Navbar from '../Components/Common/Navbar'
import HomeMain from '../Components/HomeMain/HomeMain'
import AboutUs from '../Components/HomeMain/AboutUs'
import AboutUs1 from '../Components/HomeMain/AboutUs1'
const Home = () => {
  return (

    <div>
      <Navbar />
      <HomeMain />
      <AboutUs />
      <AboutUs1/>
    </div>
  )
}

export default Home