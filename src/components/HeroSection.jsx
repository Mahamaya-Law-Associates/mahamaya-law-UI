import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="images/Lawfirm_bg.jpg"
          alt="Legal Advisory Background"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 mix-blend-multiply" /> */}
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-48 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-center lg:text-left shadow-lg">
          Tailored Legal Advice:<br />
          <span className="block text-indigo-300">Your Rights, Our Focus:</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 text-center lg:text-left max-w-lg lg:max-w-none">
          Mahamaya law association is here to guide you through every legal hurdle. With a client-first approach, we ensure your case receives the attention it deserves to secure the best possible outcome.
        </p>
        <a
          href="#"
          className="mt-10 inline-block bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Learn More About Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
