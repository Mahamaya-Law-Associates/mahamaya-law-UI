import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center sm:text-left">
          <span className="text-blue-500">Why</span> Choose Us?
        </h2>
        <div className="grid gap-8 lg:gap-10 sm:grid-cols-1 lg:grid-cols-1">

          {/* First item */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 10l6 6 6-6H5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Expertise</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
              Extensive experience and deep knowledge in various legal practice areas.
              </p>
            </div>
          </div>

          {/* Second item */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 10l6 6 6-6H5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Client-Centric Approach</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
              Tailored legal solutions to meet specific client needs.
              </p>
            </div>
          </div>

          {/* Third item */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 10l6 6 6-6H5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Ethical Standards</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
              Commitment to high ethical and professional standards.
              </p>
            </div>
          </div>

          {/*fourth item*/}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 10l6 6 6-6H5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Effective representation</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
              Proven ability to deliver successful outcomes.  </p>
            </div>
          </div>
          {/*fifth item*/}
          {/*sixth item*/}


        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
