import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com'; // Replace with your actual API URL

// Fetch patient by ID
export const getPatientById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/patients/${id}`);
    return {
      status: 'success',
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching patient by ID:', error);
    return {
      status: 'error',
      error: 'Failed to fetch patient data'
    };
  }
};

// Update patient
export const updatePatient = async (id, patientData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/patients/${id}`, patientData);
    return {
      status: 'success',
      data: response.data
    };
  } catch (error) {
    console.error('Error updating patient:', error);
    return {
      status: 'error',
      error: 'Failed to update patient data'
    };
  }
};
