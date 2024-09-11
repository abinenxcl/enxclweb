import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './home/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BusinessEnablement from './services/BusinessEnablement';
import ITExS from './services/ITExS';
import ContactUs from './contact/ContactUs';
import XclerateService from './services/XclerateService';
import Footer from './components/Footer/Footer';
import AboutServices from './about/AboutServices';
import XpertiseServices from './services/Xpertise';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/businessenablement" element={<BusinessEnablement /> } />
        <Route path="/ITExS" element={<ITExS />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/xclerate" element={<XclerateService />} />
        <Route path="/about" element={<AboutServices />} />
        <Route path="/xperteaze" element={<XpertiseServices />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App