import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import { GoDeviceDesktop } from "react-icons/go";
import { opencart } from "react-icons/fa";

const service = () => {
    return (
        <div 
        style={{ 
            backgroundImage: `url("/images/bg.png")`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            backgroundSize: 'cover', 
            fontFamily:'Poppins'
        }}>
            <Container className="ContainerDiv py-5" >
                <h3 className="text-center" style={{ color: '#f15a29', marginBottom: 0, fontWeight: '700' }}>OUR SERVICES</h3>
                <Row className="d-flex align-items-center justify-content-center mt-4">
                <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width: '10%',marginRight:15}}>
                            <GoDeviceDesktop size={30} style={{color:'#ededed'}} />
                        </div>
                        <div style={{width: '90%'}}>
                            <h5 style={{ color: '#f15a29', }}>Mobile Applications</h5>
                            <p style={{ textAlign: 'justify', color: 'gray',fontSize: 14, }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            
                            </p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width: '10%',marginRight:15}}>
                            <opencart size={30} style={{color:'#ededed'}} />
                        </div>
                        <div style={{width: '90%'}}>
                            <h5 style={{ color: '#f15a29' }}>eCommerce</h5>
                            <p style={{ textAlign: 'justify', color: 'gray',fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            
                            </p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width: '10%',marginRight:15}}>
                            <GoDeviceDesktop size={30} style={{color:'#ededed'}} />
                        </div>
                        <div style={{width: '90%'}}>
                            <h5 style={{ color: '#f15a29' }}>Web Design</h5>
                            <p style={{ textAlign: 'justify', color: 'gray',fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            
                            </p>
                        </div>
                    </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center mt-3">
                <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width: '10%',marginRight:15}}>
                            <GoDeviceDesktop size={30} style={{color:'#ededed'}} />
                        </div>
                        <div style={{width: '90%'}}>
                            <h5 style={{ color: '#f15a29' }}>Web Applications</h5>
                            <p style={{ textAlign: 'justify', color: 'gray',fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            
                            </p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width: '10%',marginRight:15}}>
                            <GoDeviceDesktop size={30} style={{color:'#ededed'}} />
                        </div>
                        <div style={{width: '90%'}}>
                            <h5 style={{ color: '#f15a29' }}>Copy Writing</h5>
                            <p style={{ textAlign: 'justify', color: 'gray',fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            
                            </p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width: '10%',marginRight:15}}>
                            <GoDeviceDesktop size={30} style={{color:'#ededed'}} />
                        </div>
                        <div style={{width: '90%'}}>
                            <h5 style={{ color: '#f15a29' }}>Branding</h5>
                            <p style={{ textAlign: 'justify', color: 'gray',fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            
                            </p>
                        </div>
                    </Col>
            </Row>
            </Container>
        </div>
    )
}

export default service
