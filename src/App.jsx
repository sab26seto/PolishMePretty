import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import ShellacPage from './pages/shellac-nails';
import BuilderGelPage from './pages/builder-gel-nails';
import ManiPediPage from './pages/manicures-pedicures';
import BookingPage from './pages/booking';
import AppointmentPage from './pages/appointment.jsx';
import ConfirmationPage from './pages/confirmation';

function App() {
 
return(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/shellac-nails" element={<ShellacPage />} />
      <Route path="/builder-gel-nails" element={<BuilderGelPage />} />
      <Route path="/manicures-pedicures" element={<ManiPediPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  </Router>
)

}

export default App;
