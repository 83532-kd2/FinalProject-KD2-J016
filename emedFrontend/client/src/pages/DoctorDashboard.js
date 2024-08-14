import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]); // State for appointments
  const [error, setError] = useState("");

  useEffect(() => {
    const doctorId = sessionStorage.getItem("userId");

    if (doctorId) {
      // Fetch doctor profile data
      axios
        .get(`http://localhost:8080/api/doctors/${doctorId}`)
        .then((response) => {
          // Access the doctor and appointment list from the response
          const doctorData = response.data.doctor; // Extract doctor object
          const appointmentsData = response.data.appointmentList; // Extract appointments list

          console.log("Doctor data:", doctorData);
          console.log("Doctor First Name:", doctorData.firstName);
          console.log("Doctor Last Name:", doctorData.lastName);

          setDoctor(doctorData); // Set the doctor data
          
          // Filter out canceled appointments
          const filteredAppointments = appointmentsData.filter(
            (appointment) => appointment.status !== "CANCELED"
          );
          setAppointments(filteredAppointments); // Set the filtered appointments data
        })
        .catch((error) => {
          console.error("Error fetching doctor data:", error);
          setError("Error fetching doctor data");
        });
    } else {
      setError("No doctor ID found in session storage");
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Add your Sidebar component here */}
      <main className="flex-1 p-6">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {doctor && (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Welcome, Dr. {doctor.firstName} {doctor.lastName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Upcoming Appointments</h3>

                {/* Render the upcoming appointments */}
                {appointments.length > 0 ? (
                  <ul>
                    {appointments.map((appointment) => (
                      <li key={appointment.id} className="mb-2">
                        {appointment.selectedPatient.firstName} {appointment.selectedPatient.lastName} -{" "}
                        {new Date(appointment.appointmentDateTime).toLocaleDateString()} at{" "}
                        {new Date(appointment.appointmentDateTime).toLocaleTimeString()}, {appointment.appointmentType}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No upcoming appointments.</p>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Profile Summary</h3>
                <p>
                  <strong>Email:</strong> {doctor.email || "N/A"}
                </p>
                <p>
                  <strong>Phone:</strong> {doctor.phoneNo || "N/A"}
                </p>
                <p>
                  <strong>Specialization:</strong> {doctor.specialization || "N/A"}
                </p>
                <p>
                  <strong>Location:</strong> {doctor.city || "N/A"}
                </p>
              </div>
            </div>
            {/* <button
              onClick={handleLogout}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button> */}
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorDashboard;
