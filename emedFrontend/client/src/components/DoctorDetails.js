import React from "react";
import doctorImage from "../images/doctor.png";
import { useNavigate } from "react-router-dom";

const DoctorDetails = ({ onClose, doctor }) => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate(`/doctor/${doctor.id}/slots`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img src={doctorImage} alt="Doctor" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {doctor.firstName} {doctor.lastName}
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>
              <strong>Specialization:</strong> {doctor.specialization}
            </p>
            <p>
              <strong>Experience:</strong> {doctor.experience} years
            </p>
            <p>
              <strong>Fees per consultation:</strong> ${doctor.consultationFees}
            </p>
            <p>
              <strong>Phone:</strong> {doctor.phone}
            </p>
            <p>
              <strong>Bio:</strong> {doctor.bio}
            </p>
            <p>
              <strong>Address:</strong> {doctor.address}
            </p>
            <p>
              <strong>Email:</strong> {doctor.email}
            </p>
            <p>
              <strong>Start Time:</strong> {doctor.startTime}
            </p>
            <p>
              <strong>End Time:</strong> {doctor.endTime}
            </p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="mt-6 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
