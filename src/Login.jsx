import React, { useState } from 'react'
import axios from 'axios'
import { redirect, useSearchParams } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'

import Header from './components/Header'
import Footer from './components/Footer'

import { useAuth } from './contexts/AuthContext'

const Login = () => {

    const url = "https://fusion-backend.onrender.com"

    const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth()

    const [msg, setMsg] = useState('')

    const signin = () => async(req,res) => {
        try {
            const number = document.getElementById('number').value
            const password = document.getElementById('password').value
            const res = await axios.post(url+"/login", {number, password}, {withCredentials: true})
            setAuthUser(res.data)
            setIsLoggedIn(true)
        } catch (err) {
            console.log(err.request.response)
            setMsg(err.request.response)
            setAuthUser(null)
            setIsLoggedIn(false)
        }
    }
  return (
    <div className='bg-black'>
        <Container className='bg-black pb-5'>
            <Header />
            <Container className='border mt-5 p-5 justify-content-center' style={{height:"100%"}}>
                <Row className='justify-content-center mt-5'>
                    <Col className='h1 text-center text-light col-12'>
                        SIGN IN
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 text-center text-light col-10'>
                        <small>NEW TO FUSION GAMING?</small> <a className="link-danger link-underline-opacity-0" href='/register'>SIGN UP</a>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-5 text-light col-lg-4 col-10'>
                    <Form.Group className="mb-3" id="numberGroup">
                        <Form.Label htmlFor='number'>Email or Phone Number</Form.Label>
                        <Form.Control type="text" id='number' placeholder="xxxxxxxxxx" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-1 text-light col-lg-4 col-10'>
                    <Form.Group className="mb-3" id="passwordGroup">
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control type="password" id="password" placeholder='xxxxxxxx' aria-describedby="passwordHelpBlock"/>
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-5 text-center text-light col-12'>
                        <Button variant="danger" onClick={signin()} size="lg"><span className="h5">LOGIN</span></Button>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 text-center text-dark col-12'>
                        <small>{(isLoggedIn)?"Logged In":msg}</small>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col className='h5 mt-1 text-center text-light col-12'>
                        <a className="link-danger link-underline-opacity-0" href='/resetPassword'>Forgot Password</a>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Container>
    </div>
  )
}

export default Login 