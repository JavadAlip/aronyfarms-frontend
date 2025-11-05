import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'
import ProjectViewMain from '../Components/ProjectCoffee/ProjectViewMain'
import Location from '../Components/ProjectCoffee/Location'
import AreaLayout from '../Components/ProjectViewPage/AreaLayout'
import Configration from '../Components/ProjectViewPage/Configration'
import CropDetails from '../Components/ProjectViewPage/CropDetails'
import Ownership from '../Components/ProjectViewPage/Ownership'
import Highlights from '../Components/ProjectCoffee/Highlights'
import Tourist from '../Components/ProjectViewPage/Tourist'
import Gallery from '../Components/ProjectCoffee/Gallery'
import Benefits from '../Components/ProjectViewPage/Benefits'
import NearBy from '../Components/ProjectViewPage/NearBy'
import WhyUs from '../Components/ProjectViewPage/WhyUs'
import AboutDeveloper from '../Components/ProjectViewPage/AboutDeveloper'
import OtherProjects from '../Components/ProjectCoffee/OtherProjects'
import WorkTogether from '../Components/ProjectViewPage/Together'

const ProjectMango = () => {
    return (
        <div>
            <Navbar />
            <ProjectViewMain />
            <Location />
            <AreaLayout/>
            <Configration/>
            <CropDetails/>
            <Ownership/>
            <Highlights/>
            <Tourist/>
            <Gallery/>
            <Benefits/>
            <NearBy/>
            <WhyUs/>
            <AboutDeveloper/>
            <OtherProjects/>
            <WorkTogether />
            <Footer />
        </div>
    )
}

export default ProjectMango
