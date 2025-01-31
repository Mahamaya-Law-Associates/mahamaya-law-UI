import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex justify-around text-center text-sm sm:text-base lg:text-lg text-white">
          <span>&copy; {year} Copyright by <span className="font-semibold">MAHAMAYA LAW</span> </span>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
