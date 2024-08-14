// src/pages/DoctorProfiles.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/DoctorProfile.png';
import { FetchAllDoctors } from '../services/DoctorService';
import DoctorDetails from '../components/DoctorDetails'; // Import the DoctorDetails component
import SearchComponent from '../components/SearchComponent'; // Import the SearchComponent

const DoctorProfiles = () => {
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const data = await FetchAllDoctors();
                setDoctors(data);
                setFilteredDoctors(data); // Initialize filteredDoctors with all doctors
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const handleClose = () => {
        setSelectedDoctor(null);
    };

    const handleSearch = ({ city, specialization }) => {
        const filtered = doctors.filter(doctor => {
            const matchesCity = city ? doctor.city.toLowerCase().includes(city.toLowerCase()) : true;
            const matchesSpecialization = specialization ? doctor.specialization.toLowerCase().includes(specialization.toLowerCase()) : true;
            return matchesCity && matchesSpecialization;
        });
        setFilteredDoctors(filtered);
    };

    return (
        <div className="bg-beige min-h-screen p-8">
            <h2 className="text-center text-2xl font-semibold mb-8">Book an Appointment</h2>
            <SearchComponent onSearch={handleSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredDoctors.map(doctor => (
                    <div
                        key={doctor.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => handleDoctorClick(doctor)}
                    >
                        <img className="w-full h-48 object-cover" src={image} alt={`${doctor.firstName} ${doctor.lastName}`} />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                                {doctor.firstName} {doctor.lastName}
                            </h3>
                            <p className="text-gray-600">{doctor.specialization}</p>
                            <p className="text-gray-600">Consultation Fees: ${doctor.consultationFees}</p>
                            <Link
                                to="#"
                                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {selectedDoctor && (
                <DoctorDetails
                    doctor={selectedDoctor}
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default DoctorProfiles;
