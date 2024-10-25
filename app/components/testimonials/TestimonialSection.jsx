import React from 'react';
import Image from 'next/image';
import Vansh from '../../images/testimonials/Vansh.png';
import icon1 from '../../images/testimonials/icon1.png'; 
import icon2 from '../../images/testimonials/icon2.png';

const TestimonialsSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.textBlock}>
          <div style={styles.textSection}>
            <div style={styles.headingWrapper}>
              <div style={styles.subheading}>Testimonials</div>
            </div>
            <div style={styles.headingContent}>
              <div style={styles.mainHeading}>
                Customer reviews are important to us.
              </div>
              <div style={styles.subText}>
                <span>Our customers' </span>
                <span style={styles.highlight}>satisfaction</span>
                <span> is our priority. Their reviews inspire us and help us improve.</span>
              </div>
            </div>
          </div>
          <div style={styles.feedbackWrapper}>
            <div style={styles.feedbackContent}>
              <Image
                src={icon1}
                alt="Customer Experience Icon"
                style={styles.iconImage}
              />
              <div style={styles.feedbackTitle}>Customer Experience</div>
              <div style={styles.feedbackText}>
                Our customers have appreciated the quality of our services.
              </div>
            </div>
            <div style={styles.feedbackContent}>
              <Image
                src={icon2}
                alt="Positive Feedback Icon"
                style={styles.iconImage}
              />
              <div style={styles.feedbackTitle}>Positive Feedbacks</div>
              <div style={styles.feedbackText}>
                Customers say our services are unique and effective.
              </div>
            </div>
          </div>
          <div style={styles.buttonWrapper}>
            <div style={styles.button}>Learn More</div>
          </div>
        </div>
        <Image
          style={styles.image}
          src={Vansh}
          alt="Customer Experience"
        />
      </div>
    </div>
  );
};

// Define responsive styles using JS objects
const styles = {
  container: {
    width: '100%',
    height: '100%',
    padding: '112px 64px',
    background: '#F5F5DC',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '80px',
    // Adjust padding for mobile and tablet
    '@media (max-width: 1024px)': { // Tablet
      padding: '80px 48px',
    },
    '@media (max-width: 768px)': { // Mobile
      padding: '64px 24px',
      gap: '40px',
    },
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '80px',
    width: '100%',
    // Stack items vertically for mobile
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '40px',
    },
  },
  textBlock: {
    flex: '1 1 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '32px',
    // Reduce height for mobile devices
    height: 'auto',
  },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  subheading: {
    color: 'black',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,
    lineHeight: '24px',
    // Adjust font size for mobile
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  },
  headingContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
  },
  mainHeading: {
    color: 'black',
    fontSize: '48px',
    fontFamily: 'Merriweather Sans, sans-serif',
    fontWeight: 700,
    lineHeight: '57.60px',
    // Adjust font size for tablet and mobile
    '@media (max-width: 1024px)': {
      fontSize: '40px',
      lineHeight: '50px',
    },
    '@media (max-width: 768px)': {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  subText: {
    color: 'black',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    lineHeight: '27px',
    // Adjust font size for tablet and mobile
    '@media (max-width: 1024px)': {
      fontSize: '16px',
      lineHeight: '24px',
    },
    '@media (max-width: 768px)': {
      fontSize: '14px',
      lineHeight: '21px',
    },
  },
  highlight: {
    color: '#2E7D32',
  },
  feedbackWrapper: {
    display: 'flex',
    gap: '24px',
    // Stack feedbacks for mobile
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '16px',
    },
  },
  feedbackContent: {
    flex: '1 1 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  iconImage: {
    width: '28px',
    height: '28px',
  },
  feedbackTitle: {
    color: 'black',
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    lineHeight: '28px',
    // Adjust font size for mobile
    '@media (max-width: 768px)': {
      fontSize: '18px',
    },
  },
  feedbackText: {
    color: 'black',
    fontSize: '16px',
    fontFamily: 'Merriweather Sans, sans-serif',
    fontWeight: 400,
    lineHeight: '24px',
    // Adjust font size for mobile
    '@media (max-width: 768px)': {
      fontSize: '14px',
      lineHeight: '21px',
    },
  },
  buttonWrapper: {
    display: 'inline-flex',
    padding: '12px 24px',
    background: '#B5651D',
    borderRadius: '8px',
    border: '1px solid #B5651D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    lineHeight: '24px',
  },
  image: {
    width: '640px',
    height: '640px',
    borderRadius: '16px',
    // Adjust image size for mobile
    '@media (max-width: 1024px)': {
      width: '480px',
      height: '480px',
    },
    '@media (max-width: 768px)': {
      width: '320px',
      height: '320px',
    },
  },
};

export default TestimonialsSection;
