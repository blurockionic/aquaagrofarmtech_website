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

      {/* Images Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <img 
          className="w-full sm:w-[404px] h-auto sm:h-[404px] object-cover rounded-lg" 
          src="https://via.placeholder.com/404x404" 
          alt="Office View 1" 
        />
        <img 
          className="w-full sm:w-[404px] h-auto sm:h-[404px] object-cover rounded-lg" 
          src="https://via.placeholder.com/404x404" 
          alt="Office View 2" 
        />
      </div>
    </div>
  );
};

export default ContactOffice;
