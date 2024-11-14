import React from "react";
import "../../App.css";
import Image from "next/image";
import img3 from "/public/images/aboutpics/director.png"; // Import the Image component from Next.js

const DirectorInsight = () => {
  return (
    <section className="py-20 flex flex-col md:flex-row justify-between md:justify-start items-center md:items-start">
      <div className="px-6 md:px-24 w-full md:w-1/2 flex flex-col justify-start items-start">
        <h2 className="text-3xl font-bold">Director&apos;s Insight</h2>
        <p className="mt-5">
          Driving Innovation in Sustainable Agriculture Solutions
        </p>
        <p className="mt-5 text-justify">
          With over 8 years of hands-on experience in farming and landscaping,
          our founder has led Aqua Agro to become a leader in agro-tech
          solutions across India.
        </p>
        <p className="mt-5 text-justify">
          For me, agriculture is about growing not only crops but sustainable
          futures for communities across India.
        </p>
        <p className="mt-5 text-justify">
          At Aqua Agro Farmtech, we strive to revolutionize sustainable farming
          with innovative polyhouse solutions, efficient irrigation systems, and
          high-quality landscaping services.
        </p>
      </div>
      <div className="w-full md:w-1/2 px-6 md:px-64 mt-10 md:mt-0">
        <div className="border py-2 rounded-lg flex flex-col justify-center items-center">
          <Image src={img3} alt="Ashish Goswami" width={200} height={200} />
          <h3 className="text-lg font-bold mt-3">Ashish Goswami</h3>
          <p>Director</p>
          <p className="mt-5 text-justify px-10 text-sm">
            Passionate about sustainable agriculture and committed to
            innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectorInsight;