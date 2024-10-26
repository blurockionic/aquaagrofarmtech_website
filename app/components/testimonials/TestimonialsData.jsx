import React from 'react';
import '../../App.css';

const testimonialsData = [
  {
    name: 'Anshul Arora',
    review: `I recently hired Aqua Agro Farmtech to design and maintain my garden, and I am very happy with their service. They were professional, knowledgeable, and listened carefully to my requests. My garden now looks absolutely stunning and has become the envy of my neighborhood!`,
    rating: 5,
    imageUrl: 'https://via.placeholder.com/64x64',
  },
  {
    name: 'Vansh Dheer',
    review: `I highly recommend this gardening and farming service to anyone looking to improve the appearance of their outdoor space. They provided exceptional service and attention to detail, and their team was always friendly and respectful.`,
    rating: 4,
    imageUrl: 'https://via.placeholder.com/64x64',
  },
  {
    name: 'Rahul Sharma',
    review: `The team was amazing! They transformed my backyard into a beautiful oasis. The attention to detail and care they took with every plant and feature was impressive. I'm so happy with the result!`,
    rating: 5,
    imageUrl: 'https://via.placeholder.com/64x64',
  },
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i} className="star">⭐</span>
          ))}
      </div>
    );
  };

  return (
    <div className="testimonials-section">
      <div className="section-header">
        <h2>Customer Testimonials</h2>
      </div>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-info">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-img" />
              <div className="testimonial-details">
                <h3>{testimonial.name}</h3>
                {renderStars(testimonial.rating)}
                <p>{testimonial.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
