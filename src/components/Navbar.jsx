'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state when button is clicked
  };

  return (
    <div className="w-full">
      <header className="sticky top-0 z-50 bg-white">
        <nav className="flex justify-between w-full p-4 items-center">
          {/* Logo/Brand */}
          <a href="/">
            <span className="font-semibold mx-5 text-2xl tracking-tight">Mahamaya Law</span>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* Hamburger icon */}
              <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <Link className="block mx-5 hover:text-indigo-300 transition duration-300" href="/">Home</Link>
            <Link className="block mx-5 hover:text-indigo-300 transition duration-300" href="/aboutus">About Us</Link>
            <Link className="block mx-5 hover:text-indigo-300 transition duration-300" href="/blogs">Blogs</Link>
            <Link className="block mx-5 hover:text-indigo-300 transition duration-300" href="/contactus">Contact Us</Link>
            {/* <Link className="block mr-4 hover:text-indigo-300 transition duration-300" href="/adminlogin">Admin</Link> */}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-white md:hidden transition duration-300">
            <Link className="block p-4 hover:bg-indigo-700" href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className="block p-4 hover:bg-indigo-700" href="/aboutus" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link className="block p-4 hover:bg-indigo-700" href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link className="block p-4 hover:bg-indigo-700" href="/contactus" onClick={() => setIsOpen(false)}>Contact Us</Link>
            {/* <Link className="block p-4 hover:bg-indigo-700" href="/adminlogin" onClick={() => setIsOpen(false)}>Admin</Link> */}
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
