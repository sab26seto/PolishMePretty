import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import nailsBg from '../assets/blur-nails-bg.jpg';
import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';
import checkmark from '../assets/checkmark-icon.png';


import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function Confirmation() {
    return(
        <div className ="confirmation" style={{ backgroundImage: `url(${nailsBg})`, backgroundSize: 'cover', height: '100vh' }}>
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
            <Button variant="secondary" className="bookButton"  as={Link} to ="/booking">Book</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        <Card className="confirmation-card">
        <Card.Body>
            <Card.Img variant="top" src={checkmark} className="confirmation-image" />
            <Card.Title className="confirmation-title">Appointment Booked Successfully</Card.Title>
            <Card.Text className="confirmation-text">
                Thank you for booking an appointment with us! We look forward to seeing you soon. A confirmation email will be sent shorty.
            </Card.Text>
            <Button variant="secondary" className ="bookButton"as={Link} to="/">Return to Home</Button>
        </Card.Body>
        </Card>
    </div>
    
    );
} export default Confirmation;