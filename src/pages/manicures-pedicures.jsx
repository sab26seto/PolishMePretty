import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';
import mani1 from '../assets/mani1.jpg';
import mani2 from '../assets/mani2.jpg';
import mani3 from '../assets/mani3.jpeg';
import mani4 from '../assets/mani4.jpeg';


import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function maniPedi(){
    return(
    <div className="builder-page">
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
    <Container className="header-imgs">
      <Row>
        <Col xs={3}><img src={mani1} className="img-fluid" alt="1" /></Col>
        <Col xs={3}><img src={mani2} className="img-fluid" alt="2" /></Col>
        <Col xs={3}><img src={mani3} className="img-fluid" alt="3" /></Col>
        <Col xs={3}><img src={mani4} className="img-fluid" alt="4" /></Col>
      </Row>
    </Container>
    <Container className="builder-content">
      <h2 className="builder-title">Manicures & Pedicures</h2>
      <p className="builder-description">
      Pamper yourself with a treatment that helps to take care of your cuticles, dead skin cells and nail shape. Spa treatment includes an exfoliating scrub, hot bath, massage  and a nail polish of choice.</p>
      <br></br>
      <Row>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Manicure</h3>
                <span className="fw-bold">$60</span>
            </div>
            <p>A spa manicure experience with your choice of nail polish.</p>
            <p>(1h)</p>
        </Col>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Pedicure</h3>
                <span className="fw-bold">$50</span>
            </div>
            <p>A spa manicure experience with your choice of nail polish.</p>
            <p>(40mins)</p>
        </Col>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Manicure & Pedicure</h3>
                <span className="fw-bold">$60</span>
            </div>
            <p>A spa experience including a manicure and pedicure treatment, with your choice of nail polish.</p>
            <p>(1h30)</p>
        </Col>
      </Row>
      </Container>
      <br></br><br></br><br></br>
      
    </div>
    );   

}

export default maniPedi;;