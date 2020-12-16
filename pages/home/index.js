import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Slider from '../../components/Carousel/index'
import Service from '../../components/Services/service'
import Showcase from './../../components/Showcase/showcase'

const Home = () =>{
    return (
        <div>
            <Navbar />
            <Slider />
            <Service />
            <Showcase />
        </div>
    )
}

export default Home
