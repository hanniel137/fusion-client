import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Row3 = () => {
  return (
    <>
        <Row className='mt-5 justify-content-center'>
            <Col Col className="h1 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 text-light mb-2 text-center" data-bs-theme="dark">Why Choose Us?</Col>
            <Col Col className="h5 col-lg-10 col-md-12 col-sm-12 mt-5 text-light mb-5 text-center" data-bs-theme="dark">
                At Fusion Gaming, our dedication to quality sets us apart. Every system we build is not merely assembled, but carefully crafted by our team of qualified engineers. We pride ourselves on using only top-tier components, ensuring that each machine delivers uncompromised performance. And to further instill confidence in our craftsmanship, we offer a robust 3-year guarantee on all our PCs.
            </Col>
        </Row>
    </>
  )
}

export default Row3