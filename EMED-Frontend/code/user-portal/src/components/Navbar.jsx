import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">HealthBooker</div>
      <ul className="nav-links">
        <li><Link className="nav-link me-3" to="/home" onClick={() => console.log("Home button clicked")}>Home</Link></li>
        <li><Link className="nav-link me-3" to="/doctors" onClick={() => console.log("Doctors button clicked")}>Doctors</Link></li>
        <li><Link className="nav-link me-3" to="/appointments" onClick={() => console.log("Appointments button clicked")}>Appointments</Link></li>
        <li><Link className="nav-link  me-3" to="/notifications" onClick={() => console.log("Notifications button clicked")}>Notifications</Link></li>
        <li><Link className="nav-link me-3" to="/apply" onClick={() => console.log("Apply for doctor button clicked")}>Apply for doctor</Link></li>
        <li><Link className="nav-link me-3" to="/contact" onClick={() => console.log("Contact Us button clicked")}>Contact Us</Link></li>
        <li><Link className="nav-link me-3" to="/profile" onClick={() => console.log("Profile button clicked")}>Profile</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link className="btn btn-primary me-3" to="/patientregister" onClick={() => console.log("Register button clicked")}
        style={{borderRadius:'30px'}}>Patient Register</Link>
        <Link className="btn btn-warning me-3" to="/login" onClick={() => console.log("Login button clicked")}
        style={{borderRadius:'30px'}}>LOGIN</Link>
        <Link className="btn btn-primary" to="/doctorregister" onClick={() => console.log("Register button clicked")}
        style={{borderRadius:'30px'}}>Doctor Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
