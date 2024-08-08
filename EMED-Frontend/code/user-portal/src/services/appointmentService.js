import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com'; // Replace with your actual API URL

export const getAppointments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/appointments`);
    return {
      status: 'success',
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return {
      status: 'error',
      error: 'Failed to fetch appointments'
    };
  }
};

export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
    return {
      status: 'success',
      data: response.data
    };
  } catch (error) {
    console.error('Error creating appointment:', error);
    return {
      status: 'error',
      error: 'Failed to create appointment'
    };
  }
};
