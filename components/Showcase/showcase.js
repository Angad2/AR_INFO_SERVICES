import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'


const Showcase = () =>{
    return (
        <div>
            <Container className=" py-4 text-center" fluid={true} >
            <h2>Showcase</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Row className="d-flex align-items-center justify-content-center mt-5">
                <Col xl={3} lg={3} md={3} sm={12} xs={12} >
                    <div className="p-1 mb-2">
                        <img src="/images/cloudDevMain.jpg" alt="" width="100%" style={{borderRadius:'4px'}} />
                    </div>
                </Col>
                <Col xl={3} lg={3} md={3} sm={12} xs={12} >
                    <div className="p-1 mb-2">
                        <img src="/images/cloudDevMain.jpg" alt="" width="100%" style={{borderRadius:'4px'}} />
                    </div>
                </Col>
                <Col xl={3} lg={3} md={3} sm={12} xs={12} >
                    <div className="p-1 mb-2">
                        <img src="/images/cloudDevMain.jpg" alt="" width="100%" style={{borderRadius:'4px'}} />
                    </div>
                </Col>
                <Col xl={3} lg={3} md={3} sm={12} xs={12} >
                    <div className="p-1 mb-2">
                        <img src="/images/cloudDevMain.jpg" alt="" width="100%" style={{borderRadius:'4px'}} />
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Showcase;
