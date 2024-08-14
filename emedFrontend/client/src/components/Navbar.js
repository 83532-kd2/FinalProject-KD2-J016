import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const userRole = sessionStorage.getItem("userRole");

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center p-4">
    
        <div className="md:hidden">
          <button
            className="p-2 text-white"
            onClick={() => setIconActive(!iconActive)}
          >
            {!iconActive ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`${
            iconActive ? "block" : "hidden"
          } md:block md:flex md:items-center space-x-6`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Contact Us
              </NavLink>
            </li>
            {userRole === "ROLE_PATIENT" && (
              <>
                <li>
                  <NavLink
                    to="/patient-dashboard"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/patient-appointments"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    My Appointments
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/patient-profile"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            )}
            {userRole === "ROLE_DOCTOR" && (
              <>
                <li>
                  <NavLink
                    to="/doctor-appointments"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    Appointments
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/doctor-profile"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            )}
            {userRole === "ROLE_ADMIN" && (
              <li>
                <NavLink
                  to="/admin-dashboard"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            {!userRole ? (
              <>
                <li className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="block py-2 px-4 hover:bg-gray-700 focus:outline-none rounded"
                  >
                    Register
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
                      <NavLink
                        to="/register/patient"
                        className="block px-4 py-2 hover:bg-gray-100 rounded-t-md"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Register as Patient
                      </NavLink>
                      <NavLink
                        to="/register/doctor"
                        className="block px-4 py-2 hover:bg-gray-100 rounded-b-md"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Register as Doctor
                      </NavLink>
                    </div>
                  )}
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
