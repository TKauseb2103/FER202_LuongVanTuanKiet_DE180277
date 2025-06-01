import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Welcome to Our Website</h2>
          <p>This is the landing page where you can find the latest updates and features.</p>
        </div>
        <div className="col-md-4">
          <h2>Featured Services</h2>
          <p>Explore our services and offerings that cater to your needs.</p>
        </div>
        <div className="col-md-4">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any inquiries or support.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;