import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';
import builder1 from '../assets/builder1.jpg';
import builder2 from '../assets/builder2.jpg';
import builder3 from '../assets/builder3.jpg';
import builder4 from '../assets/builder4.jpg';


import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function builderGelNails(){
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
        <Col xs={3}><img src={builder1} className="img-fluid" alt="1" /></Col>
        <Col xs={3}><img src={builder2} className="img-fluid" alt="2" /></Col>
        <Col xs={3}><img src={builder3} className="img-fluid" alt="3" /></Col>
        <Col xs={3}><img src={builder4} className="img-fluid" alt="4" /></Col>
      </Row>
    </Container>
    <Container className="builder-content">
      <h2 className="builder-title">Builder Gel Nails</h2>
      <p className="builder-description">
        A layer of flexible gel, that prevents breakage and allows your natural nails grow. Prices and duration will vary depending on the complexity of the design. </p>
      <br></br>
      <Row>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Builder Gel Full Set</h3>
                <span className="fw-bold">$50</span>
            </div>
            <p>Flexible gel layer strengthens your natural nails and adds a clean finish. Builder gel cannot change the length of your nails.</p>
            <p>(1h)</p>
        </Col>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Builder Gel Refill</h3>
                <span className="fw-bold">$50</span>
            </div>
            <p>The process of touching up the area of the nail that has grown out. The recommended time to refill your nails is 3 weeks.</p>
            <p>(30mins)</p>
        </Col>
        <Col xs={6} md={4}>
            <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-1">Builder Gel Removal</h3>
                <span className="fw-bold">$50</span>
            </div>
            <p>Removing the builder gel from your nails, without damaging your nails. The recommended time for removal is 4 weeks.</p>
            <p>(30mins)</p>
        </Col>
      </Row>
      </Container>
      <br></br><br></br><br></br>
      
    </div>
    );   

}

export default builderGelNails;