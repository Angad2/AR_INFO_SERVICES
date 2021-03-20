import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { FcApprove } from "react-icons/fc";

function Inovate() {
    return (
        <div className="py-5" style={{ backgroundColor: '#F9F9F9' }} >
            <div className="container ">
                 <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <h3 style={{ fontSize: 80, color: '#ededed', letterSpacing: 5, fontWeight: '600' }}>01</h3>
                        <div style={{ width: 400 }} style={{ fontFamily: 'sans-serif' }}>
                            <h2 style={{ color: '#f15a29', marginTop: -80, marginLeft: 30 }}>Innovate</h2>
                            <p style={{ textAlign: 'justify', color: 'gray', marginLeft: 30 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div style={{ marginLeft: 30}}>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Customer Experience</p>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Product Management</p>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Proof of Concept</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <h3 style={{ fontSize: 80, color: '#ededed', letterSpacing: 5, fontWeight: '600' }}>02</h3>
                        <div style={{ width: 400, marginTop: -50 }} style={{ fontFamily: 'sans-serif' }}>
                            <h2 style={{ color: '#f15a29', marginTop: -80, marginLeft: 30 }}>Create</h2>
                            <p style={{ textAlign: 'justify', color: 'gray', marginLeft: 30 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div style={{ marginLeft: 30}}>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Web Designing</p>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Branding</p>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Web & App Development</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <h3 style={{ fontSize: 80, color: '#ededed', letterSpacing: 5, fontWeight: '600' }}>03</h3>
                        <div style={{ width: 400 }} style={{ fontFamily: 'sans-serif' }}>
                            <h2 style={{ color: '#f15a29', marginTop: -80, marginLeft: 30 }}>Scale</h2>
                            <p style={{ textAlign: 'justify', color: 'gray', marginLeft: 30 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div style={{ marginLeft: 30}}>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Social Meadia</p>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Paid Compaigns</p>
                            <p style={{marginBottom: 5}}><span><FcApprove style={{marginRight:5,fontSize: 20}} /></span>Marketing and SEO</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Inovate
