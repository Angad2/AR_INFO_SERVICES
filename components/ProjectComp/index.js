import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import { GoDeviceDesktop } from "react-icons/go";
import { opencart } from "react-icons/fa";

const ProjectComp = () => {
    return (
        <div className="main">
            <Container className="py-5" >
                
            <Row className="d-flex align-items-center justify-content-center mt-3">
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div>
                        <h3  style={{ color: '#C7C9A9',fontWeight: '700' }}>Have a project on your mind.</h3>
                            <p style={{ textAlign: 'justify', color: 'green',fontSize: 14,marginTop:15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            
                            </p>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width: '10%',marginRight:15}}>
                            <GoDeviceDesktop size={30} style={{color:'#ededed'}} />
                        </div>
                        <div style={{width: '90%'}}>
                            <h5 style={{ color: '#000' }}>Copy Writing</h5>
                            <p style={{ textAlign: 'justify', color: 'green',fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            
                            </p>
                        </div>
                    </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ProjectComp
