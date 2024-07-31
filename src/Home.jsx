import React from 'react'

import Header from './components/Header'
import Slider from './components/Slider'
import Row1 from './components/Row1'
import Row2 from './components/Row2'
import Row3 from './components/Row3'
import Row4 from './components/Row4'
import Row5 from './components/Row5'
import Footer from './components/Footer'


import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <div className="bg-black pb-5">
        <Container className="bg-black">
            <Header/>
            <Slider/>
            <Row1/>
            <Row2/>
            <Row3/>
            <Row4/>  
            <Row5/>
            <Footer/> 
        </Container>
    </div>
  )
}

export default Home