import React from "react";
import "../App.css";

const NewsletterForm = () => {
  return (
    <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
