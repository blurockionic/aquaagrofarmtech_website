import React from 'react';

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  return (
    <div
      style={{
        alignSelf: 'stretch',
        height: '168px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
      }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          paddingTop: '20px',
          paddingBottom: '20px',
          borderTop: '1px black solid',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '24px',
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            flex: '1 1 0',
            color: 'black',
            fontSize: '18px',
            fontFamily: 'Roboto',
            fontWeight: 700,
            lineHeight: '27px',
            wordWrap: 'break-word',
          }}
        >
          {question}
        </div>
        <div
          style={{
            width: '32px',
            height: '32px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '16.79px',
              height: '9.50px',
              position: 'absolute',
              background: 'black',
              border: '1px black solid',
              transform: 'rotate(180deg)',
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          paddingBottom: '24px',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '16px',
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            width: '768px',
            color: 'black',
            fontSize: '16px',
            fontFamily: 'Merriweather Sans',
            fontWeight: 400,
            lineHeight: '24px',
            wordWrap: 'break-word',
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

// Contact Button Component
const ContactButton = () => {
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

// FAQs Section Component
const FAQs = () => {
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
          height: '109px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '24px',
          display: 'flex',
        }}
      >
        <div
          style={{
            width: '768px',
            color: 'black',
            fontSize: '48px',
            fontFamily: 'Merriweather Sans',
            fontWeight: 700,
            lineHeight: '57.60px',
            wordWrap: 'break-word',
          }}
        >
          FAQs
        </div>
        <div
          style={{
            color: 'black',
            fontSize: '18px',
            fontFamily: 'Roboto',
            fontWeight: 400,
            lineHeight: '27px',
            wordWrap: 'break-word',
          }}
        >
          Find answers to your most common questions about our irrigation
          systems and services.
        </div>
      </div>

      {/* FAQ Items */}
      <div
        style={{
          alignSelf: 'stretch',
          borderBottom: '1px black solid',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'flex',
        }}
      >
        <FAQItem
          question="What is an irrigation system?"
          answer="An irrigation system is a method of delivering water to crops in a controlled manner, ensuring that plants receive adequate moisture for optimal growth. It helps distribute water evenly, reducing wastage and promoting healthier plants."
        />
        <FAQItem
          question="How does it work?"
          answer="Irrigation systems use pipes, valves, and sprinklers or drip lines to direct water to crops. Sensors and automated controls can be added to monitor soil moisture and adjust water flow, optimizing water usage and minimizing waste."
        />
        <FAQItem
          question="What are the benefits?"
          answer="Irrigation systems provide consistent water supply, leading to improved crop yields and healthier plants. They reduce water wastage, lower labor costs, and can be tailored to specific crop needs, promoting sustainable farming practices."
        />
        <FAQItem
          question="Are they cost-effective?"
          answer="Yes, irrigation systems are cost-effective in the long run. Though there’s an initial setup cost, the increase in crop yield, efficient water use, and labor savings provide a quick return on investment."
        />
        <FAQItem
          question="How long do they last?"
          answer="With proper maintenance, irrigation systems can last 10 to 20 years. Regular checks, timely repairs, and quality materials ensure durability and prolonged lifespan."
        />
      </div>

      {/* Still have questions */}
      <div
        style={{
          height: '157px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '24px',
          display: 'flex',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            height: '85px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px',
            display: 'flex',
          }}
        >
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
            Still have questions?
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              color: 'black',
              fontSize: '18px',
              fontFamily: 'Roboto',
              fontWeight: 400,
              lineHeight: '27px',
              wordWrap: 'break-word',
            }}
          >
            We&apos;re here to help!
          </div>
        </div>
        <ContactButton />
      </div>
    </div>
  );
};

export default FAQs;
