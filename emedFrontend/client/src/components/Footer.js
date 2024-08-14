import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full sm:w-auto flex items-center mb-6 sm:mb-0">
          <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12 mr-4" />
          <h3 className="text-2xl font-bold text-blue-400">EMED</h3>
        </div>

        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">About</h4>
          <ul>
            <li className="mb-2">
              <a href="/aboutus" className="hover:text-blue-300">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#annual-checkup" className="hover:text-blue-300">
                Annual Checkup
              </a>
            </li>
            <li className="mb-2">
              <a href="#blog" className="hover:text-blue-300">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#careers" className="hover:text-blue-300">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Services</h4>
          <ul>
            <li className="mb-2">
              <a href="#consultation" className="hover:text-blue-300">
                Consultation
              </a>
            </li>
            <li className="mb-2">
              <a href="#appointment" className="hover:text-blue-300">
                Book Appointment
              </a>
            </li>
            <li className="mb-2">
              <a href="#telehealth" className="hover:text-blue-300">
                Telehealth
              </a>
            </li>
            <li className="mb-2">
              <a href="#diagnosis" className="hover:text-blue-300">
                Diagnosis
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Support</h4>
          <ul>
            <li className="mb-2">
              <a href="/contactus" className="hover:text-blue-300">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="hover:text-blue-300">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#privacy-policy" className="hover:text-blue-300">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#terms-conditions" className="hover:text-blue-300">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; 2024 EMED. All rights reserved.</p>
        <p>
          <a
            href="#privacy-policy"
            className="text-blue-400 hover:text-blue-300 mx-2"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            href="#terms-conditions"
            className="text-blue-400 hover:text-blue-300 mx-2"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
