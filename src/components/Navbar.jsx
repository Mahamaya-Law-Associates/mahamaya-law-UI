'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state when button is clicked
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="bg-white">
        <nav className="flex justify-between w-full p-4 items-center">
          {/* Logo/Brand */}
          <div className="name">
          <a href="/">
            <span className="font-semibold mx-5 text-2xl tracking-tight">Mahamaya Law</span>
          </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" >
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


// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import '../styles/navbar.css'; // Ensure this file contains any additional custom styles

// const Navbar = () => {
//   return (
//     <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Organization Name */}
//         <div className="text-2xl font-semibold tracking-tight">
//           <Link href="/">
//             <a className="hover:text-indigo-500 transition duration-300">Mahamaya Law</a>
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex space-x-6 text-lg">
//           <Link href="/">
//             <a className="hover:text-indigo-500 transition duration-300">Home</a>
//           </Link>
//           <Link href="/aboutus">
//             <a className="hover:text-indigo-500 transition duration-300">About Us</a>
//           </Link>
//           <Link href="/blogs">
//             <a className="hover:text-indigo-500 transition duration-300">Blogs</a>
//           </Link>
//           <Link href="/contactus">
//             <a className="hover:text-indigo-500 transition duration-300">Contact Us</a>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
