import axios from 'axios'
import { config } from './config'


const API_BASE_URL = 'http://your-api-url.com'; // Replace with your actual API URL
const BASE_URL = 'https://your-backend-api.com/api';
export async function register(firstName, lastName, email, password, phone) {
  try {
    // post body
    const body = { firstName, lastName, email, password, phone }

    // send the post request
    const response = await axios.post(`${config.serverUrl}/user/register`, body)

    // return the json body from response object
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}

export async function login(email, password) {
  const body = { email, password }
  try {
    const response = await axios.post(`${config.serverUrl}/user/login`, body)
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
  
}

export const getDoctorProfile = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/doctors/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you're using token-based auth
      },
    });
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch doctor profile');
    }
    
    return {
      status: 'success',
      data,
    };
  } catch (error) {
    return {
      status: 'error',
      error: error.message,
    };
  }
};

export const updateDoctorProfile = async (id, profileData) => {
  try {
    const response = await fetch(`${BASE_URL}/doctors/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you're using token-based auth
      },
      body: JSON.stringify(profileData),
    });
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update doctor profile');
    }
    
    return {
      status: 'success',
      data,
    };
  } catch (error) {
    return {
      status: 'error',
      error: error.message,
    };
  }
};


const API_URL = 'http://your-api-url.com'; // Replace with your API URL

export const getPatientProfile = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/patient/${id}`);
    return response.data;
  } catch (error) {
    return { status: 'error', error: error.response.data.message };
  }
};

export const updatePatientProfile = async (id, profileData) => {
  try {
    const response = await axios.put(`${API_URL}/patient/${id}`, profileData);
    return response.data;
  } catch (error) {
    return { status: 'error', error: error.response.data.message };
  }
};



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
