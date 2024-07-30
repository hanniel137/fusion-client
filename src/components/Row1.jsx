import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Row1 = () => {
  return (
      <Container className='p-5'>
        <Row className='mt-3'>
            <Col className="col-12 h1 mt-5 text-light mb-5 text-center" data-bs-theme="dark">The Fusion Gaming Difference</Col>
            <Col className="col-12 mb-5 p-3 rounded bg-danger text-light text-center">
                <Container className="h5">Each of our PCs is crafted by expert engineers using top-performance components from Intel, AMD, and NVIDIA.</Container>
                <Container className="h5">Explore our specialized range for:</Container>
                <Container className="h4 text-black">Gaming</Container>
                <Container className="h4 text-black">AI & ML</Container>
                <Container className="h4 text-black">Trading</Container>
                <Container className="h4 text-black">Data Science</Container>
                <Container className="h4 text-black">Architecture</Container>
                <Container className="h4 text-black">Graphic Design</Container>
                <Container className="h5 text-light">Or customize your own with our</Container>
                <Container className="h4 text-black">"Build Your Own PC"<span className='h5 text-light'> option.</span></Container>
            </Col>
        </Row>
    </Container>
  )
}

export default Row1