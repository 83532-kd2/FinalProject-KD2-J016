import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginForm";
import RegisterPatient from "./components/RegisterPatient";
import PatientDashboard from "./pages/PatientDashboard";
import RegisterDoctor from "./components/RegisterDoctor";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientProfile from "./pages/PatientProfile";
import Sidebar from "./components/Sidebar";
import DoctorProfiles from "./screens/DoctorProfiles";
import DoctorProfile from "./pages/DoctorProfile";
import HomePage from "./pages/Home";
import AvailableSlots from "./screens/AvailableSlots";
import DoctorSlots from "./components/DoctorSlots";
import PatientAppointment from "./components/PatientAppointments";
import DoctorAppointment from "./components/DoctorAppointment";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ConfirmAppointment from "./screens/ConfirmAppointment";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./route/ProtectedRoute"; // Import the ProtectedRoute component

const App = () => {
  const isLoggedIn = !!sessionStorage.getItem("userRole");

  return (
    <Router>
      {isLoggedIn && <Sidebar />}
      <div className={isLoggedIn ? "ml-64" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/patient" element={<RegisterPatient />} />
          <Route path="/register/doctor" element={<RegisterDoctor />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Protected routes */}
          <Route
            path="/doctor-dashboard"
            element={
              <ProtectedRoute>
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient-dashboard"
            element={
              <ProtectedRoute>
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient-profile"
            element={
              <ProtectedRoute>
                <PatientProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor-profile"
            element={
              <ProtectedRoute>
                <DoctorProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctors"
            element={
              <ProtectedRoute>
                <DoctorProfiles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/:id/slots"
            element={
              <ProtectedRoute>
                <AvailableSlots />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient-appointments"
            element={
              <ProtectedRoute>
                <PatientAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor-appointments"
            element={
              <ProtectedRoute>
                <DoctorAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient/confirmAppointment"
            element={
              <ProtectedRoute>
                <ConfirmAppointment />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Import your Navbar component
// import LoginPage from "./pages/LoginForm";
// import RegisterPatient from "./components/RegisterPatient"; // Create these components
// import PatientDashboard from "./pages/PatientDashboard"; // Create these components
// import RegisterDoctor from "./components/RegisterDoctor";
// import DoctorDashboard from "./pages/DoctorDashboard";
// import PatientProfile from "./pages/PatientProfile";
// import Sidebar from "./components/Sidebar";
// import DoctorProfiles from "./screens/DoctorProfiles";
// import DoctorProfile from "./pages/DoctorProfile";
// import HomePage from "./pages/Home";
// import AvailableSlots from "./screens/AvailableSlots";
// import DoctorSlots from "./components/DoctorSlots";
// import PatientAppointment from "./components/PatientAppointments";
// import DoctorAppointment from "./components/DoctorAppointment";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import ConfirmAppointment from "./screens/ConfirmAppointment";
// import AboutUs from "./components/AboutUs";
// import Footer from "./components/Footer";
// import ContactUs from "./components/ContactUs";
// const App = () => {
//   const isLoggedIn = !!sessionStorage.getItem("userRole");

//   return (
//     <Router>
//       {isLoggedIn && <Sidebar />}
//       <div className={isLoggedIn ? "ml-64" : ""}>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register/patient" element={<RegisterPatient />} />
//           <Route path="/register/doctor" element={<RegisterDoctor />} />
//           <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
//           <Route path="/patient-dashboard" element={<PatientDashboard />} />
//           <Route path="/patient-profile" element={<PatientProfile />} />
//           <Route path="/doctor-profile" element={<DoctorProfile />} />
//           <Route path="/doctors" element={<DoctorProfiles />} />
//           <Route path="/doctor/:id/slots" element={<AvailableSlots />} />
//           <Route
//             path="/patient-appointments"
//             element={<PatientAppointment />}
//           />
//           <Route path="/doctor-appointments" element={<DoctorAppointment />} />
//           <Route
//             path="/patient/confirmAppointment"
//             element={<ConfirmAppointment />}
//           />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
