import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../images/aboutimg.jpg"; // Adjust the path to your image

const AboutSection = () => {
  return (
    <div className="w-full grid md:grid-cols-2 gap-5 max-w-screen-2xl mx-auto py-20">
      {/* Image Section */}
      <div className="w-full flex justify-center items-center max-h-[600px] rounded-lg overflow-hidden md:p-5">
        <img
          className="w-full h-[350px] sm:h-[450px] md:h-full object-cover rounded-lg"
          src={AboutImage}
          alt="About Us"
        />
      </div>

      {/* Text Section */}
      <div className="w-full space-y-5">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all">
          More About Us
        </button>
        <h2 className="text-3xl font-bold text-gray-800">
          The Best Medical <br /> that You Can Trust
        </h2>
        <p className="text-xl text-gray-700">
          E-MED is excellence in healthcare, offering superior medical services
          backed by reliability and trustworthiness.
        </p>
        <p className="text-xl text-gray-700">
          With highly skilled professionals and cutting-edge facilities, we
          ensure personalized care, transparent communication, and long-term
          patient relationships.
        </p>

        {/* Features List */}
        <div className="space-y-3">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.25C7.26942 0.25 5.57769 0.763179 4.13876 1.72464C2.69983 2.6861 1.57832 4.05267 0.916058 5.65152C0.253791 7.25037 0.080512 9.00971 0.418133 10.707C0.755753 12.4044 1.58911 13.9635 2.81282 15.1872C4.03653 16.4109 5.59563 17.2442 7.29296 17.5819C8.9903 17.9195 10.7496 17.7462 12.3485 17.0839C13.9473 16.4217 15.3139 15.3002 16.2754 13.8612C17.2368 12.4223 17.75 10.7306 17.75 9C17.75 6.67936 16.8281 4.45376 15.1872 2.81282C13.5462 1.17187 11.3206 0.25 9 0.25ZM7.75 12.4937L4.625 9.36875L5.61875 8.375L7.75 10.5063L12.3813 5.875L13.3788 6.86625L7.75 12.4937Z"
                  fill="#2F87EE"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">
                Easily Accessible
              </h3>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.25C7.26942 0.25 5.57769 0.763179 4.13876 1.72464C2.69983 2.6861 1.57832 4.05267 0.916058 5.65152C0.253791 7.25037 0.080512 9.00971 0.418133 10.707C0.755753 12.4044 1.58911 13.9635 2.81282 15.1872C4.03653 16.4109 5.59563 17.2442 7.29296 17.5819C8.9903 17.9195 10.7496 17.7462 12.3485 17.0839C13.9473 16.4217 15.3139 15.3002 16.2754 13.8612C17.2368 12.4223 17.75 10.7306 17.75 9C17.75 6.67936 16.8281 4.45376 15.1872 2.81282C13.5462 1.17187 11.3206 0.25 9 0.25ZM7.75 12.4937L4.625 9.36875L5.61875 8.375L7.75 10.5063L12.3813 5.875L13.3788 6.86625L7.75 12.4937Z"
                  fill="#2F87EE"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">
                Easy Online Appointment
              </h3>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.25C7.26942 0.25 5.57769 0.763179 4.13876 1.72464C2.69983 2.6861 1.57832 4.05267 0.916058 5.65152C0.253791 7.25037 0.080512 9.00971 0.418133 10.707C0.755753 12.4044 1.58911 13.9635 2.81282 15.1872C4.03653 16.4109 5.59563 17.2442 7.29296 17.5819C8.9903 17.9195 10.7496 17.7462 12.3485 17.0839C13.9473 16.4217 15.3139 15.3002 16.2754 13.8612C17.2368 12.4223 17.75 10.7306 17.75 9C17.75 6.67936 16.8281 4.45376 15.1872 2.81282C13.5462 1.17187 11.3206 0.25 9 0.25ZM7.75 12.4937L4.625 9.36875L5.61875 8.375L7.75 10.5063L12.3813 5.875L13.3788 6.86625L7.75 12.4937Z"
                  fill="#2F87EE"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">
                Comfortable Medical
              </h3>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.25C7.26942 0.25 5.57769 0.763179 4.13876 1.72464C2.69983 2.6861 1.57832 4.05267 0.916058 5.65152C0.253791 7.25037 0.080512 9.00971 0.418133 10.707C0.755753 12.4044 1.58911 13.9635 2.81282 15.1872C4.03653 16.4109 5.59563 17.2442 7.29296 17.5819C8.9903 17.9195 10.7496 17.7462 12.3485 17.0839C13.9473 16.4217 15.3139 15.3002 16.2754 13.8612C17.2368 12.4223 17.75 10.7306 17.75 9C17.75 6.67936 16.8281 4.45376 15.1872 2.81282C13.5462 1.17187 11.3206 0.25 9 0.25ZM7.75 12.4937L4.625 9.36875L5.61875 8.375L7.75 10.5063L12.3813 5.875L13.3788 6.86625L7.75 12.4937Z"
                  fill="#2F87EE"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">
                Safe & Secure
              </h3>
            </li>
          </ul>
        </div>

        {/* Appointment Button */}
        <Link
          to="/doctors"
          className="inline-block py-2 px-4 border border-[#2F87EE] text-[#2F87EE] rounded-md hover:bg-[#2F87EE] hover:text-white transition-all duration-300"
        >
          Make an Appointment
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
