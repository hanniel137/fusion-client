import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'

import '../Style.css'

const Row2 = () => {
  return (
    <>
        <Row className="justify-content-center">
            <Col className="col-lg-5 col-md-11 col-sm-11 col-11 m-3 p-3 rounded bg-danger text-center">
                <Container className="h1 text-light">Guided Purchase</Container>
                <Container className="text-light">New to PCs and configurations?</Container>
                <Container className="text-light">Whether it’s your first purchase or you’re just unsure about the best configuration for your needs and budget, we’re here to help.</Container>
                <Container className="text-light">Let our experts guide you to the perfect choice.</Container>
                <Container className='mt-5'><Button variant="light"><span className="h5">Contact Us</span></Button></Container>
            </Col>
            <Col className="col-lg-5 col-md-11 col-sm-11 col-11 m-3 p-3 rounded bg-danger text-center">
                <Container className="h1 text-light">Build Your Own PC</Container>
                <Container className="text-light">Looking to build a unique PC setup? </Container>
                <Container className="text-light">With our “Build Your Own PC” option, you’re in the driver’s seat.
                Choose each component to match your exact needs, and if you’re unsure about the perfect combination, our experts are just a call away to guide you.</Container>
                <Container className='mt-4'><Button variant="light"><span className="h5">Build Your Own PC</span></Button></Container>
            </Col>
        </Row>
    </>
  )
}

export default Row2