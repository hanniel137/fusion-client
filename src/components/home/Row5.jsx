import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'

const Row5 = () => {
  return (
    <>
        <Row className='justify-content-center allign-items-center'>
            <Col className="col-12 h1 mt-5 text-light text-center" data-bs-theme="dark">Experience in Person</Col>
            <Col className='col-12 text-secondary m-1 h4 text-center'>
                Still not confident about your PC purchase?
            </Col>
            <Col className='col-12 col-12 text-light h5 text-center px-5'>
                <Row className='justify-content-center allign-items-center'>
                <Col className='col-12 bg-danger rounded p-5 m-5'>
                    Visit our store located in The Marina Mall, OMR, Chennai to talk to our expert team and get your queries clarified. We have setup demo PCs for our customers to try their application before making a purchase.
                </Col>
                <Col className='col-12 bg-danger rounded p-5'>
                    We are also more than happy to help you over a video call.
                    <Container className='mt-4'>
                    <Button variant="light"><span className="h5">Book An Appointment</span></Button>
                    </Container>
                </Col>
                </Row>
            </Col>
        </Row>
    </>
  )
}

export default Row5