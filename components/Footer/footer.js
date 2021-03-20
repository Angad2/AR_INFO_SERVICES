import React from 'react'
import { Row, Col } from 'react-bootstrap'

function footer() {
    return (
        <div style={{
            // height: 60,
            backgroundImage: `url("/images/bg.png")`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            backgroundSize: 'cover',
            color: '#fff'
        }} className="py-2">
            <Row className="m-0">
                <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                    <div className="pt-3 ml-5">
                        ©Ar InfoTech. All rights reserved 2021
                    </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                    <div className="pt-3 mr-5" style={{textAlign:'right'}}>
                        <img src="/images/ft-1.png" className="pl-2" />
                        <img src="/images/ft-2.png" className="pl-2" />
                        <img src="/images/ft-3.png" className="pl-2" />
                        <img src="/images/ft-4.png" className="pl-2" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default footer
