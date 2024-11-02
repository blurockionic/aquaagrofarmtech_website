import React from "react";
import Image from 'next/image';
import mid from '../../images/irrigation/mid.png';

const IrrigationSystemmid = () => {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      padding: "112px 64px",
      background: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "80px"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "80px",
        alignSelf: "stretch"
      }}>
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "32px"
        }}>
          <div style={{
            height: "249px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "24px",
            alignSelf: "stretch"
          }}>
            <div style={{
              color: "black",
              fontSize: "40px",
              fontFamily: "Merriweather Sans",
              fontWeight: 700,
              lineHeight: "48px",
              wordWrap: "break-word"
            }}>
              Unlock the Potential of Your Crops with Our Advanced Irrigation System
            </div>
            <div style={{
              color: "black",
              fontSize: "18px",
              fontFamily: "Roboto",
              fontWeight: 400,
              lineHeight: "27px",
              wordWrap: "break-word"
            }}>
              Our innovative irrigation systems ensure precise water delivery, promoting healthier crops and efficient resource use. Experience the benefits of sustainable water management tailored to your farm's needs.
            </div>
          </div>

          <div style={{
            height: "129px",
            padding: "8px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "16px",
            alignSelf: "stretch"
          }}>
            {[
              "Maximized crop growth through efficient water distribution.",
              "Protection against water wastage and drought conditions.",
              "Sustainable farming practices that enhance environmental health."
            ].map((text, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                alignSelf: "stretch"
              }}>
                <div style={{ width: "16px", height: "16px", position: "relative" }}>
                  <div style={{
                    width: "15.38px",
                    height: "15.33px",
                    background: "#4CAF50",
                    position: "absolute",
                    top: "0.34px",
                    left: "0.33px"
                  }}></div>
                </div>
                <div style={{
                  color: "black",
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  lineHeight: "27px",
                  wordWrap: "break-word"
                }}>{text}</div>
              </div>
            ))}
          </div>
        </div>

        <Image
          style={{ width: "616px", height: "640px", borderRadius: "32px" }}
          src={mid}
          alt="Irrigation System"
        />
      </div>
    </div>
  );
};

export default IrrigationSystemmid;
