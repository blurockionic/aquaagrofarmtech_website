import React from 'react';

const ContactOffice = () => {
  return (
    <div className="h-auto md:h-[100vh] px-4 sm:px-16 py-28 bg-[#b5651d] flex flex-col justify-start items-center gap-20">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-white text-5xl font-bold font-['Merriweather Sans'] leading-tight">
          Office Location
        </h2>
        <p className="text-[#e0e0e0] text-lg font-medium font-['Roboto'] leading-normal mt-4">
          Lane -03, Lohara Colony, Simran Palace, Ludhiana, Punjab, 141006
        </p>
      </div>

      {/* Images and Map Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <img 
          className="w-full sm:w-[404px] h-auto sm:h-[404px] object-cover rounded-lg" 
          src="https://via.placeholder.com/404x404" 
          alt="Office View 1" 
        />
        <div className="w-full sm:w-[404px] h-auto sm:h-[404px] rounded-lg overflow-hidden">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.542145835572!2d75.87719821456618!3d30.901438081701188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f7d40d32f8c91%3A0x1cd1b36a1912877f!2sLane%20-%2003%2C%20Lohara%20Colony%2C%20Simran%20Palace%2C%20Ludhiana%2C%20Punjab%2C%20141006!5e0!3m2!1sen!2sin!4v1697956123083!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactOffice;
