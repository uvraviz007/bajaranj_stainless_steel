import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const services = {
  railing: {
    title: "Stainless Steel Railing",
    description: "Premium stainless steel railings for stairs and balconies.",
    images: [
      "/images/railing/img1.jpeg",
      "/images/railing/img2.jpeg",
      "/images/railing/img3.jpeg",
      "/images/railing/img4.jpeg",
      "/images/railing/img5.jpeg",
    ],
  },

  balcony: {
    title: "Stainless Steel Balcony",
    description: "Strong, stylish balcony solutions with modern designs.",
    images: [
      "/images/balcony/bimg1.jpeg",
      "/images/balcony/bimg2.jpeg",
      "/images/balcony/bimg3.jpeg",
      "/images/balcony/bimg4.jpeg",
    ],
  },

  "main-gate": {
    title: "Stainless Steel Main Gate",
    description: "Heavy-duty gates with premium finish and security.",
    images: [
      "/images/gate/gimg11.jpeg",
      "/images/gate/gimg22.jpeg",
      "/images/gate/gimg33.jpeg",
    ],
  },

  "shop-cases": {
    title: "Stainless Steel Shop Cases",
    description: "Premium display cases for retail and commercial spaces.",
    images: [
      "/images/shop_cases/shop_cases1.jpeg",
      "/images/shop_cases/shop_cases2.jpeg",
      "/images/shop_cases/shop_cases3.jpeg",
    ],
  },

  others: {
    title: "Others Stainless Steel Work",
    description: "Custom fabrication and specialized steel work.",
    images: [
      "/images/others/oimg1.jpeg",
      "/images/others/oimg2.jpeg",
      "/images/others/oimg3.jpeg",
    ],
  },

  "modular-gate": {
    title: "Modular Gate",
    description: "Automatic and manual modular gates for modern homes.",
    images: [
      "/images/modular_gate/gimg1.jpeg",
      "/images/modular_gate/gimg2.jpeg",
      "/images/modular_gate/gimg3.jpeg",
      "/images/modular_gate/gimg4.jpeg",
    ],
  },
};

function ServiceDetails() {
  const { serviceName } = useParams();
  const service = services[serviceName];
  const [selectedImage, setSelectedImage] = useState(null);

  if (!service) {
    return <h2 className="text-center mt-5">Service Not Found</h2>;
  }

  return (
    <div className="container py-5">

      <Link to="/" className="btn btn-outline-primary mb-4">
        ← Back to Home
      </Link>

      <h2 className="fw-bold mb-3">{service.title}</h2>
      <p className="text-muted mb-4">{service.description}</p>

      <div id="serviceCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {service.images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#serviceCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner rounded shadow">
          {service.images.map((img, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} style={{height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa'}}>
              <img
                src={img}
                style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', cursor: 'pointer'}}
                alt=""
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button"
                data-bs-target="#serviceCarousel" data-bs-slide="prev"
                aria-label="Previous">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        <button className="carousel-control-next" type="button"
                data-bs-target="#serviceCarousel" data-bs-slide="next"
                aria-label="Next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Image Gallery Grid */}
      <div className="row g-3 mt-5">
        <h4 className="fw-bold mb-3">Image Gallery</h4>
        {service.images.map((img, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <img
              src={img}
              className="img-fluid rounded shadow"
              alt={`${service.title} ${index + 1}`}
              style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

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

    </div>
  );
}

export default ServiceDetails;
