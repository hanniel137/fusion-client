import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from 'react-bootstrap/esm/Container'

const AboutUs = () => {
  return (
    <div className='bg-black'>
        <Container>
            <Header/>
            <Container className="carousel-img h1 text-light text-center align-middle bg-img-3">
            <span class="align-middle">middle</span>
            </Container>
            <Footer/>
        </Container>
    </div>
  )
}

export default AboutUs