import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure JS is imported for carousels to work

function App() {
  return (
    <div className="App">
      
      {/* Header / Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#" style={{ color: '#4096f3' }}>
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

      {/* Hero Section */}
      <header className="bg-secondary text-white text-center py-5" 
              style={{ 
                backgroundImage: 'url("workers-at-work.jpg")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '400px' 
              }}>
        <div className="container py-5" style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '10px' }}>
          <h1 className="display-4 fw-bold">Precision in Every Weld</h1>
          <p className="lead">Expert Steel Fabrication and Industrial Solutions</p>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-5 container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">About Our Workshop</h2>
            <p className="text-muted">With over 20 years of experience, SHREE BAJRANG STAINLESS STEEL specializes in heavy-duty steel structures, custom fabrication, and industrial repair.</p>
            <p className="text-muted">Located in Jaipur, we pride ourselves on quality craftsmanship and durability.</p>
          </div>
          <div className="col-md-6">
             <img src="workshop-team.jpg" className="img-fluid rounded shadow" alt="Our Workers Team" />
          </div>
        </div>
      </section>

      {/* Services Section with Individual Carousels */}
      <section id="services" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold text-primary">Our Specialized Work</h2>
          <div className="row">

            {/* Service 1: Railing */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div id="carouselRailing" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-top">
                    <div className="carousel-item active">
                      <img src="images/railing/img1.jpeg" className="d-block w-100" alt="Railing 1" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/railing/img2.jpeg" className="d-block w-100" alt="Railing 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/railing/img3.jpeg" className="d-block w-100" alt="Railing 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/railing/img4.jpeg" className="d-block w-100" alt="Railing 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/railing/img5.jpeg" className="d-block w-100" alt="Railing 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselRailing" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselRailing" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">Stainless Steel Railing</h5>
                  <p className="text-muted small">Modern designs for balconies and stairs with high-grade finish.</p>
                </div>
              </div>
            </div>

            {/* Service 2: Main Gate */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div id="carouselMainGate" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-top">
                    <div className="carousel-item active">
                      <img src="images/gate/gimg11.jpeg" className="d-block w-100" alt="Gate 1" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/gate/gimg22.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/gate/gimg33.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    {/* <div className="carousel-item">
                      <img src="images/gate/gimg6.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/gate/gimg7.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div> */}

                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselMainGate" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselMainGate" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">Stainless Steel Main Gate</h5>
                  <p className="text-muted small">Heavy-duty, secure, and stylish entrance solutions.</p>
                </div>
              </div>
            </div>


            {/* Service 3: Balcony */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div id="carouselMainGate" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-top">
                    <div className="carousel-item active">
                      <img src="images/balcony/bimg1.jpeg" className="d-block w-100" alt="Gate 1" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/balcony/bimg2.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/balcony/bimg3.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/balcony/bimg4.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/balcony/bimg5.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselMainGate" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselMainGate" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">Stainless Steel Balcony</h5>
                  <p className="text-muted small">Heavy-duty, secure, and stylish balcony solutions.</p>
                </div>
              </div>
            </div>

            
            {/* Service 4: Shop_Cases */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div id="carouselMainGate" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-top">
                    <div className="carousel-item active">
                      <img src="images/shop_cases/shop_cases1.jpeg" className="d-block w-100" alt="Gate 1" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/shop_cases/shop_cases2.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/shop_cases/shop_cases3.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselMainGate" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselMainGate" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">Stainless Steel Balcony</h5>
                  <p className="text-muted small">Heavy-duty, secure, and stylish balcony solutions.</p>
                </div>
              </div>
            </div>
            {/* Service 5: others */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div id="carouselMainGate" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-top">
                    <div className="carousel-item active">
                      <img src="images/others/oimg1.jpeg" className="d-block w-100" alt="Gate 1" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/others/oimg2.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/others/oimg3.jpeg" className="d-block w-100" alt="Gate 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselMainGate" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselMainGate" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">Others Stainless Steel Work </h5>
                  <p className="text-muted small">Heavy-duty, secure.</p>
                </div>
              </div>
            </div>

            {/* Service 6: Modular Gate */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div id="carouselModular" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-top">
                    <div className="carousel-item active">
                      <img src="images/modular_gate/gimg1.jpeg" className="d-block w-100" alt="Modular 1" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/modular_gate/gimg2.jpeg" className="d-block w-100" alt="Modular 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/modular_gate/gimg3.jpeg" className="d-block w-100" alt="Modular 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/modular_gate/gimg4.jpeg" className="d-block w-100" alt="Modular 2" style={{height: '250px', objectFit: 'cover'}} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselModular" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselModular" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">Modular Gate</h5>
                  <p className="text-muted small">Automatic and manual modular gates for modern homes.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-5 container">
        <div className="card bg-dark text-white p-5 border-0 rounded-3 shadow">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h3 className="fw-bold">Join Our Team</h3>
              <p className="mb-0">We are always looking for skilled welders, technicians, and floor managers.</p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <button className="btn btn-outline-light px-4 py-2">View Openings</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-dark text-light pt-5 pb-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-uppercase fw-bold mb-3">Contact Us</h5>
              <p className="mb-1 text-secondary">Email: ranjeet8616@gmail.com</p>
              <p className="text-secondary">Phone: +91 9785765983</p>
            </div>
            <div className="col-md-4 text-md-center">
              <h5 className="text-uppercase fw-bold mb-3">Location</h5>
              <p className="text-secondary">200 Feet Bypass Rd, Shanti Path,<br/>Jhotwara, Jaipur, Rajasthan 302012</p>
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