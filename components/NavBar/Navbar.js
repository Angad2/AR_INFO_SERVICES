import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Slider from '../Carousel/index';
import Head from 'next/head'
import './style.css'

export default function Navigation() {
  return (
    <>
      <Head>
        <title>Ar InfoTech</title>
      </Head>
      <Navbar collapseOnSelect
        expand="lg"
        className="p-0 navbar"
        fixed="top"
        style={{height:70}}
      >
        <div className="imgDiv">
          {/* <Image src="/images/new-logo.png" width="200%" height="50%" /> */}
          <Navbar.Brand href="#home" style={{ fontWeight: '700', fontSize: '25px',paddingTop:'10px' }}><span style={{ color: '#f15a29' }}>A</span>r <span style={{ color: '#f15a29' }}>I</span>nfo<span style={{ color: '#f15a29' }}>T</span>ech <span style={{ color: '#f15a29' }}>S</span>ervices</Navbar.Brand>
          <p style={{ marginTop: '-10px', marginLeft: '90px' }}>Delivering Innovation </p>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navToggle" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="dItem">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#android">Android App</NavDropdown.Item>
              <NavDropdown.Item href="#ios-app">Ios App</NavDropdown.Item>
              <NavDropdown.Item href="#hybrid">Hybrid App</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#window-app">Web App</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact-us">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Slider />
    </>
  )
}
