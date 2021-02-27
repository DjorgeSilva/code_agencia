import React from 'react'
import { Container } from "./SliderElements"
import {Carousel} from "react-bootstrap"
import sliderIMG from "../../img/slider-1.png"
import slider2IMG from "../../img/slider-2.jpg"
import slider3IMG from "../../img/slider-3.jpg"

export const Slider = () => {
    return (
        <Container>
            <Carousel styled={{marginTop: "100px", overflow: "hidden"}}>
                <Carousel.Item interval={1000} style={{overflow: "hidden",  maxHeight:"95vh"}}>
                    <img
                        className="d-block w-100"
                        src={sliderIMG}
                        alt="First slide"
                        style={{objectFit: "cover",  minHeight: "60vh"}}
                        
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} style={{overflow: "hidden",  maxHeight:"95vh"}}>
                    <img
                        className="d-block w-100"
                        src={slider2IMG}
                        alt="Second slide"
                        style={{objectFit: "cover", minHeight: "60vh"}}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item style={{overflow: "hidden",  maxHeight:"95vh"}}>
                    <img
                        className="d-block w-100"
                        src={slider3IMG}
                        alt="Third slide"
                        style={{objectFit: "cover",  minHeight: "60vh"}}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
