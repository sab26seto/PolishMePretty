import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import nailsBg from '../assets/purple-nails.png';
import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';
import phoneIcon from '../assets/phone-icon.png';
import locationIcon from '../assets/location-icon.png';



import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function home() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: `#efbbff` }}>
       
         <Navbar fixed ="top" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={logoImage} width="40" height="40" className="d-inline-block align-top" />{' '}
          <img alt="" src={logoWords} width ="auto" height= "50" className ="d-inline-block align-top"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-right" >
            <Nav.Link className = "navWords" href="#home">Home</Nav.Link>
            <Nav.Link className = "navWords" href="#link">About</Nav.Link>
            <Nav.Link className = "navWords" href="#link">Services</Nav.Link>
            <Button variant="secondary" className="bookButton">Book</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <img alt="" src ={nailsBg} className ="purple-nails-img"></img>
    <div className="info-bar">
  <Container>
    <Row className="justify-content-between align-items-center">
      <Col xs="auto">
  <div className="info-item">
    <img alt="" src={phoneIcon} width="20" height="20" className="icon" />
    <span className="info-text">613 123 4567</span>
  </div>
</Col>
<Col xs="auto">
  <div className="info-item">
    <img alt="" src={locationIcon} width="20" height="20" className="icon" />
    <span className="info-text">136 Ruby Lane, Ottawa ON</span>
  </div>
</Col>

    </Row>
  </Container>
</div>
<img alt="" src={logoWords} width="auto" height="200" className="d-inline-block align-top logo-image" />
<p>Your go-to nail salon for all things pretty!</p>
<Button className="bookButton">Book Now</Button>

      </header>
    </div>
  );
}

export default home;
