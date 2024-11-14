import React from 'react';

// Heading Section Component
const HeadingSection = () => {
  return (
    <div
      style={{
        width: '567px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '16px',
        display: 'inline-flex',
      }}
    >
      <div
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            color: 'black',
            fontSize: '16px',
            fontFamily: 'Roboto',
            fontWeight: 600,
            lineHeight: '24px',
            wordWrap: 'break-word',
          }}
        >
          Innovation
        </div>
      </div>
      <div style={{ alignSelf: 'stretch' }}>
        <span
          style={{
            color: 'black',
            fontSize: '48px',
            fontFamily: 'Merriweather Sans',
            fontWeight: 700,
            lineHeight: '57.60px',
            wordWrap: 'break-word',
          }}
        >
          Explore Our Comprehensive{' '}
        </span>
        <span
          style={{
            color: '#1C84FA',
            fontSize: '48px',
            fontFamily: 'Merriweather Sans',
            fontWeight: 700,
            lineHeight: '57.60px',
            wordWrap: 'break-word',
          }}
        >
          Irrigation
        </span>
        <span
          style={{
            color: 'black',
            fontSize: '48px',
            fontFamily: 'Merriweather Sans',
            fontWeight: 700,
            lineHeight: '57.60px',
            wordWrap: 'break-word',
          }}
        >
          {' '}
          Services
        </span>
      </div>
    </div>
  );
};

// Description Section Component
const DescriptionSection = () => {
  return (
    <div
      style={{
        flex: '1 1 0',
        color: 'black',
        fontSize: '18px',
        fontFamily: 'Roboto',
        fontWeight: 400,
        lineHeight: '27px',
        wordWrap: 'break-word',
      }}
    >
      At Aqua Agro, we specialize in delivering customized irrigation systems tailored to meet your agricultural requirements. Our services include system installation, regular maintenance, and expert consultation, ensuring your fields receive the optimal water supply. Harness the power of modern irrigation technology and sustainable practices with our dedicated team.
    </div>
  );
};

// Service Item Component
const ServiceItem = ({ icon, title, description }) => {
  return (
    <div
      style={{
        flex: '1 1 0',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '24px',
        display: 'inline-flex',
      }}
    >
      <div style={{ width: '48px', height: '48px', background: 'black' }}>{icon}</div>
      <div
        style={{
          alignSelf: 'stretch',
          color: 'black',
          fontSize: '32px',
          fontFamily: 'Merriweather Sans',
          fontWeight: 700,
          lineHeight: '41.60px',
          wordWrap: 'break-word',
        }}
      >
        {title}
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          color: 'black',
          fontSize: '16px',
          fontFamily: 'Merriweather Sans',
          fontWeight: 400,
          lineHeight: '24px',
          wordWrap: 'break-word',
        }}
      >
        {description}
      </div>
    </div>
  );
};

// Contact Us Button Component
const ContactUsButton = () => {
  return (
    <div
      style={{
        borderRadius: '16px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '16px',
        display: 'inline-flex',
      }}
    >
      <div
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '12px',
          paddingBottom: '12px',
          background: '#B5651D',
          borderRadius: '8px',
          border: '1px #4CAF50 solid',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          display: 'flex',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: '16px',
            fontFamily: 'Merriweather Sans',
            fontWeight: 700,
            lineHeight: '24px',
            wordWrap: 'break-word',
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

// Main Component - IrrigationServices
const IrrigationServices = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '80px',
        display: 'inline-flex',
      }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '80px',
          display: 'inline-flex',
        }}
      >
        <HeadingSection />
        <DescriptionSection />
      </div>

      <div
        style={{
          alignSelf: 'stretch',
          height: '228.05px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '64px',
          display: 'flex',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '48px',
            display: 'inline-flex',
          }}
        >
          <ServiceItem
            title="Expert Irrigation System Design and Installation"
            description="We install efficient irrigation systems to boost your crop productivity."
            icon={<div></div>}
          />
          <ServiceItem
            title="Reliable Maintenance for Maximum Efficiency"
            description="Our maintenance services ensure your system runs smoothly at all times."
            icon={<div></div>}
          />
          <ServiceItem
            title="Expert Agricultural Consultation"
            description="Receive expert guidance tailored to your unique agricultural needs."
            icon={<div></div>}
          />
        </div>
      </div>

      <ContactUsButton />
    </div>
  );
};

export default IrrigationServices;
