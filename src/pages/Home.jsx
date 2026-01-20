import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const servicesList = [
  {
    id: 'railing',
    title: 'Stainless Steel Railing',
    description: 'Modern designs for balconies and stairs with high-grade finish.',
    carouselId: 'carouselRailing',
    images: [
      '/images/railing/img1.jpeg',
      '/images/railing/img2.jpeg',
      '/images/railing/img3.jpeg',
      '/images/railing/img4.jpeg',
      '/images/railing/img5.jpeg',
    ],
  },
  {
    id: 'main-gate',
    title: 'Stainless Steel Main Gate',
    description: 'Heavy-duty, secure, and stylish entrance solutions.',
    carouselId: 'carouselMainGate',
    images: [
      '/images/gate/gimg11.jpeg',
      '/images/gate/gimg22.jpeg',
      '/images/gate/gimg33.jpeg',
    ],
  },
  {
    id: 'balcony',
    title: 'Stainless Steel Balcony',
    description: 'Heavy-duty, secure, and stylish balcony solutions.',
    carouselId: 'carouselBalcony',
    images: [
      '/images/balcony/bimg1.jpeg',
      '/images/balcony/bimg2.jpeg',
      '/images/balcony/bimg3.jpeg',
      '/images/balcony/bimg4.jpeg',
    ],
  },
  {
    id: 'shop-cases',
    title: 'Stainless Steel Shop Cases',
    description: 'Premium display cases for retail and commercial spaces.',
    carouselId: 'carouselShopCases',
    images: [
      '/images/shop_cases/shop_cases1.jpeg',
      '/images/shop_cases/shop_cases2.jpeg',
      '/images/shop_cases/shop_cases3.jpeg',
    ],
  },
  {
    id: 'others',
    title: 'Others Stainless Steel Work',
    description: 'Custom fabrication and specialized steel work.',
    carouselId: 'carouselOthers',
    images: [
      '/images/others/oimg1.jpeg',
      '/images/others/oimg2.jpeg',
      '/images/others/oimg3.jpeg',
    ],
  },
  {
    id: 'modular-gate',
    title: 'Modular Gate',
    description: 'Automatic and manual modular gates for modern homes.',
    carouselId: 'carouselModular',
    images: [
      '/images/modular_gate/gimg1.jpeg',
      '/images/modular_gate/gimg2.jpeg',
      '/images/modular_gate/gimg3.jpeg',
      '/images/modular_gate/gimg4.jpeg',
    ],
  },
];

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <header className="bg-secondary text-white text-center py-5" style={{ backgroundImage: 'url("workers-at-work.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}>
        <div className="container py-5" style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '10px' }}>
          <h1 className="display-4 fw-bold">Precision in Every Weld</h1>
          <p className="lead">Expert Steel Fabrication and Industrial Solutions</p>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-5 container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{fontSize: '2.5rem'}}>About Our Workshop</h2>
            <p className="text-muted mb-3" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
              With over 20 years of experience, <strong className="text-dark">SHREE BAJRANG STAINLESS STEEL</strong> specializes in heavy-duty steel structures, custom fabrication, and industrial repair. We are committed to delivering exceptional quality and innovative solutions for all your stainless steel needs.
            </p>
            <p className="text-muted mb-3" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
              Located in Jaipur, we pride ourselves on quality craftsmanship, durability, and customer satisfaction. Our team of skilled welders and technicians work with precision to create products that meet international standards.
            </p>
            <p className="text-muted mb-3" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
              We serve residential, commercial, and industrial clients, offering custom solutions tailored to your specific requirements. From design consultation to installation, we handle every aspect with professionalism and expertise.
            </p>
            <div className="mt-4">
              <div className="mb-2" style={{fontSize: '1rem'}}>
                <span className="badge bg-primary me-2">Quality Assured</span>
                <span className="badge bg-success">ISO Certified</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="workshop-team.jpg" className="img-fluid rounded shadow" alt="Our Workers Team" style={{height: '450px', objectFit: 'cover'}} />
          </div>
        </div>
      </section>

      {/* Services Section with Individual Carousels */}
      <section id="services" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold text-primary">Our Specialized Work</h2>
          <div className="row">
            {servicesList.map((service) => (
              <div key={service.id} className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  {service.images.length > 1 ? (
                    <div id={service.carouselId} className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner rounded-top">
                        {service.images.map((img, index) => (
                          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img 
                              src={img} 
                              className="d-block w-100" 
                              alt={`${service.title} ${index + 1}`} 
                              style={{height: '400px', objectFit: 'cover', cursor: 'pointer'}}
                              onClick={() => setSelectedImage(img)}
                            />
                          </div>
                        ))}
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target={`#${service.carouselId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target={`#${service.carouselId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      </button>
                    </div>
                  ) : (
                    <img 
                      src={service.images[0]} 
                      className="d-block w-100 rounded-top" 
                      alt={service.title}
                      style={{height: '400px', objectFit: 'cover', cursor: 'pointer'}}
                      onClick={() => setSelectedImage(service.images[0])}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted small flex-grow-1">{service.description}</p>
                    <Link to={`/service/${service.id}`} className="btn btn-primary btn-sm align-self-start">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="modal d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedImage(null)}
                ></button>
              </div>
              <div className="modal-body p-0">
                <img
                  src={selectedImage}
                  className="img-fluid w-100"
                  alt="Full size view"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
