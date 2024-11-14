import React from "react";

const ContactSection = () => {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      padding: "48px 64px",
      background: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "40px"
    }}>
      <div style={{
        height: "109px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "16px"
      }}>
        <div></div>
        <div style={{
          alignSelf: "stretch",
          height: "109px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "24px"
        }}>
          <div style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "black",
            fontSize: "48px",
            fontFamily: "Merriweather Sans",
            fontWeight: 700,
            lineHeight: "57.6px",
            wordWrap: "break-word"
          }}>
            Get in Touch
          </div>
          <div style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "black",
            fontSize: "18px",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: "27px",
            wordWrap: "break-word"
          }}>
            We welcome your inquiries; feel free to write to us.
          </div>
        </div>
      </div>

      <div style={{
        alignSelf: "stretch",
        height: "154px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "64px"
      }}>
        <div style={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "48px"
        }}>
          {[
            {
              title: "Email",
              info: "aquaagrofarmtech@gmail.com",
              backgroundColor: "#FF9800",
            },
            {
              title: "Phone",
              info: "+919878106932",
              backgroundColor: "#FF9800",
            },
            {
              title: "Office",
              info: "Ludhiana, Punjab, 141006",
              backgroundColor: "#FF9800",
            }
          ].map((contact, index) => (
            <div key={index} style={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "24px"
            }}>
              <div style={{ width: "48px", height: "48px", position: "relative" }}>
                <div style={{
                  width: "40px",
                  height: "32px",
                  left: "4px",
                  top: "8px",
                  position: "absolute",
                  background: contact.backgroundColor
                }}></div>
              </div>
              <div style={{
                alignSelf: "stretch",
                height: "82px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "16px"
              }}>
                <div style={{
                  alignSelf: "stretch",
                  textAlign: "center",
                  color: contact.backgroundColor,
                  fontSize: "32px",
                  fontFamily: "Merriweather Sans",
                  fontWeight: 700,
                  lineHeight: "41.6px",
                  wordWrap: "break-word"
                }}>
                  {contact.title}
                </div>
                <div style={{
                  alignSelf: "stretch",
                  textAlign: "center",
                  color: "black",
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  lineHeight: "24px",
                  wordWrap: "break-word"
                }}>
                  {contact.info}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
