'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import AboutUs from '@/components/AboutUs';
import CardSection from '@/components/CardSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChoseUs';
import UserAgreementModal from '@/components/Modal';


const Home = () => {
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleAcceptTerms = () => {
    setHasAcceptedTerms(true);
  };

  // Function to handle button click for navigation
  const navigateToContact = () => {
    router.push('/contactus'); // Navigate to the contact page
  };

  return (
    <>
      {!hasAcceptedTerms ? (
        <UserAgreementModal onAccept={handleAcceptTerms} />
      ) : (
        <>
          <HeroSection />
          <CardSection />
          <WhyChooseUs />
          <AboutUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
