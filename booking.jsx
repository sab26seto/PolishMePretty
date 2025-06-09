import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import nailsImage from "../assets/shellac4.jpg"; 
import phoneIcon from "../assets/purple-phone-icon.png";
import locationIcon from "../assets/purple-location-icon.png";
import bookIcon from "../assets/purple-book-icon.png";
import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';

import { Link} from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function bookingOpening(){
    return(
        <div className ="booking">
         <Navbar fixed ="top" expand="lg" className="custom-navbar">
        <Container>
        <Navbar.Brand as={Link} to="/">
          <img alt="" src={logoImage} width="40" height="40" className="d-inline-block align-top" />{' '}
          <img alt="" src={logoWords} width ="auto" height= "50" className ="d-inline-block align-top"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-right" >
            <Nav.Link className = "navWords" as={Link} to ="/">Home</Nav.Link>
            <Nav.Link className = "navWords" as={Link} to ="/about">About</Nav.Link>
            <Nav.Link className = "navWords" as={Link} to ="/services">Services</Nav.Link>
            <Button variant="secondary" className="bookButton" as={Link} to ="/booking">Book</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <div className="d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: "#D896FF", minHeight: "100vh", paddingTop: "100px" }}>
        <Container className="bg-light p-4 rounded shadow" style={{ maxWidth: "80vw", marginTop: "110px" }}>
          <Row className="align-items-center">

            <Col md={6} className="mb-4 mb-md-0">
              <img src={nailsImage} alt="Nail Design" className="img-fluid rounded" style={{height: "70vh", width:"auto"}} />
            </Col>


            <Col md={6} className="text-purple">
              <img alt="" src={logoWords} width="auto" height="120" className="d-inline-block align-top mb-4" />

              <div className="d-flex align-items-center mb-3">
                <img alt="" src={phoneIcon} className="me-2" style={{ width: "20px" }} />
                <span>613 123 4567</span>
              </div>

              <div className="d-flex align-items-center mb-3">
                <img alt="" src={locationIcon} className="me-2" style={{ width: "20px" }} />
                <span>126 Ruby Lane, Ottawa ON</span>
              </div>

              <Button variant="outline-secondary" className="d-flex align-items-center gap-2 mb-4 bookButton" as ={Link} to="/appointment" style={{ width: "fit-content" }}>
                <img alt="" src={bookIcon} style={{ width: "30px" }} />
                Book Now
              </Button>

              <div>
                <p><strong>Monday - Friday:</strong> 11:00am - 8:00pm</p>
                <p><strong>Saturday & Sunday:</strong> 11:00am - 9:00pm</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  
    </div>
    );    

}

export default bookingOpening;;