import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
  return (
    <>
        <Carousel className='mt-1 mb-5'>
            <Carousel.Item className="carousel-img bg-img-1" interval={2000}>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-img bg-img-2" interval={2000}> 
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-img bg-img-3" interval={2000}>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Slider