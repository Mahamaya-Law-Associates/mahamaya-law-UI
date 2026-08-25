import React from "react";
import Image from "next/image";
import "../styles/cardSection.css"; // Assuming you have a CSS file for styling
import Slider from "react-slick"; // Using react-slick for carousel functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardsData = [
  {
    title: "Litigation",
    description:
      "Representing clients in civil, commercial, and constitutional disputes before trial courts, High Courts, and the Supreme Court of India, from case assessment through trial and appeal. We combine meticulous legal research with strong courtroom advocacy to secure favourable outcomes efficiently.",
    image: "images/Litigation.jpeg",
  },
  {
    title: "Intellectual Property Rights",
    description:
      "End-to-end IPR services covering trademarks, copyrights, and patents — from filing and prosecution to licensing, enforcement, and anti-counterfeiting action. We help clients turn their ideas into durable, protected business value.",
    image: "images/Intellectual%20Property%20Law%20Images.webp",
  },
  {
    title: "Employment and Labour Laws",
    description:
      "Advising employers and employees on contracts, POSH compliance, workplace investigations, terminations, and disputes before labour courts and tribunals. Our goal is fair, compliant workplaces where individuals can assert their rights effectively.",
    image: "images/Employment%20and%20Labor%20Law%20Image.jpeg",
  },
  {
    title: "Corporate, Merger & Acquisition and Compliance",
    description:
      "Supporting businesses through incorporation, governance, and complex transactions — including M&A due diligence, deal structuring, and regulatory compliance. We work closely with management and boards to align every transaction with broader business strategy.",
    image: "images/corporate.jpeg",
  },
  {
    title: "Dispute Resolution & Arbitration",
    description:
      "Domestic and international arbitration, mediation, and conciliation — from drafting arbitration clauses to enforcing awards before Indian courts. We help clients reach efficient, enforceable outcomes tailored to their commercial context.",
    image: "images/dispute.png",
  },
  {
    title: "Matrimonial Laws",
    description:
      "Handling divorce, maintenance, child custody, and matrimonial property disputes with discretion, empathy, and support for mutual settlement. Our priority is protecting our clients' rights and the wellbeing of any children involved.",
    image: "images/matrimonial.jpg",
  },
  {
    title: "White Collar Crimes",
    description:
      "Defending individuals and corporations in fraud, money laundering, and corruption matters, from investigation and bail through to trial. We combine careful strategic counsel with discreet representation to protect our clients' liberty and standing.",
    image: "images/whitecollar.jpg",
  },
  {
    title: "Competition Law",
    description:
      "Advising on Competition Act compliance, merger filings before the CCI, antitrust risk audits, and representation in CCI and NCLAT proceedings. We help businesses structure commercial arrangements that remain compliant while pursuing growth.",
    image: "images/Competition%20Law%20Image%20Mar%2017%202018.jpg",
  },
  {
    title: "Privacy Laws & Data Protection",
    description:
      "Helping organizations build compliant data governance under the DPDP Act — privacy policies, consent frameworks, breach response, and audits. Our aim is to help clients manage personal data responsibly and build user trust.",
    image: "images/Data-Privacy-Laws.webp",
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
    <div className="container-card" id="practice-areas">
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
