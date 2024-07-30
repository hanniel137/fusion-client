import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import '../Style.css'

const Header = () => {
  return (
    <>
        <Navbar className="sticky-top" style={{height: "28px"}} data-bs-theme="dark">
            <Container>
                <Nav>
                    <Navbar.Brand className="mt-3 text-danger"href="#home"><p><small>+91-9003148988</small></p></Navbar.Brand>
                </Nav>
                <Nav className="ms-auto">
                    <Navbar.Brand className="mt-3" href="#home"><p><small>Login</small></p></Navbar.Brand>
                    <Navbar.Brand className="mt-3" href="#home"><p><small>|</small></p></Navbar.Brand>
                    <Navbar.Brand className="mt-3" href="#home"><p><small>Cart</small></p></Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-black sticky-top" data-bs-theme="dark">
            <Container>
                <a class="navbar-brand" href="#">
                    <img  src="FG_Logo.ico" className="d-block w-10" width={100} height={100} alt="1"/>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto">
                        <Navbar.Brand className="h2 p-3" href="/config">Build Your Own PC</Navbar.Brand>
                        <Navbar.Brand className="h2 p-3" href="#home">Pre-Builts</Navbar.Brand>
                        <Navbar.Brand className="h2 p-3" href="#home">About Us</Navbar.Brand>
                        <Navbar.Brand className="h2 p-3" href="#home">Support</Navbar.Brand>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header