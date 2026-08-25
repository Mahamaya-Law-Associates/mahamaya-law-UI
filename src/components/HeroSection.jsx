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
      <div className="description relative max-w-[1600px] mx-auto pe-4 sm:px-6 lg:pe-8 py-24 lg:py-48 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
        <Image
          src="/images/MahamayaLawnobg.png"
          alt="Mahamaya Law"
          width={400}
          height={400}
          className="h-96 w-96 object-contain shrink-0 shadow-sm"
        />
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-100"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Mahamaya Law
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300">
            Your Rights, Our Focus
          </p>
          <a
            href="/aboutus"
            className="mt-10 inline-block bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-600 hover:to-gray-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Learn More About Us
          </a>
          {/* <p>Mahamaya law is here to guide you through every legal hurdle. With a
          client-first approach, we ensure your case receives the attention it
          deserves to secure the best possible outcome.</p> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
