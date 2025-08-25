import React from 'react'
import { Border } from 'react-bootstrap-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
import CarType1 from '../public/Screenshot_2025-06-13_000318-removebg-preview.png'
import CarType2 from '../public/Screenshot_2025-06-13_000408-removebg-preview.png'
import CarType3 from '../public/Screenshot_2025-06-13_000415-removebg-preview.png'
import CarType4 from '../public/Screenshot_2025-06-13_000422-removebg-preview.png'
import CarType5 from '../public/Screenshot_2025-06-13_000757-removebg-preview.png'
import CarType6 from '../public/Screenshot_2025-06-13_000807-removebg-preview.png'

const CarTypes = () => {


  return (
    <>
        <Container style={{padding: "7%"}}>
            <Row style={{display: "flex", textAlign: "center", gap: "20px", marginTop: "-100px"}}>
                <h1>MOST POPULAR TYPES OF CARS</h1>
                <p>Cars come in many shapes and sizes, each designed for different purposes. Below’s a brief overview of the main types:</p>
            </Row>

            <Row style={{marginTop: "10vh", display: "flex",justifyContent: "center", gap: "33px"}}>
                <Col lg={2} md={4} sm={6} style={{width: "160px",height: "140px", border: "2px solid rgb(229, 229, 229)", borderRadius: "10px", display: "grid",justifyContent: "center", backgroundColor: "rgb(243, 244, 251)"}}>
                    <img style={{width: "120px", marginTop: "-75px"}} src={CarType1} alt="Sports car" />
                    <h6>SPORTS</h6>
                    <span>12 Cars</span>
                </Col>

                <Col lg={2} md={4} sm={6} style={{width: "160px",height: "140px", border: "2px solid rgb(229, 229, 229)", borderRadius: "10px", display: "grid",justifyContent: "center", backgroundColor: "rgb(243, 244, 251)"}}>
                    <img style={{width: "120px", marginTop: "-70px"}} src={CarType2} alt="Sports car" />
                    <h6>SEDAN</h6>
                    <span>34 Cars</span>
                </Col>

                <Col lg={2} md={3} sm={6} style={{width: "160px",height: "140px", border: "2px solid rgb(229, 229, 229)", borderRadius: "10px", display: "grid",justifyContent: "center", backgroundColor: "rgb(243, 244, 251)"}}>
                    <img style={{width: "120px", marginTop: "-65px"}} src={CarType3} alt="Sports car" />
                    <h6>FAMILY</h6>
                    <span>55 Cars</span>
                </Col>

                <Col lg={2} md={3} sm={6} style={{width: "160px",height: "140px", border: "2px solid rgb(229, 229, 229)", borderRadius: "10px", display: "grid",justifyContent: "center", backgroundColor: "rgb(243, 244, 251)"}}>
                    <img style={{width: "110px", marginTop: "-60px"}} src={CarType4} alt="Sports car" />
                    <h6>LIMOUSINE</h6>
                    <span>72 Cars</span>
                </Col>

                <Col lg={2} md={3} sm={6} style={{width: "160px",height: "140px", border: "2px solid rgb(229, 229, 229)", borderRadius: "10px", display: "grid",justifyContent: "center", backgroundColor: "rgb(243, 244, 251)"}}>
                    <img style={{width: "125px", marginTop: "-55px"}} src={CarType5} alt="Sports car" />
                    <h6>Super</h6>
                    <span>31 Cars</span>
                </Col>

                <Col lg={2} md={3} sm={6} style={{width: "160px",height: "140px", border: "2px solid rgb(229, 229, 229)", borderRadius: "10px", display: "grid",justifyContent: "center", backgroundColor: "rgb(243, 244, 251)"}}>
                    <img style={{width: "130px", marginTop: "-45px"}} src={CarType6} />
                    <h6>PICK-UP</h6>
                    <span>3 Cars</span>
                </Col>

               
            </Row>
        </Container>
    </>
  )
}

export default CarTypes