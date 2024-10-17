import Image from "next/image";
import React from "react";
import logo from "../images/icon 2.png";

const Footer = () => {
  return (
    <div className="w-full h-full px-16 py-20 bg-beige flex flex-col justify-start items-start gap-20">
      <div className="w-full h-64 flex justify-between items-start gap-32 p">
        <div className="w-[500px] flex flex-col justify-start items-start gap-6">
          <div className="w-full flex justify-start items-center gap-6">
            <div className="relative w-24 h-24">
              <Image
                className="absolute w-18 h-18 left-0 top-0"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="w-[502px] text-olive font-merriweather text-3xl font-bold leading-12">
              AQUA AGRO FARMTECH
            </div>
          </div>
          <div className="w-full text-black text-base font-merriweather font-normal leading-6">
            Join our newsletter to stay up to date on features and releases.
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex justify-start items-start gap-4">
              <div className="flex-1 h-12 p-3 border border-black rounded-xl flex justify-start items-center gap-2">
                <input type="email" className="flex-1 text-gray-600 text-base outline-none font-roboto font-normal leading-6"
                  Enter your email
                />
              </div>
              <div className="h-12 px-6 py-3 border border-black rounded-xl flex justify-center items-center gap-2">
                <div className="text-black text-base font-roboto font-normal leading-6">
                  Subscribe
                </div>
              </div>
            </div>
            <div className="w-full">
              <span className="text-black text-xs font-roboto font-normal leading-[18px]">
                By subscribing you agree to with our{" "}
              </span>
              <span className="text-black text-xs font-roboto font-normal underline leading-[18px]">
                Privacy Policy
              </span>
              <span className="text-black text-xs font-roboto font-normal leading-[18px]">
                {" "}
                and provide consent to receive updates from our company.
              </span>
            </div>
          </div>
        </div>
        <div className="h-60 flex justify-start items-start gap-36">
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <div className="w-full text-black text-base font-roboto font-semibold leading-6">
              Column One
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              {[
                "Link One",
                "Link Two",
                "Link Three",
                "Link Four",
                "Link Five",
              ].map((link, index) => (
                <div
                  key={index}
                  className="w-full py-2 text-black text-sm font-roboto font-normal leading-[21px]"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <div className="w-full text-black text-base font-roboto font-semibold leading-6">
              Follow Us
            </div>
            <div className="w-full flex flex-col justify-start items-center">
              {["Facebook", "Instagram", "X", "LinkedIn", "Youtube"].map(
                (social, index) => (
                  <div
                    key={index}
                    className="w-full py-2 flex justify-start items-center gap-3"
                  >
                    <div className="relative w-6 h-6 bg-black" />
                    <div className="text-black text-sm font-roboto font-normal leading-[21px]">
                      {social}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-8">
        <div className="w-full h-px bg-black border border-black" />
        <div className="w-full flex justify-between items-start">
          <div className="text-black text-sm font-roboto font-normal leading-[21px]">
            © 2024 Aqua Agro Farmtech. All rights reserved.
          </div>
          <div className="flex justify-start items-start gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (policy, index) => (
                <div
                  key={index}
                  className="text-black text-sm font-roboto font-normal underline leading-[21px]"
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
