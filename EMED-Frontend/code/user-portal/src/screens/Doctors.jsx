import React, { useState, useEffect } from 'react';
import '../styles/Doctor.css';


const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/api/doctors'); // Replace with your actual API endpoint
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleBookAppointment = (doctorId) => {
    console.log(`Selected Doctor ID: ${doctorId}`);
  };

  return (
    <div className="Doctor">
      <h2>Our Doctors</h2>
      <div className="doctors-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience}</p>
            <p>Fees per consultation: {doctor.fees}</p>
            <button onClick={() => handleBookAppointment(doctor.id)}>BOOK APPOINTMENT</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
