import React from "react";
import Image from "next/image";
import "../styles/heroSection.css";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-700">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="/images/Lawfirm_bg.jpg"
          alt="Legal Advisory Background"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 mix-blend-multiply" /> */}
      </div>

      {/* Hero Content */}
      <div className="description relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-48 flex flex-col items-center ">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-center lg:text-left shadow-lg">
          Tailored Legal Advice
          <br />
          <span className="block text-black-00">Your Rights, Our Focus</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 text-center lg:text-left max-w-lg lg:max-w-none">
          Mahamaya law is here to guide you through every legal hurdle. With a
          client-first approach, we ensure your case receives the attention it
          deserves to secure the best possible outcome.
        </p>
        <a
          href="#"
          className="mt-10 inline-block bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-600 hover:to-gray-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Learn More About Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
