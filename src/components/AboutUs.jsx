import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-yellow-100 to-blue-100 py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              src="images/Mahamaya_Logo.png"
              alt="About Us"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-6 tracking-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              About Mahamaya Law Association
            </h2>
            <p
              className="text-lg text-gray-700 sm:text-xl lg:text-lg leading-relaxed mb-4"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              At Mahamaya Law Association, we are committed to delivering exceptional legal services across a wide range of practice areas. Our team of dedicated professionals strives to uphold the highest standards of integrity and client satisfaction.
            </p>
            <p
              className="text-lg text-gray-700 sm:text-xl lg:text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              With years of experience in the legal industry, we provide tailored solutions to meet the unique needs of our clients. Trust, confidentiality, and excellence are the pillars that define our practice and relationships.
            </p>

            <a
              href="/aboutus"
              className="bg-blue-600 hover:bg-purple-700 text-white text-lg font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
