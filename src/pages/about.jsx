import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';


import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function about(){
    return(
        <div className ="about">
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
    <Container className="about-content">
        <Row className="justify-content-center">
            <Col xs={12} md={8}>
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
                Welcome to Polish Me Pretty, your go-to nail salon for all things pretty!
                We are a passionate team of nail artists dedicated to providing you with the best nail care and design services in town. 
                Our mission is to make you feel beautiful and confident with every visit.
            </p>
            <p className="about-description">
                This website was created by Sabrina Seto, a passionate software engineering student who loves to combine her creativity with technology.
            </p>
            
            <p >Contact us for more information or to book an appointment.</p>
            <p style={{fontSize:"0.6em"}}>126 Ruby Lane, Ottawa ON</p>

            <p style={{fontSize:"0.6em"}}>613 123 4567</p>
            </Col>
        </Row>
    </Container>
    </div>
    );    

}

export default about;