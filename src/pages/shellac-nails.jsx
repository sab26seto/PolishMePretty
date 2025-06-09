import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';
import shellac1 from '../assets/shellac1.jpg';
import shellac2 from '../assets/shellac2.jpeg';
import shellac3 from '../assets/shellac3.jpg';
import shellac4 from '../assets/shellac4.jpg';


import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function shellacNails(){
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
        <Col xs={3}><img src={shellac1} className="img-fluid" alt="1" /></Col>
        <Col xs={3}><img src={shellac2} className="img-fluid" alt="2" /></Col>
        <Col xs={3}><img src={shellac3} className="img-fluid" alt="3" /></Col>
        <Col xs={3}><img src={shellac4} className="img-fluid" alt="4" /></Col>
      </Row>
    </Container>
    <Container className="builder-content">
      <h2 className="builder-title">Shellac Nails</h2>
      <p className="builder-description">
       Extend the length and customize the shape of your natural nails with false nails.  Prices and duration will vary depending on the complexity of the design. </p>
      <br></br>
      <Row>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Shellac Full Set</h3>
                <span className="fw-bold">$60</span>
            </div>
            <p>A hybrid of gel and traditional nail polish will create a strong nail. Extensions paired with shellac can create long or extra long nails.</p>
            <p>(1h30)</p>
        </Col>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Shellac Refill</h3>
                <span className="fw-bold">$50</span>
            </div>
            <p>The process of touching up the area of the nail that has grown out. The recommended time to refill your nails is 3 weeks.</p>
            <p>(40mins)</p>
        </Col>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Shellac Removal</h3>
                <span className="fw-bold">$50</span>
            </div>
            <p>Removing the shellac from your nails, without damaging your nails. The recommended time for removal is 4 weeks.</p>
            <p>(30mins)</p>
        </Col>
      </Row>
      </Container>
      <br></br><br></br><br></br>
      
    </div>
    );   

}

export default shellacNails;