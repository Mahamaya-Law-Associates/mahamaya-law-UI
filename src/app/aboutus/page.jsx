// src/components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-yellow-100 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Heading Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Justice Served, Your Rights Protected
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Welcome to Mahamaya Law Association
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          At Mahamaya Law Association, we provide comprehensive legal solutions tailored to your unique needs. From personal legal matters to business disputes, our expertise guides you to justice.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="mt-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 text-center">
          Our Services
        </h3>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="mt-4 text-lg text-gray-500">
              <strong>Corporate Law:</strong> Offering expert guidance on mergers, acquisitions, and legal compliance, we help businesses navigate the complexities of corporate law.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              <strong>Family Law:</strong> Handling sensitive issues with care, we provide assistance in divorce settlements, child custody, and adoption procedures.
            </p>
          </div>
          <div>
            <p className="mt-4 text-lg text-gray-500">
              <strong>Criminal Defense:</strong> From minor offenses to serious accusations, our defense team is equipped to protect your rights and seek justice.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              <strong>Property Disputes:</strong> We help resolve property-related legal matters efficiently, securing favorable outcomes for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 flex items-center justify-center">
        <img
          src="images/law_nobg.png"
          alt="Law Firm"
          className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default AboutUs;
