import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Slider from '../../components/Carousel/index'
import Service from '../../components/Services/service'
import Showcase from './../../components/Showcase/showcase'
import Footer from '../../components/Footer/footer'
import InovateSec from '../../components/InovateSec/index'
import ProjectComp from '../../components/ProjectComp'

const Home = () =>{
    return (
        <div>
            <Navbar />
            <InovateSec />
            <ProjectComp/>
            <Service />
            {/* <Showcase /> */}
            <Footer />
        </div>
    )
}

export default Home
