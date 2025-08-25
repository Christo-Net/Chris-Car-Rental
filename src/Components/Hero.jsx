import React from 'react'
import { Button } from 'react-bootstrap'
import { ArrowRight } from "react-bootstrap-icons";
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { HeroImage } from './Images';


const Hero = () => {
    

  return (
    <>
        <Container id='heroContainer' style={{paddingLeft: "5%"}}>
            <Row>
                <Col lg={6} md={6}>
                    <div style={{marginTop: "50px",marginBottom: "20px", position: "relative"}}>
                        <h1 id='h1ForHero' style={{fontSize: "70px"}}>DRIVE <span id='yellowText'>YOUR DREAM</span></h1>
                        <span className='subH1'>Unlock Your Journey with Our Rental Cars</span>
                        <span style={{borderBottom: "2px solid rgb(179, 179, 177)",display: "block", width: "250px"}}></span>
                    </div>

                    <div style={{display: "flex", justifyContent: "space-between", width: "280px", marginBottom: "120px"}}>
                        <Button variant='warning'>FIND A CAR <ArrowRight /></Button>
                        <Button variant=''>LEARN MORE <ArrowRight /></Button>
                    </div>
                    
                    <div id='perHour' style={{display: "flex", }}>
                        <h4 style={{color: "rgb(14, 38, 76)", fontSize: "30px"}}>$13.00 </h4>
                        <span style={{marginTop: "8px",zIndex: "22", marginLeft: "3px", color: "rgb(14, 38, 76)"}}>/per hour</span>
                    </div>
                </Col>

                <Col id='part2' lg={4} md={4} style={{backgroundImage: "linear-gradient(to bottom,  rgb(240, 194, 126), rgb(240, 194, 126), white)", height: "300px", transform: "translate(100px,-100px)"}}>
                    <HeroImage />
                </Col>
            </Row>

            <div style={{border: "2px solid black", margin: "100px 0 100px 0", padding: "30px", backgroundColor: "rgb(14, 38, 76)", borderRadius: "20px"}}>
                <Row>
                    <Col style={{color: "white", display: "flex", justifyContent: "center", marginBottom: "20px"}}><h3>BOOK A CAR</h3></Col>
                </Row>
                <Row>
                    <Col><input type="text" placeholder='First Name' /></Col>
                    <Col><input type="tel" placeholder='Phone Number' /></Col>
                    <Col><input type="search" placeholder='Choose a car' /></Col>
                </Row><br />
                <Row>
                    <Col><input type="date" placeholder='Pick up date' /></Col>
                    <Col><input type="search" placeholder='Return date' /></Col>
                    <Col><Button variant='warning'>BOOK NOW <ArrowRight /></Button></Col>
                </Row>
            </div>
        </Container>

    </>
)
}

export default Hero