import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorAppointments = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]); // Initialize with an empty array
  const [error, setError] = useState("");
  useEffect(() => {
    const doctorId = sessionStorage.getItem("userId");

    if (doctorId) {
      // Fetch doctor data
      axios
        .get(`http://localhost:8080/api/doctors/${doctorId}`)
        .then((response) => {
          const doctorData = response.data.doctor;
          const appointmentsData = response.data.appointmentList;

          // console.log("Doctor data:", doctorData);
          // console.log("Doctor First Name:", doctorData.firstName);
          // console.log("Doctor Last Name:", doctorData.lastName);

          setDoctor(doctorData); // Set doctor data
          setAppointments(appointmentsData || []); // Set appointments, fallback to empty array if undefined
        })
        .catch((error) => {
          console.error("Error fetching doctor data and appointments:", error);
          setError("Error fetching doctor data and appointments");
        });

      // Fetch appointments data
      axios
        .get(
          `http://localhost:8080/api/appointments/doctor/${doctorId}/appointments`
        )
        .then((response) => {
          // console.log("Appointments:", response.data); // Log the fetched data
          // Filter out canceled appointments
          const filteredAppointments = response.data.filter(
            (appointment) => appointment.status !== "CANCELED"
          );
          setAppointments(filteredAppointments || []); // Fallback to empty array if undefined
        })
        .catch((error) => {
          console.error("Error fetching appointments:", error);
          setError("Error fetching appointments");
        });
    } else {
      setError("No doctor ID found in session storage");
    }
  }, []);

  const handleCancel = async (appointmentId) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/appointments/${appointmentId}`
      );
      // Filter out the canceled appointment from the current state
      setAppointments(
        appointments.filter((appointment) => appointment.id !== appointmentId)
      );
      console.log("Appointment cancelled:", appointmentId);
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      setError("Error cancelling appointment");
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {doctor && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Appointments</h3>
          {appointments.length > 0 ? (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Time</th>
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Patient</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">
                      {new Date(
                        appointment.appointmentDateTime
                      ).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {new Date(
                        appointment.appointmentDateTime
                      ).toLocaleTimeString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {appointment.appointmentType}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {appointment.selectedPatient?.firstName}{" "}
                      {appointment.selectedPatient?.lastName}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleCancel(appointment.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600">No appointments found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorAppointments;
