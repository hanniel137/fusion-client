import React from 'react'

import Header from './components/Header'
import Slider from './components/home/Slider'
import Row1 from './components/home/Row1'
import Row2 from './components/home/Row2'
import Row3 from './components/home/Row3'
import Row4 from './components/home/Row4'
import Row5 from './components/home/Row5'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'
import Container from 'react-bootstrap/Container'

import '../src/Style.css'


const Home = () => {
  return (
    <div className="bg-black pb-5">
        <Container className="bg-black">
            <Whatsapp/>
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