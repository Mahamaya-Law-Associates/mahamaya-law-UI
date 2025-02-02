// src/components/ContactUs.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
      <div className="bg-gray-50 pt-16 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Main Heading Section */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl leading-9 font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are here to assist you with any queries you may have.
          </p>
        </div>

        {/* Contact Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* By Phone Section */}
          <div className="bg-white p-8 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            {/* <FontAwesomeIcon icon={faPhone} width={100} className="p-5"/> */}
            <img src="https://img.icons8.com/?size=100&id=Jq5NvNoYeVmi&format=png&color=000000" alt="" />
            <h3 className="text-2xl font-bold text-indigo-700 mb-3">Phone</h3>
            <p className="text-gray-500">
              (Monday to Friday, 9am to 6pm PST)
            </p>
            <p className="mt-4 text-gray-800 font-semibold">
              Call Us:
              <a href="tel:+918869990580">+91 8869990580</a>
            </p>
          </div>

          {/* Email Section */}
          <div className="bg-white p-8 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            {/* <FontAwesomeIcon icon={faEnvelope} width={100} className="p-5"/> */}
            <img src="https://img.icons8.com/?size=100&id=124218&format=png&color=000000" alt="" />
            <h3 className="text-2xl font-bold text-indigo-700 mb-3">Email</h3>
            <p className="text-gray-500">
              Just send us your questions or concerns, and we will get back to you promptly.
            </p>
            <a
              href="mailto:Mahamayalaw@gmail.com"
              className="mt-6 px-6 py-3 inline-block text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
            >
              Email Us
            </a>
          </div>

          {/* Address Section */}
          <div className="bg-white p-8 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            {/* <FontAwesomeIcon icon={faMap} width={100} className="p-5"/> */}
            <img src="https://img.icons8.com/?size=100&id=z5fB0FkTx33n&format=png&color=000000" alt="" />
            <h3 className="text-2xl font-bold text-indigo-700 mb-3">Address</h3>
            <p className="text-gray-500 mb-4">
              Visit our office at the addresses below:
            </p>
            <p className="text-gray-800 font-semibold">
              Jai Prakash Nagar, Alambagh, Lucknow
            </p>
            <p className="mt-6 text-gray-800 font-semibold">
              304, Block B, Sector-62, Noida, Delhi NCR
            </p>
          </div>
        </div>
      </div>
  );
};

export default ContactUs;
