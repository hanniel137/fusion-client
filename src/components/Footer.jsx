import React from 'react' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const Footer = () => {
  return (
    <Row className='border-top border-bottom py-5 mt-5 mb-5'>
        <Col className='col-lg-3 col-12 bg-black'>
            <a class="" href="/">
                <img  src="FG_Logo.ico" className="d-block w-10" width={216} height={216} alt="1"/>
            </a>
            <Container className='h5 mt-2 text-secondary'>
                Fusion Gaming excels in custom-built PCs and boasts over 1500 loyal customers all across India.
            </Container>
        </Col>
        <Col className='col-lg-3 col-12 mt-4 bg-black'>
            <Container className='h4 text-light'>
                QUICK LINKS
            </Container>
            <Container className='px-5 mt-3'><a className="link-light link-underline-opacity-0" href='#home'>Build Your Own PC</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Gaming</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>AI & ML</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Architecture</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Graphic Design</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Trading</a></Container>
        </Col>
        <Col className='col-lg-3 col-12 mt-4 bg-black'>
            <Container className='h4 text-light'>
                USEFUL LINKS
            </Container>
            <Container className='px-5 mt-3'><a className="link-light link-underline-opacity-0" href='#home'>About Us</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Consultation</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Cancellation & Refund</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Returns</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Shipping</a></Container>
            <Container className='px-5 mt-2'><a className="link-light link-underline-opacity-0" href='#home'>Terms & Conditions</a></Container>
            </Col>
        <Col className='col-lg-3 col-12 mt-4 bg-black'>
            <Container className='h4 text-light'>
                LOCATION & CONTACT
            </Container>
            <Container className='mt-3'>
            <a className="link-danger link-underline-opacity-0" href="https://maps.app.goo.gl/KZWBYTEJvCdPxTou7">Marina Mall, Floor 2, Below INOX, Egattur, Chennai, Tamil Nadu 603103, India</a>
            </Container>
            <Container className='mt-3'>
            <a className="link-danger link-underline-opacity-0" href="https://maps.app.goo.gl/KZWBYTEJvCdPxTou7">+91-9003148988</a>
            </Container>
        </Col>
    </Row>
  )
}

export default Footer