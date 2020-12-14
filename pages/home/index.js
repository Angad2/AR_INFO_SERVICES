import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Slider from '../../components/Carousel/index'
import Service from '../../components/Services/service'

const Home = () =>{
    return (
        <div>
            <Navbar />
            <Slider />
            <Service />
        </div>
    )
}

export default Home
