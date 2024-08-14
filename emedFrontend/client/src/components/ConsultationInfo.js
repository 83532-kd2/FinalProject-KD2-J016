import React from "react";
import { Link } from "react-router-dom";
import consultationImage from "../images/ConsultationImage.png"; // Adjust the path as needed

const ConsultationInfo = () => {
  return (
    <div className="bg-gray-100 py-8 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold mb-4">Need A Consultation?</h2>
          <p className="text-lg mb-4">
            If you need a consultation, our team of experienced professionals is
            here to help. We offer personalized consultations tailored to your
            specific needs, ensuring you receive the expert guidance and support
            you deserve.
          </p>
          <p className="text-lg mb-4">
            Contact us today to schedule your consultation and take the first
            step towards finding the solutions you need.
          </p>
          <div className="flex flex-col gap-4">
            <Link
              to="/contact-us"
              className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2992 2.2498V9.0498C14.2992 9.50067 14.1201 9.93307 13.8013 10.2519C13.4825 10.5707 13.0501 10.7498 12.5992 10.7498H8.34922L4.09922 14.1498V10.7498H2.39922C1.94835 10.7498 1.51595 10.5707 1.19714 10.2519C0.878325 9.93307 0.699219 9.50067 0.699219 9.0498V2.2498C0.699219 1.79894 0.878325 1.36653 1.19714 1.04772C1.51595 0.728911 1.94835 0.549805 2.39922 0.549805H12.5992C13.0501 0.549805 13.4825 0.728911 13.8013 1.04772C14.1201 1.36653 14.2992 1.79894 14.2992 2.2498ZM4.94922 4.7998H3.24922V6.4998H4.94922V4.7998ZM6.64922 4.7998H8.34922V6.4998H6.64922V4.7998ZM11.7492 4.7998H10.0492V6.4998H11.7492V4.7998Z"
                  fill="#FFFFFF"
                />
              </svg>
              Contact
            </Link>
            <Link
              to="/doctors"
              className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M10.7507 12.75C11.1264 12.75 11.4867 12.6183 11.7524 12.3839C12.0181 12.1495 12.1673 11.8315 12.1673 11.5V1.5C12.1673 1.16848 12.0181 0.850537 11.7524 0.616116C11.4867 0.381696 11.1264 0.25 10.7507 0.25H6.50065V4.625L4.72982 3.6875L2.95898 4.625V0.25H2.25065C1.87493 0.25 1.51459 0.381696 1.24892 0.616116C0.98324 0.850537 0.833984 1.16848 0.833984 1.5V11.5C0.833984 11.8315 0.98324 12.1495 1.24892 12.3839C1.51459 12.6183 1.87493 12.75 2.25065 12.75H10.7507Z"
                  fill="#FFFFFF"
                />
              </svg>
              Book
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={consultationImage}
            alt="Consultation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationInfo;
