import React from "react";
import NewsletterForm from "./NewsletterForm";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./images/aqua.png" alt="Aqua Agro Farmtech" />
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <NewsletterForm />
          <p>
          By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
          </p>
        </div>

        <div className="footer-links">
          <h4>Column One</h4>
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
            <li>Link Four</li>
            <li>Link Five</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Aqua Agro Farmtech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
