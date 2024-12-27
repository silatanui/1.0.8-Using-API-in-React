import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="container my-5 hero">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6">
            
          <h1 className="fw-bold display-5">
            Crafting Space for <span className="text-primary">Enhanced Living.....</span>
          </h1>
          <p className="mt-3 text-muted">
            Our integrated approach to interior and exterior design allows us to provide a comprehensive solution that best meets our clients' needs.
          </p>
          <button className="btn btn-primary mt-3">Get a Quote</button>
        </div>

        {/* Right Images */}
        <div className="col-lg-6 d-flex gap-3 justify-content-center">
          <img
            src="https://wallpapers.com/images/hd/floating-houses-png-37-hr969rz1rqcgrro3.jpg"
            alt="Design 1"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '450px' }}
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="row mt-5 text-center">
        <div className="col-3">
          <h4 className="fw-bold text-success">10+</h4>
          <p className="text-muted">Restaurants</p>
        </div>
        <div className="col-3">
          <h4 className="fw-bold">109</h4>
          <p className="text-muted">Homes</p>
        </div>
        <div className="col-3">
          <h4 className="fw-bold">29</h4>
          <p className="text-muted">CVM</p>
        </div>
        <div className="col-3">
          <h4 className="fw-bold">7</h4>
          <p className="text-muted">Resorts</p>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="row mt-4 text-center">
        <div className="col-12">
          <p>No one knows, works, or dreams quite for its own sake.</p>
          <div className="input-group w-50 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-success">Go</button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
