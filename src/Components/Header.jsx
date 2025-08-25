import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { AlignCenter, ArrowRight } from "react-bootstrap-icons";
import { Logo } from "./Images";
import { Link } from "react-router-dom";

// function visitedFunc() {
// }
const Header = () => {
  // const [visited1, setVisited1] = useState(true);
  // const handleClick1 = () => {
  //   setVisited1(true);
  // };

  // const [visited2, setVisited2] = useState(false);
  // const handleClick2 = () => {
  //   setVisited2(true);
  // };

  // const [visited3, setVisited3] = useState(false);
  // const handleClick3 = () => {
  //   setVisited3(true);
  // };

  const container = {
    width: "100%",
    height: "64px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px black",
    marginTop: "20px",
    zIndex: "999",
  };

  const navi = {
    marginLeft: "auto",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <>
      <Navbar expand="lg">
        <Container id="header" style={container}>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={navi}>
              <Nav>
                <Nav.Link
                  className="homePage"
                  as={Link}
                  to="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="aboutPage"
                  as={Link}
                  to="/About" 
                >
                  About
                </Nav.Link>
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
                <Nav.Link className="contactPage" as={Link} to="/Contact">
                  Contact
                </Nav.Link>
              </Nav>

              <Button
                style={{ width: "150px", height: "50px" }}
                variant="warning"
              >
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
