import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getPatientById, updatePatient } from '../services/patientService'; // Make sure you have this service
import '../styles/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PatientProfileUpdate() {
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    age: '',
    allergy: '',
    bloodPressure: '',
    area: '',
    city: '',
    zipCode: '',
    country: '',
    state: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch patient data by ID
    const fetchPatientData = async () => {
      const response = await getPatientById(id);
      if (response.status === 'success') {
        setPatient(response.data);
      } else {
        toast.error('Failed to fetch patient data');
      }
    };

    fetchPatientData();
  }, [id]);

  const onUpdate = async () => {
    if (patient.firstName.trim().length === 0) {
      toast.error('Please enter first name');
    } else if (patient.lastName.trim().length === 0) {
      toast.error('Please enter last name');
    } else if (patient.email.trim().length === 0) {
      toast.error('Please enter email');
    } else if (patient.phone.trim().length === 0) {
      toast.error('Please enter phone number');
    } else if (patient.age.trim().length === 0) {
      toast.error('Please enter age');
    } else if (patient.country.trim().length === 0) {
      toast.error('Please select country');
    } else if (patient.state.trim().length === 0) {
      toast.error('Please select state');
    } else {
      // Call your update API
      const result = await updatePatient(id, patient);

      if (result.status === 'success') {
        toast.success('Successfully updated patient');
        navigate('/patient-list'); // Adjust the route as needed
      } else {
        toast.error(result.error);
      }
    }
  };

  const countries = ['USA', 'Canada', 'UK', 'Australia', 'India'];
  const states = {
    USA: ['New York', 'California', 'Texas', 'Florida'],
    Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
    UK: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    Australia: ['New South Wales', 'Queensland', 'Victoria', 'Western Australia'],
    India: [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
      'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
      'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
      'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ]
  };

  const handleCountryChange = (selectedCountry) => {
    setPatient({ ...patient, country: selectedCountry, state: '' });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPatient({ ...patient, [id]: value });
  };

  return (
    <div className='container' style={{ backgroundColor: 'black', width: "100vw" }}>
      <div className='row justify-content-center'>
        <div className='col' style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw"
        }}>
          <div className='card shadow-sm' style={{ backgroundColor: 'lightcyan' }}>
            <div className='card-body'>
              <h2 className='card-title text-center mb-4'>Update Patient Profile</h2>
              <form className='needs-validation' noValidate>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3 me-2'>
                    <label htmlFor='firstName' className='form-label'>
                      First Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      value={patient.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <div className='invalid-feedback'>
                      Please enter your first name.
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='lastName' className='form-label'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      value={patient.lastName}
                      onChange={handleInputChange}
                      required
                    />
                    <div className='invalid-feedback'>
                      Please enter your last name.
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      value={patient.email}
                      onChange={handleInputChange}
                      required
                    />
                    <div className='invalid-feedback'>
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='phone' className='form-label'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='phone'
                      value={patient.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='age' className='form-label'>
                      Age
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='age'
                      value={patient.age}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='area' className='form-label'>Area</label>
                    <input
                      type='text'
                      className='form-control'
                      id='area'
                      value={patient.area}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='city' className='form-label'>City</label>
                    <input
                      type='text'
                      className='form-control'
                      id='city'
                      value={patient.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='zipCode' className='form-label'>Zip Code</label>
                    <input
                      type='text'
                      className='form-control'
                      id='zipCode'
                      value={patient.zipCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='country' className='form-label'>Country</label>
                    <select
                      className='form-control'
                      id='country'
                      value={patient.country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                    >
                      <option value=''>Select Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='state' className='form-label'>State</label>
                    <select
                      className='form-control'
                      id='state'
                      value={patient.state}
                      onChange={handleInputChange}
                    >
                      <option value=''>Select State</option>
                      {patient.country &&
                        states[patient.country].map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label className='form-label'>Gender</label>
                    <div>
                      <div className='form-check form-check-inline'>
                        <input
                          type='radio'
                          id='male'
                          name='gender'
                          value='Male'
                          checked={patient.gender === 'Male'}
                          onChange={handleInputChange}
                          className='form-check-input'
                        />
                        <label htmlFor='male' className='form-check-label'>
                          Male
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          type='radio'
                          id='female'
                          name='gender'
                          value='Female'
                          checked={patient.gender === 'Female'}
                          onChange={handleInputChange}
                          className='form-check-input'
                        />
                        <label htmlFor='female' className='form-check-label'>
                          Female
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          type='radio'
                          id='other'
                          name='gender'
                          value='Other'
                          checked={patient.gender === 'Other'}
                          onChange={handleInputChange}
                          className='form-check-input'
                        />
                        <label htmlFor='other' className='form-check-label'>
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='dob' className='form-label'>
                      Date of Birth
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='dob'
                      value={patient.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label className='form-label'>Allergy</label>
                    <div className='form-check'>
                      <input
                        type='radio'
                        id='allergyYes'
                        name='allergy'
                        value='Yes'
                        checked={patient.allergy === 'Yes'}
                        onChange={handleInputChange}
                        className='form-check-input'
                      />
                      <label htmlFor='allergyYes' className='form-check-label'>
                        Yes
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='radio'
                        id='allergyNo'
                        name='allergy'
                        value='No'
                        checked={patient.allergy === 'No'}
                        onChange={handleInputChange}
                        className='form-check-input'
                      />
                      <label htmlFor='allergyNo' className='form-check-label'>
                        No
                      </label>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Blood Pressure</label>
                    <div className='form-check'>
                      <input
                        type='radio'
                        id='bloodPressureYes'
                        name='bloodPressure'
                        value='Yes'
                        checked={patient.bloodPressure === 'Yes'}
                        onChange={handleInputChange}
                        className='form-check-input'
                      />
                      <label htmlFor='bloodPressureYes' className='form-check-label'>
                        Yes
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='radio'
                        id='bloodPressureNo'
                        name='bloodPressure'
                        value='No'
                        checked={patient.bloodPressure === 'No'}
                        onChange={handleInputChange}
                        className='form-check-input'
                      />
                      <label htmlFor='bloodPressureNo' className='form-check-label'>
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className='mb-3 text-center'>
                  <button
                    onClick={onUpdate}
                    className='btn btn-success px-5'
                    type='button'
                  >
                    Update
                  </button>
                </div>
                <div className='text-center'>
                  <button onClick={() => navigate(-1)} className='btn btn-secondary'>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfileUpdate;
