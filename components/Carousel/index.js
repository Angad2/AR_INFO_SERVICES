import React from 'react'
import { Carousel } from 'react-bootstrap';
import './style.css'

function index() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block img"
                    src="images/banner2.jpg"
                    alt="First slide"
                    // style={{height:'600px'}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block img"
                    src="images/bnr3.jpg"
                    alt="Third slide"
                    // style={{height:'600px'}}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img"
                    src="images/csI2chainBnr.jpg"
                    alt="Third slide"
                    // style={{height:'600px'}}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default index
