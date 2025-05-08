import React from "react";
import "../styles/cardSection.css"; // Assuming you have a CSS file for styling
import Slider from "react-slick"; // Using react-slick for carousel functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardsData = [
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
    title: "Information Technology",
    description:
      "Our team offers comprehensive consulting on all aspects of IT, from company formation to mergers and acquisitions. We provide expertise in contract drafting, corporate restructuring, software licensing, data privacy, and cybersecurity, ensuring your technological assets are legally protected and optimized.",
    image: "images/information_technology.jpg",
  },
  {
    title: "Insolvency and Bankruptcy",
    description:
      "Our insolvency and bankruptcy services provide expert legal support during restructuring, liquidation, and creditor claims. We assist businesses and individuals in navigating complex financial difficulties, ensuring compliance with regulations and protection of rights throughout the process.",
    image: "images/Insolvency.jpg",
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
];



const Card = ({ title, description, image }) => {
  return (

    
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
    
  );
};

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-card">
       <div className="heading">
      <h2>Our Services</h2>
    </div>
    <div className="carousel-container">
      
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Cards;
