import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Row4 = () => {
  return (
    <>
        <Row className="justify-content-center allign-items-center">
            <Col className="col-lg-4 col-md-12 col-sm-12 col-12 p-5 rounded">
                <Card className='bg-danger'>
                    <Card.Body className='bg-danger'>
                        <Card.Title className='text-center text-black h2'>Research</Card.Title>
                        <Card.Img src='FG_Logo.ico'/>
                        <Card.Text className='h5 text-black text-center'>
                        Comprehensive benchmarks
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12 p-5 rounded">
                <Card className='bg-danger' >
                    <Card.Body className='bg-danger'>
                        <Card.Title className='text-center text-black h2'>Testing</Card.Title>
                        <Card.Img src='FG_Logo.ico'/>
                        <Card.Text className='h5 text-black text-center'>
                        Comprehensive benchmarks
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-lg-4 col-md-12 col-sm-12 col-12 p-5 rounded">
                <Card className='bg-danger'>
                    <Card.Body className='bg-danger'>
                        <Card.Title className='text-center text-black h2'>Cost Analysis</Card.Title>
                        <Card.Img src='FG_Logo.ico'/>
                        <Card.Text className='h5 text-black text-center'>
                        Comprehensive benchmarks
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default Row4