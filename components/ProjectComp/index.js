import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import './style.css'
import { GoDeviceDesktop } from "react-icons/go";
import { opencart } from "react-icons/fa";
import axios from 'axios'


const ProjectComp = () => {

    return (
        <div className="main">
            <div className="py-5 main1" >
                <Container>
                    <Row className="d-flex align-items-center justify-content-center mt-3">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div>
                                <h3  style={{ color: '#C7C9A9',fontWeight: '700' }}>Have a project on your mind.</h3>
                                    <p style={{ textAlign: 'justify', color: '#C7C9A9',fontSize: 14,marginTop:15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    
                                    </p>
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                                <div style={{width: '10%',marginRight:15}}>
                                    <GoDeviceDesktop size={30} style={{color:'#ededed'}} />
                                </div>
                                <div style={{width: '90%'}}>
                                    <h5 style={{ color: '#fff' }}>Copy Writing</h5>
                                    <p style={{ textAlign: 'justify', color: '#C7C9A9',fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    
                                    </p>
                                </div>
                            </Col>
                    </Row>
                </Container>
            </div>
            <section className="common-padd">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="site-hero">
                        <p><strong className="highlight">Waste Reduction Group Inc</strong>. specializes in providing services, products, equipment and consulting to reduce waste and improve recycling.</p>
                        <p className="mb-0">Contact us today to see how our award-winning service and products can help you.</p>
                    </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="certificate">
                        {/* <img src={ImagePath.satisfactionGuaranteed} className="satisfaction-img" alt="" /> */}
                        <h4>Why hire us?</h4>
                        <ul>
                        <li>Reliable and safe services</li>
                        <li>Competitive pricing</li>
                        <li>Customer support line</li>
                        <li>Trained and experienced crew members</li>
                        <li>On-site and off-site Management teams</li>
                        <li>Pay only for what you need with flexible plans</li>
                        <li>Create your own schedule</li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </Container>
      </section>
        </div>
    )
}

export default ProjectComp
