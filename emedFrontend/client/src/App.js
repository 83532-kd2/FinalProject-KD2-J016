import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import your Navbar component
import LoginPage from "./components/LoginForm";
import RegisterPatient from "./components/RegisterPatient"; // Create these components
import PatientDashboard from "./components/PatientDashboard"; // Create these components
import RegisterDoctor from "./components/RegisterDoctor";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientProfile from "./components/PatientProfile";
import DoctorProfile from "./components/DoctorProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/patient" element={<RegisterPatient />} />
        <Route path="/register/doctor" element={<RegisterDoctor />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
