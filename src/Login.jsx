import React from 'react'
import axios from 'axios'
import { redirect } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'

import Header from './components/Header'
import Footer from './components/Footer'

import { useAuth } from './contexts/AuthContext'

const Login = () => {
    const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth()
    const signin = () => async(req,res) => {
        try {
            const number = document.getElementById('number').value
            const password = document.getElementById('password').value
            const res = await axios.post("http://192.168.1.117:8800/login", {number, password}, {withCredentials: true})
            setAuthUser(res.data)
            setIsLoggedIn(true)
            console.log(res.data)
            return res.data
        } catch (err) {
            console.log(err.request.response)
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
                    <Col className='h1 text-center text-light col-6'>
                        SIGN IN
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 text-center text-light col-6'>
                        <small>NEW TO FUSION GAMING?</small> <a className="link-danger link-underline-opacity-0" href='/register'>SIGN UP</a>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-5 text-light col-6'>
                    <Form.Group className="mb-3" id="numberGroup">
                        <Form.Label htmlFor='number'>Phone Number</Form.Label>
                        <Form.Control type="text" id='number' placeholder="xxxxxxxxxx" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-1 text-light col-6'>
                    <Form.Group className="mb-3" id="passwordGroup">
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control type="password" id="password" placeholder='xxxxxxxx' aria-describedby="passwordHelpBlock"/>
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-5 text-center text-light col-6'>
                        <Button variant="danger" onClick={signin()} size="lg"><span className="h5">Log In</span></Button>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 text-center text-dark col-2'>
                        <small>{(isLoggedIn)?"Logged In":"Please Log In"}</small>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col className='h5 mt-1 text-center text-light col-7'>
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