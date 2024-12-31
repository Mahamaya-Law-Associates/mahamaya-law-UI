// src/components/ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Heading Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl leading-9 font-extrabold text-gray-900 sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We are here to assist you with any queries you may have.
        </p>
      </div>

      {/* Contact Options */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* By Phone Section */}
        <div className="bg-white p-8 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <img
            src="https://via.placeholder.com/100"
            alt="Phone Icon"
            className="mb-4 w-20 h-20"
          />
          <h3 className="text-2xl font-bold text-indigo-700 mb-3">By Phone</h3>
          <p className="text-gray-500 text-center">
            (Monday to Friday, 9am to 6pm PST)
          </p>
          <p className="mt-4 text-gray-800 font-semibold">
            Call Us: +91 8869990580
          </p>
        </div>

        {/* By Email Section */}
        <div className="bg-white p-8 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <img
            src="https://via.placeholder.com/100"
            alt="Email Icon"
            className="mb-4 w-20 h-20"
          />
          <h3 className="text-2xl font-bold text-indigo-700 mb-3">By Email</h3>
          <p className="text-gray-500 text-center">
            Just send us your questions or concerns, and we will get back to you promptly.
          </p>
          <a
            href="mailto:Mahamayalaw@gmail.com"
            className="mt-6 px-6 py-3 inline-block text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
          >
            Email Us
          </a>
        </div>

        {/* By Address Section */}
        <div className="bg-white p-8 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <img
            src="https://via.placeholder.com/100"
            alt="Address Icon"
            className="mb-4 w-20 h-20"
          />
          <h3 className="text-2xl font-bold text-indigo-700 mb-3">By Address</h3>
          <p className="text-gray-500 text-center mb-4">
            Visit our office at the addresses below:
          </p>
          <p className="text-gray-800 font-semibold text-center">
            Jai Prakash Nagar, <br />
            Alambagh, Lucknow
          </p>
          <p className="mt-6 text-gray-800 font-semibold text-center">
            304, Block B, Sector-62, <br />
            Noida, Delhi NCR
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
