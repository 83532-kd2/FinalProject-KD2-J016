import React from "react";
import doctorImage from "../images/doctor.png";
import { useNavigate } from "react-router-dom";

const DoctorDetails = ({ onClose, doctor }) => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate(`/doctor/${doctor.id}/slots`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img
              src={doctorImage}
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {doctor.firstName} {doctor.lastName}
          </h3>
          <div className="text-gray-700 space-y-1">
            <p>
              <strong>Email:</strong> {doctor.email}
            </p>
            <p>
              <strong>Gender:</strong> {doctor.gender}
            </p>

            <p>
              <strong>Date of Birth:</strong> {doctor.birthDate}
            </p>
            <p>
              <strong>Phone:</strong> {doctor.phoneNo}
            </p>

            <p>
              <strong>Area:</strong> {doctor.area}
            </p>
            <p>
              <strong>City:</strong> {doctor.city}
            </p>
            <p>
              <strong>State:</strong> {doctor.state}
            </p>
            <p>
              <strong>Country:</strong> {doctor.country}
            </p>
            <p>
              <strong>ZIP Code:</strong> {doctor.zipCode}
            </p>
            <p>
              <strong>Specialization:</strong> {doctor.specialization}
            </p>
            <p>
              <strong>Start Time:</strong> {doctor.startTime}
            </p>
            <p>
              <strong>End Time:</strong> {doctor.endTime}
            </p>
            <p>
              <strong>Consultation Fees:</strong> ${doctor.consultationFees}
            </p>
            <p>
              <strong>Qualification:</strong> {doctor.qualification}
            </p>
            <p>
              <strong>Description:</strong> {doctor.description}
            </p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
