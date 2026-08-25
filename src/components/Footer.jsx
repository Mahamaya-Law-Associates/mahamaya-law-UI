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
          <div className="mb-8 md:mb-0 flex flex-col md:flex-row md:items-center me-6">
            <div>
              <div  className='flex flex-row'>
                <h3 className="text-white text-2xl font-bold mb-2">Mahamaya Law</h3>
                <div className="block w-px self-stretch bg-gray-600/40 mx-6" />
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/mahamaya-law/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 448 512">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 106.5C24.09 106.5 0 82.4 0 52.9a53.79 53.79 0 0 1 107.58 0c0 29.5-24.1 53.6-53.79 53.6zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:Mahamayalaw@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </a>
                </div>

              </div>
              <p className="text-gray-400 max-w-xs mt-2">
                Excellence in legal services with a commitment to client trust and integrity.
              </p>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {linksColumn('About', [
              { name: 'Our Firm', url: '/aboutus' },
              { name: 'Practice Areas', url: '/#practice-areas' }
            ])}
            {linksColumn('Blog', [
              { name: 'Latest Updates', url: '/blogs' },
            ])}
            {linksColumn('Legal', [
              { name: 'Contact Us', url: '/contactus' }
            ])}
            {linksColumn('Join Us', [
              { name: 'Careers', url: '/careers' }
            ])}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {year} Mahamaya Law. All rights reserved.
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

