import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import nailsBg from '../assets/purple-nails.png';
import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';
import shellacNails from '../assets/shellac-nails.jpg';
import builderGelNails from '../assets/gel-nails.jpg';
import manicuresPedicures from '../assets/mani-pedi.png';


import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

const services = [
  { title: 'Shellac Nails', image: shellacNails, path: '/shellac-nails' },
  { title: 'Builder Gel Nails', image: builderGelNails, path: '/builder-gel-nails' },
  { title: 'Manicures & Pedicures', image: manicuresPedicures, path: '/manicures-pedicures' },
];

function Services() {

return(
    
    <div className ="services">
   
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

    <div className="services-page" height="100vh"style={{backgroundColor:"#efbbff"}}>
     
     <div className="service-cards">
      <h2 className="servicesText">Our Services</h2>
      <Row xs={1} sm={2} lg={3} className="g-4 justify-content-center">
        {services.map((service, idx) => (
          <Col key={idx}>
            <Link to={service.path} className="card-link" style={{ textDecoration: 'none' }}>
            <Card className="custom-card">
              <Card.Img variant="top" className="card-image" src={service.image} />
              <Card.Body>
                <Card.Title className="card-title">{service.title}</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <br></br>
    </div>
    </div>
    </div>
    );
}
export default Services;