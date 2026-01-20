import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header / Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/" style={{ color: '#4096f3' }}>
            SHREE BAJRANG STAINLESS STEEL
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link text-dark" href="#about">About Us</a>
              <a className="nav-link text-dark" href="#services">Services</a>
              <a className="nav-link text-dark" href="#career">Careers</a>
              <a className="nav-link text-dark" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:serviceName" element={<ServiceDetails />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <footer id="contact" className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-uppercase fw-bold mb-3">Contact Us</h5>
              <p className="mb-1">
                <a href="mailto:ranjeet8616@gmail.com" className="text-secondary text-decoration-none">
                  Email: ranjeet8616@gmail.com
                </a>
              </p>
              <p className="text-secondary">Phone: +91 9785765983</p>
            </div>
            <div className="col-md-4 text-md-center">
              <h5 className="text-uppercase fw-bold mb-3">Location</h5>
              <a 
                href="https://www.google.com/maps/search/200+Feet+Bypass+Rd,+Shanti+Path,+Jhotwara,+Jaipur,+Rajasthan+302012" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none"
              >
                <p className="text-secondary">200 Feet Bypass Rd, Shanti Path,<br/>Jhotwara, Jaipur, Rajasthan 302012</p>
              </a>
            </div>
            <div className="col-md-4 text-md-end">
              <h5 className="text-uppercase fw-bold mb-3">Workshop Stats</h5>
              <p className="text-secondary mb-0">Total Skilled Workers: <span className="badge bg-primary fs-6">10+</span></p>
            </div>
          </div>
          <hr className="mt-5 border-secondary" />
          <div className="text-center text-secondary small">
            <p className="mb-0">© 2026 SHREE BAJRANG STAINLESS STEEL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
