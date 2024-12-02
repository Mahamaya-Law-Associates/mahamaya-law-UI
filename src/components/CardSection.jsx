import React from 'react';

const CardSection = () => {
  const cards = [
    {
      title: "Information Technology",
      description:
        "Our team offers comprehensive consulting on all aspects of IT, from company formation to mergers and acquisitions. We provide expertise in contract drafting, corporate restructuring, software licensing, data privacy, and cybersecurity, ensuring your technological assets are legally protected and optimized.",
      image: "images/information_technology.jpg",
    },
    {
      title: "Corporate and Commercials",
      description:
        "We provide specialized legal advice for corporate clients, handling everything from case evaluations and motion filings to court representation and appellate management. Whether it's mergers, acquisitions, or general business contracts, we ensure a smooth legal process from start to finish.",
      image: "images/corporate.jpeg",
    },
    {
      title: "Dispute Resolution",
      description:
        "Our dispute resolution services focus on achieving fair outcomes through arbitration, mediation, and litigation. We assist in crafting effective agreements, representing you in legal proceedings, and enforcing arbitration awards to ensure your interests are protected.",
      image: "images/dispute.png",
    },
    {
      title: "Matrimonial Matters",
      description:
        "We provide expert legal counsel in matrimonial disputes, including divorce, child custody, and spousal support. Our services include negotiation and representation, with a focus on creating equitable agreements that safeguard your rights and future.",
      image: "images/matrimonial.jpg",
    },
    {
      title: "White Collar Crimes",
      description:
        "Our team specializes in defending clients involved in white-collar crimes such as fraud, embezzlement, and insider trading. We handle complex investigations, develop strategic defenses, and guide clients through every phase of legal proceedings to achieve the best possible outcome.",
      image: "images/whitecollar.jpg",
    },
    {
      title: "Insolvency and Bankruptcy",
      description:
        "Our insolvency and bankruptcy services provide expert legal support during restructuring, liquidation, and creditor claims. We assist businesses and individuals in navigating complex financial difficulties, ensuring compliance with regulations and protection of rights throughout the process.",
      image: "images/insolvency.jpg",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white inline-block px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md shadow-md">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-56 w-full object-cover transition duration-300 ease-in-out"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Get in touch with us section */}
        <div className="mt-20 text-center"> {/* Centered and responsive */}
          
          <a 
          href="/contactus"
          className="text-4xl sm:text-5xl lg:text-3xl font-bold text-white inline-block px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            >"Get in touch with us"
            </a>

          
        </div> 
      </div>
    </div>
  );
};

export default CardSection;
