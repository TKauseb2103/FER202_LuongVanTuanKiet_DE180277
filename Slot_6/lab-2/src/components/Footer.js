import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;