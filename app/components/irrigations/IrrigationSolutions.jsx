"use client";
import Image from "next/image";
import React from "react";
import irrigation2 from '../../images/irrigation/irrigation2.png';

// Heading Section Component
const HeadingSection = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        height: "249px",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "24px",
        display: "flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          color: "black",
          fontSize: "40px",
          fontFamily: "Merriweather Sans",
          fontWeight: 700,
          lineHeight: "48px",
          wordWrap: "break-word",
        }}
      >
        Innovative Irrigation Solutions for Sustainable Farming
      </div>
      <div
        style={{
          alignSelf: "stretch",
          color: "black",
          fontSize: "18px",
          fontFamily: "Roboto",
          fontWeight: 400,
          lineHeight: "27px",
          wordWrap: "break-word",
        }}
      >
        At Aqua Agro, we are committed to transforming agriculture through advanced irrigation systems. Our mission is to deliver state-of-the-art solutions that boost productivity while conserving resources.
      </div>
    </div>
  );
};

// Vision and Mission Section Component
const VisionMissionSection = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        height: "132px",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "16px",
        display: "flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          paddingTop: "8px",
          paddingBottom: "8px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "24px",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "16px",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "black",
              fontSize: "20px",
              fontFamily: "Roboto",
              fontWeight: 700,
              lineHeight: "28px",
              wordWrap: "break-word",
            }}
          >
            Our Vision
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "black",
              fontSize: "16px",
              fontFamily: "Merriweather Sans",
              fontWeight: 400,
              lineHeight: "24px",
              wordWrap: "break-word",
            }}
          >
            To be a leader in innovative water management and sustainable farming practices.
          </div>
        </div>

        <div
          style={{
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "16px",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "black",
              fontSize: "20px",
              fontFamily: "Roboto",
              fontWeight: 700,
              lineHeight: "28px",
              wordWrap: "break-word",
            }}
          >
            Our Mission
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "black",
              fontSize: "16px",
              fontFamily: "Merriweather Sans",
              fontWeight: 400,
              lineHeight: "24px",
              wordWrap: "break-word",
            }}
          >
            Empowering farmers with efficient irrigation technology for improved yields and responsible water use.
          </div>
        </div>
      </div>
    </div>
  );
};

// Image Section Component
const ImageSection = () => {
  return (
    <Image
      style={{ width: "640px", height: "640px", borderRadius: "16px" }}
      src={irrigation2}
      alt="Irrigation Solutions"
    />
  );
};

// Main Irrigation Solutions Component
const IrrigationSolutions = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: "64px",
        paddingRight: "64px",
        paddingTop: "112px",
        paddingBottom: "112px",
        background: "#F5F5DC",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "80px",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "80px",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "32px",
            display: "inline-flex",
          }}
        >
          <HeadingSection />
          <VisionMissionSection />
        </div>
        <ImageSection />
      </div>
    </div>
  );
};

export default IrrigationSolutions;
