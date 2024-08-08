import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { useAuth } from '../contexts/AuthContext'

const Header = () => {
    
    const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth()

  return (
    <>
        <Navbar className='bg-black border-bottom border-secondary' data-bs-theme="dark">
            <Container style={{height: "15px"}}>
                <Nav className='justify-content-center'>
                    <Navbar.Brand className="m-auto text-danger" href="tel:+91-6369933507"><small>+91-63699 33507</small></Navbar.Brand>
                </Nav>
                <Nav className="ms-auto justify-content-center">
                    <Navbar.Brand className='text-light' href="/login"><small>{isLoggedIn?authUser.firstName:'Login'}</small></Navbar.Brand>
                    <Navbar.Brand className='text-light'><small>|</small></Navbar.Brand>
                    <Navbar.Brand className='text-light' href="#home"><small>Cart</small></Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-black sticky-top border-light border-bottom bg-opacity-75" data-bs-theme="dark">
            <Container>
                <a class="navbar-brand" href="/">
                    <img  src="FG_Logo.ico" className="d-block w-10" width={95} height={90} alt="1"/>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto">
                        <Navbar.Brand className="h2 p-1" href="/config">Build Your Own PC</Navbar.Brand>
                        <Navbar.Brand className="h2 p-1" href="#home">Pre-Builts</Navbar.Brand>
                        <Navbar.Brand className="h2 p-1" href="/aboutus">About Us</Navbar.Brand>
                        <Navbar.Brand className="h2 p-1" href="#home">Support</Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header