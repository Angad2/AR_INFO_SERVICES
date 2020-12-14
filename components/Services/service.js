import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const service = () => {
    return (
        <Container className="ContainerDiv py-5" >
            <h2 className="text-center">Our Services</h2>
            <Row className="d-flex text-center">
                <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                    <div >
                        <img src="/images/cloudDevMain.jpg" alt="" width="100%" />
                    </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                    <p style={{textAlign:'justify',marginTop:'80px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default service
