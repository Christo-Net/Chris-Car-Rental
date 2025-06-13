import React from "react";
import Container  from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const Header = () => {
    const container = {
        width: "100%",
        height: "64px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px black",
        marginTop: "20px",
        zIndex: "999"
    }

    const navi = {
        marginLeft: "auto",
        width: "80%",
        display: "flex",
        justifyContent: "space-between"
    }
  return (
    <>
      <Navbar expand="lg">
        <Container id="header" style={container}>
          <Navbar.Brand href="#home">
            <img
              src="public/logo.png"
              alt="Logo"
              style={{ width: "100px", height: "50px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={navi}>
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="Car Pick-Up" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Local Pick-up
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    International Pick-Up
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Features" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Simple Cars
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Luxury Cars
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>

              <Button style={{width: "150px", height: "50px"}} variant="warning">
                Contact Us <ArrowRight />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
