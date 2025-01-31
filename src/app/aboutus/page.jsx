// src/components/AboutUs.js
"use client";
import { useState } from 'react';
import '../../styles/aboutus.css';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const services = [
    { name : "Corporate Law", value:"Offering expert guidance on mergers, acquisitions, and legal compliance, we help businesses navigate the complexities of corporate law."},
    { name: "Family Law", value: "Handling sensitive issues with care, we provide assistance in divorce settlements, child custody, and adoption procedures." },
    { name: "Criminal Defense", value: "From minor offenses to serious accusations, our defense team is equipped to protect your rights and seek justice." },
    { name: "Property Disputes", value: "We help resolve property-related legal matters efficiently, securing favorable outcomes for our clients." },
    { name: "Matrimonal Disputes", value: "Our legal experts provide guidance and support in resolving matrimonial disputes, ensuring fair settlements for all parties involved." },
    { name: "White Collar Crimes", value: "Our team specializes in defending clients involved in white-collar crimes such as fraud, embezzlement, and insider trading. We handle complex investigations, develop strategic defenses, and guide clients through every phase of legal proceedings to achieve the best possible outcome." }
  ];

  const [selectedService, setSelectedService] = useState({ name : "Corporate Law", value:"Offering expert guidance on mergers, acquisitions, and legal compliance, we help businesses navigate the complexities of corporate law."});

  console.log(selectedService);

  return (
    <div>
      <div className="pt-12 pb-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Main Heading Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Justice Served, Your Rights Protected
        </h2>
        <p className="mt-2 text-3xl font-medium tracking-tight text-gray-800">
          Welcome to <span className='text-4xl font-extrabold' style={{ fontFamily: "Cormorant Garamond, serif" }}>Mahamaya Law</span>
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          At Mahamaya Law, we provide comprehensive legal solutions tailored to your unique needs. From personal legal matters to business disputes, our expertise guides you to justice.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="flex flex-row mt-20 max-w-7xl mx-20">
        <div className="card p-10 bg-white border-1.5 text-wrap">
          <p className="text-2xl font-bold text-gray-900 pb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Our Services
          </p>
          <div className="services" >
            {services.map((service, index) => (
              <div key={index} >
                <hr />
                <div className="services py-3" 
                  onClick={() => setSelectedService(service)}>
                  <span >{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="description py-6 px-16">
          <p className='heading pb-6 text-3xl font-extrabold' style={{ fontFamily: "Cormorant Garamond, serif" }}>{selectedService?.name}</p>
          <hr className='pb-8' />
          <div className="desc">
            {selectedService?.value}
          </div>
        </div>
        {/* <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        </div> */}
      </div>

      {/* Image Section */}
      {/* <div className="mt-12 flex items-center justify-center">
        <img
          src="/images/MahamayaLawLogo.png"
          alt="Law Firm"
          className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />
      </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
