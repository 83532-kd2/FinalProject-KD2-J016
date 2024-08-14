import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const patientId = sessionStorage.getItem("userId");

    if (patientId) {
      // Fetch appointments for the patient
      axios
        .get(`http://localhost:8080/api/appointments/patient/${patientId}`)
        .then((response) => {
          const appointmentsData = response.data;
          console.log("Appointments:", appointmentsData);

          // Filter out canceled appointments
          const filteredAppointments = appointmentsData.filter(
            (appointment) => appointment.status !== "CANCELED"
          );
          setAppointments(filteredAppointments || []); // Fallback to empty array if undefined
        })
        .catch((error) => {
          console.error("Error fetching appointments:", error);
          setError("Error fetching appointments");
        });
    } else {
      setError("No patient ID found in session storage");
    }
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {appointments.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Your Appointments</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Doctor</th>
              
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    {new Date(appointment.appointmentDateTime).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(appointment.appointmentDateTime).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {appointment.appointmentType}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {appointment.selectedDoctor?.firstName} {appointment.selectedDoctor?.lastName}
                  </td>
                  {/* <td className="py-2 px-4 border-b">
                   
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No appointments found.</p>
      )}
    </div>
  );
};

export default PatientAppointments;
