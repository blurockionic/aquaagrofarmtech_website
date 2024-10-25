import React from 'react';

const Testimonials = () => {
  return (
    <div style={styles.container}>
      <div style={styles.testimonialsContainer}>
        <div style={styles.testimonialsInnerContainer}>
          <div style={styles.titleContainer}>
            <div style={styles.titleText}>Testimonials</div>
          </div>
          <div style={styles.headingContainer}>
            <div style={styles.mainHeading}>Our Happy Customers</div>
            <div style={styles.subHeading}>
              The reviews of our satisfied customers reflect the quality of our work for you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define responsive styles
const styles = {
  container: {
    width: '100%',
    height: '100%',
    padding: '64px',
    background: 'white',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '80px',
    // Responsive adjustments
    '@media (max-width: 1024px)': { // Tablet
      paddingLeft: '48px',
      paddingRight: '48px',
      paddingTop: '96px',
      paddingBottom: '96px',
      gap: '60px',
    },
    '@media (max-width: 768px)': { // Mobile
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '64px',
      paddingBottom: '64px',
      gap: '40px',
    },
  },
  testimonialsContainer: {
    height: '158px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '32px',
  },
  testimonialsInnerContainer: {
    alignSelf: 'stretch',
    height: 'auto', // Allow auto height for better responsiveness
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '16px',
  },
  titleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'inline-flex',
  },
  titleText: {
    color: 'black',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '600',
    lineHeight: '24px',
    wordWrap: 'break-word',
    // Responsive adjustments
    '@media (max-width: 768px)': { // Mobile
      fontSize: '14px',
    },
  },
  headingContainer: {
    alignSelf: 'stretch',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '24px',
  },
  mainHeading: {
    alignSelf: 'stretch',
    color: 'black',
    fontSize: '56px',
    fontFamily: 'Merriweather Sans, sans-serif',
    fontWeight: '700',
    lineHeight: '67.20px',
    wordWrap: 'break-word',
    // Responsive adjustments
    '@media (max-width: 1024px)': { // Tablet
      fontSize: '48px',
      lineHeight: '56px',
    },
    '@media (max-width: 768px)': { // Mobile
      fontSize: '36px',
      lineHeight: '44px',
    },
  },
  subHeading: {
    alignSelf: 'stretch',
    color: 'black',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '400',
    lineHeight: '27px',
    wordWrap: 'break-word',
    // Responsive adjustments
    '@media (max-width: 1024px)': { // Tablet
      fontSize: '16px',
      lineHeight: '24px',
    },
    '@media (max-width: 768px)': { // Mobile
      fontSize: '14px',
      lineHeight: '21px',
    },
  },
};

export default Testimonials;
