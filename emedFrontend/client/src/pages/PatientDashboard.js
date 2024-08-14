import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]); // State for appointments
  const [error, setError] = useState("");

  useEffect(() => {
    const patientId = sessionStorage.getItem("userId");

    if (patientId) {
      // Fetch patient profile data
      axios
        .get(`http://localhost:8080/api/patients/${patientId}`)
        .then((response) => {
          console.log("API Response:", response.data); // Debugging
          const patientData = response.data.patient;
          const appointmentsData = response.data.appointmentList;

          if (patientData && appointmentsData) {
            setPatient(patientData); // Set the patient data
            setAppointments(appointmentsData); // Set the appointments data
          } else {
            setError("No data available");
          }
        })
        .catch((error) => {
          console.error("Error fetching patient data:", error);
          setError("Error fetching patient data");
        });
    } else {
      setError("No patient ID found in session storage");
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-6">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          {patient ? (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Welcome, {patient.firstName} {patient.lastName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">
                    Upcoming Appointments
                  </h3>
                  {/* Render the upcoming appointments */}
                  {appointments.length > 0 ? (
                    <ul>
                      {appointments.map((appointment) => (
                        <li key={appointment.id} className="mb-2">
                          {appointment.selectedDoctor.firstName}{" "}
                          {appointment.selectedDoctor.lastName} -{" "}
                          {new Date(
                            appointment.appointmentDateTime
                          ).toLocaleDateString()}{" "}
                          at{" "}
                          {new Date(
                            appointment.appointmentDateTime
                          ).toLocaleTimeString()}
                          , {appointment.appointmentType}
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
                    <strong>Email:</strong> {patient.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {patient.phoneNo}
                  </p>
                  <p>
                    <strong>Address:</strong> {patient.address || "N/A"}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center">Loading profile...</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
