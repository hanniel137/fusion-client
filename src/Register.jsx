import React, {useState} from 'react'
import axios from 'axios'
import { redirect } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'

import Header from './components/Header'
import Footer from './components/Footer'

const Register = () => {

    const url = "https://fusion-backend.onrender.com"

    const [status, setStatus] = useState(null)

    const signUp = () => async(req,res) => {
        try {
            const firstName = document.getElementById('firstName').value
            const lastName = document.getElementById('lastName').value
            const number = document.getElementById('number').value
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            const retypePassword = document.getElementById('retypePassword').value
            const res = await axios.post(url+"/register", {firstName, lastName, number, email, password, retypePassword}, {withCredentials: true})
            console.log(res.data)
            setStatus(res.data)
        } catch (err) {
            setStatus(err.request.response)
            console.log(err.request.response)
        }
    }
  return (
    <div className='bg-black pb-5'>
        <Container className='bg-black'>
            <Header />
            <Container className='border mt-5 justify-content-center' style={{height:"100%"}}>
                <Row className='justify-content-center mt-5'>
                    <Col className='h1 text-center text-light col-12'>
                        SIGN UP
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 text-center text-secondary col-12'>
                        <small>Welcome to Fusion Gaming!!</small>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-5 text-light col-8 col-lg-4'>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" id="firstName" placeholder="xxxxxxxxxx" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-1 text-light col-8 col-lg-4'>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" id="lastName" placeholder="xxxxxxxxxx" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-1 text-light col-8 col-lg-4'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Whatsapp Number</Form.Label>
                        <Form.Control type="text" id="number" placeholder="xxxxxxxxxx" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-1 text-light col-8 col-lg-4'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" id="email" placeholder="xxxxxxxxxx" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-1 text-light col-8 col-md-8 col-lg-2'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id="password" placeholder='xxxxxxxx' aria-describedby="passwordHelpBlock"/>
                    </Form.Group>
                    </Col>
                    <Col className='h5 mt-1 text-light col-8 col-md-8 col-lg-2'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Retype Password</Form.Label>
                        <Form.Control type="password" id="retypePassword" placeholder='xxxxxxxx' aria-describedby="passwordHelpBlock"/>
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-1 text-light col-12 col-lg-4'>
                        <Container className='h5 text-center text-secondary'><small>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.</small>
                        </Container>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 mt-5 text-center text-light col-8 col-lg-4'>
                        <Button variant="danger" onClick={signUp()} size="lg"><span className="h5">SIGN UP</span></Button>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='h5 text-center text-dark col-12'>
                        <small>{(status===null)?"Click to create user":status}</small>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Container>
    </div>
  )
}

export default Register