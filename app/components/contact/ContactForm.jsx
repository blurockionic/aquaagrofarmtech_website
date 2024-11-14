"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    return (
    <>
        <div className="h-auto px-6 md:px-16 py-16 bg-[#f5f5dc] flex flex-col justify-start items-start gap-12">
            {/* Section Heading */}
            <div className="flex flex-col gap-4">
                <h2 className="text-black text-base font-semibold font-['Roboto']">
                Contact
                </h2>
                <h1 className="text-black text-3xl md:text-5xl font-bold font-['Merriweather Sans'] leading-tight md:leading-[57.60px]">
                Let’s connect with us.
                </h1>
                <p className="text-black text-lg font-normal font-['Roboto']">
                Please fill the details below.
                </p>
            </div>

            {/* Form Section */}
            <form className="w-full max-w-lg flex flex-col gap-6">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                <label
                    htmlFor="name"
                    className="text-black text-base font-normal font-['Merriweather Sans']"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-3 rounded-2xl border text-black border-black focus:outline-none focus:border-[#b5651d] transition duration-200"
                    placeholder="Enter your name"
                />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                    className="text-black text-base font-normal font-['Merriweather Sans']"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-3 rounded-2xl border border-black text-black focus:outline-none focus:border-[#b5651d] transition duration-200"
                    placeholder="Enter your email"
                />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                <label
                    htmlFor="message"
                    className="text-black text-base font-normal font-['Merriweather Sans']"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="p-3 rounded-2xl border border-black text-black focus:outline-none focus:border-[#b5651d] transition duration-200"
                    placeholder="Write your message..."
                />
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                className="w-fit px-6 py-3 bg-[#b5651d] text-white rounded-lg border border-[#b5651d] hover:bg-[#92501a] transition duration-300"
                >
                Send Message
                </button>
            </form>
        </div>
    </>
    );
};

export default ContactForm;
