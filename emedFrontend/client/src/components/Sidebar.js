import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Retrieve the role from session storage
  const role = sessionStorage.getItem("userRole");

  // Define links for each role
  const links = {
    ROLE_DOCTOR: [
      { name: "Dashboard", path: "/doctor-dashboard" },
      { name: "Appointments", path: "/doctor-appointments" },
      { name: "Profile", path: "/doctor-profile" },
    ],
    ROLE_PATIENT: [
      { name: "Dashboard", path: "/patient-dashboard" },
      { name: "Search Doctors", path: "/doctors" },
      { name: "My Appointments", path: "/patient-appointments" },
      { name: "Profile", path: "/patient-profile" },
    ],
    ROLE_ADMIN: [
      { name: "Dashboard", path: "/admin-dashboard" },
      { name: "Manage Users", path: "/admin-users" },
      { name: "Manage Appointments", path: "/admin-appointments" },
    ],
  };

  // Render the Sidebar only if the role is present
  if (!role) {
    return null; // Do not render anything if the user is not logged in
  }

  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed top-0 left-0 shadow-lg">
      <div className="p-6 text-xl font-semibold border-b border-gray-700">
        E-MED
      </div>
      <nav className="mt-8">
        {links[role]?.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="block py-2.5 px-4 rounded hover:bg-gray-700 transition duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
