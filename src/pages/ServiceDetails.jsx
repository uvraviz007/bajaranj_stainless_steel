import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const services = {
  "railing": {
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

  "balcony": {
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

 "others": {
    title: "Others Stainless Steel Work",
    description: "Custom fabrication and specialized steel work.",
    images: [
      "/images/others/oimg2.jpeg",
      "/images/others/oimg3.jpeg",
      "/images/others/oimg4.jpeg",
      "/images/others/oimg9.jpeg",
      "/images/others/oimg10.jpeg",
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
  const carouselRef = useRef(null);

  if (!service) {
    return <h2 className="text-center mt-5">Service Not Found</h2>;
  }

  // Set default image on first load
  if (!selectedImage && service.images.length > 0) {
    setSelectedImage(service.images[0]);
  }

  return (
    <div className="container py-5">

      <Link to="/" className="btn btn-outline-primary mb-4">
        ← Back to Home
      </Link>

      <h2 className="fw-bold mb-3">{service.title}</h2>
      <p className="text-muted mb-4">{service.description}</p>

      {/* Large Image Box */}
      <div className="mb-4" ref={carouselRef}>
        <div className="bg-light rounded shadow p-3" style={{height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa'}}>
          {selectedImage && (
            <img
              src={selectedImage}
              style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain'}}
              alt="Selected"
            />
          )}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="row g-1">
        <h4 className="fw-bold mb-3">Image Gallery</h4>
        {service.images.map((img, index) => (
          <div key={index} className="col-md-2 col-sm-4">
            <img
              src={img}
              className={`img-fluid rounded shadow ${selectedImage === img ? 'border-primary border-3' : ''}`}
              alt={`${service.title} ${index + 1}`}
              style={{ height: '120px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default ServiceDetails;
