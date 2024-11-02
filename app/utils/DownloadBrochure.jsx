// components/DownloadBrochure.js
import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadBrochure = () => {
  return (
    <div className="fixed hidden md:flex rounded-md -left-28 top-1/2 transform -translate-y-1/2 -rotate-90 px-4 py-2 bg-red-500 text-white w-[250px]">
      <a
        href="/brochure/aaf-e-brochure.pdf" // Direct path from public folder
        target="_blank"
        rel="noopener noreferrer" // For security when using target="_blank"
        download
        className="flex items-center justify-center gap-2"
      >
        <FaDownload size={20} />
        <span>Download e-Brochure</span>
      </a>
    </div>
  );
};

export default DownloadBrochure;
