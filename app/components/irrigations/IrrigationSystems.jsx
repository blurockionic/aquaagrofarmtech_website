import React from "react";
import Image from 'next/image';
import img1 from '../../images/irrigation/img1.png';
import img3 from '../../images/irrigation/img3.png';
import img7 from '../../images/irrigation/img7.png';
import img5 from '../../images/irrigation/img5.png';
import img6 from '../../images/irrigation/img6.png';
import img4 from '../../images/irrigation/img4.png';


const IrrigationSystems = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "32px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "32px",
      }}
    >
      {/* Title Section */}
      <div
        style={{
          alignSelf: "stretch",
          flex: "1 1 0",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "32px",
          }}
        >
          <div
            style={{
              height: "185px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            <div style={{ alignSelf: "stretch" }}>
              <span
                style={{
                  color: "#1C84FA",
                  fontSize: "56px",
                  fontFamily: "Merriweather Sans",
                  fontWeight: 700,
                  lineHeight: "67.20px",
                }}
              >
                Irrigation Systems
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "56px",
                  fontFamily: "Merriweather Sans",
                  fontWeight: 700,
                  lineHeight: "67.20px",
                }}
              >
                {" "}
                that Transform Your Landscape
              </span>
            </div>
            <div
              style={{
                color: "black",
                fontSize: "18px",
                fontFamily: "Roboto",
                fontWeight: 400,
                lineHeight: "27px",
              }}
            >
              Experience the future of farming with our advanced irrigation
              systems designed for optimal efficiency.
            </div>
          </div>
        </div>
        <Image
          style={{ width: "489px", height: "206px", borderRadius: "32px" }}
          src={img1}
          alt="Irrigation system preview"
        />
      </div>

      {/* Image Grid */}
      <div
        style={{
          alignSelf: "stretch",
          height: "540px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "32px",
        }}
      >
        <Image
          style={{ width: "207px", height: "540px", borderRadius: "32px" }}
          src={img7}
          alt="Gallery Image 1"
        />
        <Image
          style={{ width: "802px", height: "540px", borderRadius: "32px" }}
          src={img3}
          alt="Gallery Image 2"
        />
        <Image
          style={{ width: "303px", height: "540px", borderRadius: "32px" }}
          src={img4}
          alt="Gallery Image 3"
        />
      </div>

      {/* Final Section with 3 Images */}
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "32px",
        }}
      >
        <Image
          style={{ width: "575px", height: "206px", borderRadius: "32px" }}
          src={img5}
          alt="Section Image 1"
        />
        <div
          style={{
            width: "358px",
            height: "206px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <Image
            style={{ alignSelf: "stretch", borderRadius: "32px" }}
            src={img6}
            alt="Section Image 2"
          />
        </div>
        <Image
          style={{ width: "379px", height: "206px", borderRadius: "32px" }}
          src={img4}
          alt="Section Image 3"
        />
      </div>
    </div>
  );
};

export default IrrigationSystems;
