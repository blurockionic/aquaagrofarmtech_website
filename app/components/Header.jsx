"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/icon 2.png"; // Assuming the image is in `public/images`
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const Header = () => {
  const router = useRouter(); // Initialize the router
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (name, path) => {
    setActiveLink(name); // Set the active link
    setIsOpen(false); // Close the menu
    router.push(path); // Navigate to the route
  };

  return (
    <header
      className="w-full flex justify-between items-center px-7 py-3"
      style={{ background: "#B5651D" }}
    >
      {/* Logo */}
      <div>
        <Image
          src={logo}
          alt="logo"
          width={72}
          height={72}
          className="cursor-pointer"
        />
      </div>

      {/* Hamburger Button (Visible on small screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links (Hidden on small screens) */}
      <ul className="hidden md:flex md:flex-row gap-8 text-white items-center">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/pages/about" },
          { name: "Services", path: "/pages/services" },
          { name: "Projects", path: "/pages/projects" },
          { name: "Gallery", path: "/pages/gallery" },
          { name: "Testimonials", path: "/pages/testimonials" },
          { name: "Awards", path: "/pages/awards" },
          { name: "Contact Us", path: "/pages/contact" },
        ].map(({ name, path }) => (
          <li
            key={name}
            onClick={() => handleLinkClick(name, path)}
            className={`cursor-pointer ${
              activeLink === name ? "border-b-2 border-white" : ""
            } hover:border-b-2 hover:border-white`}
          >
            {name}
          </li>
        ))}
      </ul>

      {/* Mobile Menu (Visible when isOpen is true) */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col absolute top-24 left-0 w-full bg-[#B5651D] text-white items-center md:hidden gap-4 py-6`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Projects", path: "/projects" },
          { name: "Testimonials", path: "/testimonials" },
          { name: "Awards", path: "/awards" },
          { name: "Contact Us", path: "/contact" },
        ].map(({ name, path }) => (
          <li
            key={name}
            onClick={() => handleLinkClick(name, path)}
            className={`cursor-pointer ${
              activeLink === name ? "border-b-2 border-white" : ""
            } hover:border-b-2 hover:border-white`}
          >
            {name}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
