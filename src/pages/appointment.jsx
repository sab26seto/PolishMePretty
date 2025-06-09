import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import logoImage from '../assets/purple-polish.png';
import logoWords from '../assets/Polish-Me-Pretty-Mandy.png';


import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Appointment(){
    const navigate = useNavigate();
    
    const [selectedDate, setSelectedDate] = useState(new Date());
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            service: '',
            time: '',
            notes: '',
  });
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

    return(
        <div className ="appointment">
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
      <div className="booking-container">
      <h2>Book an appointment with us!</h2>
      <p>Please fill out the following information so we can book an appointment to see you soon!</p>
      
      <form onSubmit={handleSubmit} className="booking-form">
        {/* Left Fields */}
        <div className="left-section">
          <label>*First name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

          <label>*Last name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

          <label>*Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>*Service:</label>
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="shellacFull">Shellac Full Set</option>
            <option value="shellacRefill">Shellac Refill</option>
            <option value="shellacRemoval">Shellac Removal</option>
            <option value="builderFull">Builder Gel Full Set</option>
            <option value="builderRefill">Builder Gel Refill</option>
            <option value="builderRemoval">Builder Gel Removal</option>
            <option value="manicure">Manicure</option>
            <option value="pedicure">Pedicure</option>
            <option value="maniPedi">Manicure & Pedicure</option>
          </select>
        </div>

        {/* Middle: Calendar */}
        <div className="calendar-section">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            calendarClassName="custom-calendar"
          />
        </div>

        {/* Right Fields */}
        <div className="right-section">
          <label>*Time:</label>
          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Select time</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
            <option>9:00 PM</option>
          </select>

          <label>Notes (optional):</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} rows={5} />

          <button type="submit" className="finish-button" as={Link} to="/confirmation">Finish</button>
        </div>
      </form>
    </div>
    
  
    </div>
    );    

}

export default Appointment;