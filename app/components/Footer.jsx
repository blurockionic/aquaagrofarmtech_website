import Image from "next/image";
import React from "react";
import logo from "../images/icon 2.png";
import fb from "../images/Facebook.svg";
import insta from "../images/Instagram.svg";
import link from "../images/LinkedIn.svg";
import x from "../images/X.svg";
import youtube from "../images/Youtube.svg";

const Footer = () => {
  return (
    <div className="w-full px-6 py-10 sm:px-10 md:px-16 lg:py-20 bg-beige flex flex-col gap-12 lg:gap-20">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:gap-32 gap-10">
        {/* Left Section */}
        <div className="lg:w-[700px] flex flex-col gap-6">
          <div className="flex items-center gap-5">
            <Image className="w-16 h-16" src={logo} alt="Logo" />
            <div className="text-olive font-merriweather text-2xl md:text-3xl font-bold leading-8 lg:leading-12">
              AQUA AGRO FARMTECH
            </div>
          </div>
          <div className="text-black text-sm md:text-base font-merriweather font-normal">
            Join our newsletter to stay up to date on features and releases.
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 p-3 border border-black rounded-xl outline-none text-sm md:text-base text-gray-600 font-roboto"
              />
              <button className="h-12 px-6 py-3 border border-black rounded-xl flex justify-center items-center hover:bg-[#B5651D]">
                <span className="text-black hover:text-white font-roboto text-sm md:text-base cursor-pointer">
                  Subscribe
                </span>
              </button>
            </div>
            <div className="text-xs text-black font-roboto">
              By subscribing you agree with our{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>{" "}
              and provide consent to receive updates from our company.
            </div>
          </div>
        </div>

        {/* Column One */}
        <div className="flex-1">
          <div className="text-black text-base font-roboto font-semibold">
            Column One
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {["Link One", "Link Two", "Link Three", "Link Four", "Link Five"].map(
              (link, index) => (
                <div
                  key={index}
                  className="text-black text-sm font-roboto font-normal"
                >
                  {link}
                </div>
              )
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <div className="text-black text-base font-roboto font-semibold">
            Follow Us
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {[
              { name: "Facebook", logo: fb },
              { name: "Instagram", logo: insta },
              { name: "X", logo: x },
              { name: "LinkedIn", logo: link },
              { name: "Youtube", logo: youtube },
            ].map((social, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={social.logo}
                  className="w-6 h-6"
                  alt={`${social.name} icon`}
                />
                <div className="text-black text-sm font-roboto font-normal">
                  {social.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full flex flex-col gap-8">
        <div className="h-px bg-black" />
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
          <div className="text-black text-sm font-roboto">
            © 2024 Aqua Agro Farmtech. All rights reserved.
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (policy, index) => (
                <div
                  key={index}
                  className="text-black text-sm font-roboto underline cursor-pointer"
                >
                  {policy}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
