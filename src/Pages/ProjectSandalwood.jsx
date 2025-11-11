import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'
import ProjectViewMain from '../Components/ProjectViewPage/ProjectViewMain'
import Location from '../Components/ProjectViewPage/Location'
import AreaLayout from '../Components/ProjectViewPage/AreaLayout'
import Configration from '../Components/ProjectViewPage/Configration'
import CropDetails from '../Components/ProjectViewPage/CropDetails'
import Ownership from '../Components/ProjectViewPage/Ownership'
import Highlights from '../Components/ProjectViewPage/Highlights'
import Tourist from '../Components/ProjectViewPage/Tourist'
import Gallery from '../Components/ProjectViewPage/Gallery'
import Benefits from '../Components/ProjectViewPage/Benefits'
import NearBy from '../Components/ProjectViewPage/NearBy'
import WhyUs from '../Components/ProjectViewPage/WhyUs'
import AboutDeveloper from '../Components/ProjectViewPage/AboutDeveloper'
import OtherProjects from '../Components/ProjectViewPage/OtherProjects'
import WorkTogether from '../Components/ProjectViewPage/Together'
import Faq from '../Components/ProjectViewPage/Faq'
import Video from '../Components/ProjectViewPage/Video'

const ProjectSandalwood = () => {
    return (
        <div>
            <Navbar />
            <ProjectViewMain />
            <Location />
            <AreaLayout />
            <Configration />
            <Video/>
            <CropDetails />
            <Ownership />
            <Highlights />
            <Tourist />
            <Gallery />
            <Benefits />
            <NearBy />
            <WhyUs />
            <AboutDeveloper />
            <OtherProjects />
            <WorkTogether />
            <Faq />
            <Footer />
        </div>
    )
}

export default ProjectSandalwood
