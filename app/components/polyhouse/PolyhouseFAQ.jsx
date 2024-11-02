"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import Lucide icons

const PolyhouseFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a polyhouse?",
      answer:
        "A polyhouse is a greenhouse made from a structure covered with a transparent material, typically plastic. It creates a controlled environment that optimizes conditions for plant growth. This allows for year-round cultivation, protecting crops from adverse weather.",
    },
    {
      question: "How does it work?",
      answer:
        "Polyhouses utilize passive solar heating and ventilation systems to maintain optimal temperature and humidity levels. The transparent covering allows sunlight to penetrate while shielding plants from pests and harsh weather. This results in healthier crops and increased yields.",
    },
    {
      question: "What are the benefits?",
      answer:
        "Polyhouses offer numerous benefits including extended growing seasons, higher crop yields, and reduced pesticide use. They also provide a controlled environment that minimizes the impact of climate variability. This leads to more sustainable farming practices.",
    },
    {
      question: "Are they cost-effective?",
      answer:
        "While the initial investment in a polyhouse may be higher than traditional farming methods, the long-term savings and increased productivity often outweigh the costs. Farmers can achieve quicker returns on investment due to higher crop yields. Additionally, they reduce the need for chemical inputs.",
    },
    {
      question: "How long do they last?",
      answer:
        "With proper maintenance, polyhouses can last anywhere from 5 to 15 years. Regular inspections and timely repairs are essential to prolong their lifespan. Investing in quality materials and construction can also enhance durability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-20 mx-auto p-8 bg-white flex flex-col gap-20">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold text-black mb-4">FAQs</h1>
        <p className="text-lg text-black">
          Find answers to your most common questions about our Polyhouse services.
        </p>
      </div>
      <div className="border-t border-black pt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-black py-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold text-black">
                {faq.question}
              </span>
              <div className="w-8 h-8 relative flex justify-center items-center">
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-black" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-black" />
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-3">
                <p className="text-base text-black">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-bold text-black mb-2">
          Still have questions?
        </h2>
        <p className="text-lg text-black">We're here to help!</p>
        <div className="mt-4">
          <button className="bg-[#B5651D] text-white py-2 px-4 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolyhouseFAQ;
