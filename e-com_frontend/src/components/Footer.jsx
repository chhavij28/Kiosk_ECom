import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container my-5 mt-5">
      <div className="row gy-4">
        {/* Logo and Description */}
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 text-start">
          <Link to="/">
            <img src={assets.logo} className="mb-3" style={{ width: '8rem', cursor: 'pointer' }} alt="Logo" />
          </Link>
          <p className="text-secondary">
            Thank you for shopping with Kiosk 9&frac34;! Follow us on social media for updates on new arrivals, exclusive offers, and more. Your fandom journey starts here—let's make it unforgettable!
          </p>
        </div>  

        {/* Company Links */}
        <div className="col-6 col-sm-3 col-md-3 col-lg-3 text-start">
          <p className="mb-3 h5">COMPANY</p>
          <ul className="list-unstyled text-secondary">
            <li><Link to="/" className="text-decoration-none text-secondary">Home</Link></li>
            <li><Link to="/about" className="text-decoration-none text-secondary">About Us</Link></li>
            <li><Link to="/about" className="text-decoration-none text-secondary">Delivery</Link></li>
            <li><Link to="/about" className="text-decoration-none text-secondary">Privacy & Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-6 col-sm-3 col-md-3 col-lg-3 text-start">
          <p className="mb-3 h5">GET IN TOUCH</p>
          <ul className="list-unstyled text-secondary">
            <li>+91 9876543210</li>
            <li>contact@kiosk9&3/4.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr />
      <p className="text-center text-muted py-3 small">
        © 2025 Kiosk 9&frac34;. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
