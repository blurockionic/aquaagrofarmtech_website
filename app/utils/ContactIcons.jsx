// components/ContactIcons.js
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContactIcons = () => {
  return (
    <div style={styles.container} >
      <a
        href="https://wa.me/+919878106932"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
      >
        <FaWhatsapp size={30} color="#ffffff" />
      </a>
      <a href="tel:+919878106932" style={styles.phone}>
        <FaPhoneAlt size={30} color="#ffffff" />
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    backgroundColor: "#22c55e",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textDecoration: "none",
  },
  phone: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    backgroundColor: "#dc2626",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textDecoration: "none",
  },
};

export default ContactIcons;
