// src/components/SearchComponent.js

import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [specialization, setSpecialization] = useState('');

    const handleSearch = () => {
        onSearch({ city, specialization });
    };

    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Search Doctors</h3>
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchComponent;
