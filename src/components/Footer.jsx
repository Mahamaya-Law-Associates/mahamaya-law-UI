// import React from 'react';

// const Footer = () => {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="bg-black py-4">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <p className="flex justify-around text-center text-sm sm:text-base lg:text-lg text-white">
//           <span>&copy; {year} Copyright by <span className="font-semibold">MAHAMAYA LAW</span> </span>
//           <span>All Rights Reserved</span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const linksColumn = (title, links) => (
    <div className="flex flex-col mb-6 md:mb-0">
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      {links.map(({ name, url }) => (
        <a
          key={name}
          href={url}
          className="text-gray-400 hover:text-white transition-colors mb-2"
        >
          {name}
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Branding */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-white text-2xl font-bold mb-2">Mahāmāyā Law</h3>
            <p className="text-gray-400 max-w-xs">
              Excellence in legal services with a commitment to client trust and integrity.
            </p>
          </div>

          {/* Link Columns */}
          <div className="flex flex-wrap space-x-8">
            {linksColumn('About', [
              { name: 'Our Firm', url: '/aboutus' },
              { name: 'Practice Areas', url: '/#practice-areas' },
              { name: 'Careers', url: '/careers' }
            ])}
            {linksColumn('Blog', [
              { name: 'Legal Insights', url: '/contactus' },
              { name: 'Latest Updates', url: '/blogs' },
              { name: 'Subscribe', url: '/blogs' }
            ])}
            {linksColumn('Legal', [
              { name: 'Privacy Policy', url: '/privacy' },
              { name: 'Terms of Service', url: '/terms' },
              { name: 'Contact Us', url: '/contact' }
            ])}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {year} Mahāmāyā Law. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com/yourfirm"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              {/* Replace with your SVG icon */}
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22,12A10..."></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/yourfirm"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M22,5a8.59..."></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/yourfirm"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.45,2H3.55..."></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

