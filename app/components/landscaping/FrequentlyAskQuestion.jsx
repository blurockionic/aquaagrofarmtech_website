"use client"
import React, { useState } from "react";

const FrequentlyAskQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is landscaping?",
      answer:
        "Landscaping involves modifying the visible features of an outdoor area, including plants, trees, and terrain, to enhance its aesthetic and functional value.",
    },
    {
      question: "How does it work?",
      answer:
        "Our landscaping services include design, installation, and maintenance. We work with you to plan a landscape that meets your vision, and then execute the design using sustainable practices, ensuring long-lasting results.",
    },
    {
      question: "What are the benefits?",
      answer:
        "Landscaping improves the beauty, value, and functionality of your outdoor spaces. It helps control soil erosion, conserves water, and creates a sustainable environment for plant life.",
    },
    {
      question: "Are they cost-effective?",
      answer:
        "Yes, while the initial setup may involve some investment, a well-designed landscape adds long-term value to your property and can reduce future maintenance costs.",
    },
    {
      question: "How long do they last?",
      answer:
        "With proper care and regular maintenance, a landscape can thrive for decades. Regular upkeep is essential for maintaining the health and appearance of plants and outdoor features.",
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
          Find answers to your most common questions about our landscaping
          services.
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
              <div className="w-8 h-8 relative">
                <div
                  className={`w-4 h-2 absolute top-1 left-1 transform ${
                    openIndex === index ? "rotate-0" : "rotate-180"
                  } bg-black border border-black`}
                ></div>
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

export default FrequentlyAskQuestion;
