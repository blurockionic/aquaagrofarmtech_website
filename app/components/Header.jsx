import Image from "next/image";
import React from "react";
import logo from "../images/icon 2.png"; // Assuming the image is in `public/images`

const Header = () => {
  return (
    <div
      style={{ background: "#B5651D" }}
      className="w-full flex justify-between items-center px-7 py-3"
    >
      <div>
        <Image src={logo} alt="logo" width={72} height={72} className="cursor-pointer"/>
      </div>

      <ul className="flex flex-row gap-8 text-white items-center">
        <li className="hover:border-b-2 hover:border-white cursor-pointer">Home</li>
        <li className="hover:border-b-2 hover:border-white cursor-pointer">About Us</li>
        <li className="hover:border-b-2 hover:border-white cursor-pointer">Services</li>
        <li className="hover:border-b-2 hover:border-white cursor-pointer">Projects</li>
        <li className="hover:border-b-2 hover:border-white cursor-pointer">Testimonials</li>
        <li className="hover:border-b-2 hover:border-white cursor-pointer">Awards</li>
        <li className="hover:border-b-2 hover:border-white cursor-pointer">Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
