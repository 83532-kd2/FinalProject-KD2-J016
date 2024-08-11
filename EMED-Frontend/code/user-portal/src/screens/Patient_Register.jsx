import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../services/user';
import '../styles/Register.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
function PatientRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [allergy, setAllergy] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const navigate = useNavigate();

  const onRegister = async () => {
    if (firstName.trim().length === 0) {
      toast.error('Please enter first name');
    } else if (lastName.trim().length === 0) {
      toast.error('Please enter last name');
    } else if (email.trim().length === 0) {
      toast.error('Please enter email');
    } 
     else if (phone.trim().length === 0) {
      toast.error('Please enter Phone Number');
    }
    else if (age.trim().length === 0) {
      toast.error('Please enter TheAge');
    }
    else if (password.trim().length === 0) {
      toast.error('Please enter password');
    } else if (confirmPassword.trim().length === 0) {
      toast.error('Please confirm the password');
    } else if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } 
    else if (country.trim().length === 0) {
      toast.error('Please select country');
    } else if (state.trim().length === 0) {
      toast.error('Please select state');
    }else {
      // Call your registration API
      const result = await register({
        firstName,
        lastName,
        email,
        password,
        phone,
        gender,
        dob,
        age,
        allergy,
        bloodPressure,
        country,
        state,
        area,
        city,
        zipCode,
      });

      if (result.status === 'success') {
        toast.success('Successfully registered a new user');
        navigate('/login');
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
    ],  };

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    // Reset state when country changes to prevent invalid state selection
    setState('');
  };
  return (
    <div className='container' style={{
    
    backgroundColor:'black',width: "100vw"
    }}>
      <div className='row justify-content-center' >
        <div className='col' style={{
      backgroundImage: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      backgroundSize: "cover",
      backgroundPosition: "center",
      // height: "100vh",
       width: "100vw",
    }} >
          <div className='card shadow-sm'style={{backgroundColor:'lightcyan'}}>
            <div className='card-body'>
              <h2 className='card-title text-center mb-4'>Patient Registration</h2>
              <form className='needs-validation' noValidate>
              <div className='d-flex justify-content-evenly' >
                <div className='mb-3 me-2 '>                 
                  <label htmlFor='firstName' className='form-label'>
                    First Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                   
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    
                  />
                </div>
                </div>
                
                <div className='d-flex justify-content-evenly' >
                <div className='mb-3'>
                  <label htmlFor='age' className='form-label'>
                    Age
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='area' className='form-label'>Area</label>
                  <input
                    type='text'
                    className='form-control'
                    id='area' 
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                </div>
                 
                <div className='d-flex justify-content-evenly' >
                <div className='mb-3'>
                  <label htmlFor='city' className='form-label'>City</label>
                  <input
                    type='text'
                    className='form-control'
                    id='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='zipCode' className='form-label'>Zip Code</label>
                  <input
                    type='text'
                    className='form-control'
                    id='zipCode'
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
                </div>

                <div className='d-flex justify-content-evenly' >
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className='invalid-feedback'>
                    Please enter a password.
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor='confirmPassword' className='form-label'>
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  </div>
                  <div className='invalid-feedback'>
                    Please confirm your password.
                  </div>
                </div>

                <div className='d-flex justify-content-evenly' >
            <div className='mb-3'>
                  <label htmlFor='country' className='form-label'>Country</label>
                  <select
                    className='form-control'
                    id='country'
                    value={country}
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
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value=''>Select State</option>
                    {country &&
                      states[country].map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                  </select>
                </div>
                </div>
               
                <div className='d-flex justify-content-evenly' >
                <div className='mb-3'>
                  <label className='form-label'>Gender</label>
                  <div>
                    <div className='form-check form-check-inline'>
                      <input
                        type='radio'
                        id='male'
                        name='gender'
                        value='Male'
                        onChange={(e) => setGender(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}
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
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                </div>
                <div className='d-flex justify-content-evenly' >
                <div className='mb-3'>
                  <label className='form-label'>Allergy</label>
                  <div className='form-check'>
                    <input
                      type='radio'
                      id='allergyYes'
                      name='allergy'
                      value='Yes'
                      onChange={(e) => setAllergy(e.target.value)}
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
                      onChange={(e) => setAllergy(e.target.value)}
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
                      onChange={(e) => setBloodPressure(e.target.value)}
                      className='form-check-input'
                    />
                    <label
                      htmlFor='bloodPressureYes'
                      className='form-check-label'
                    >
                      Yes
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      type='radio'
                      id='bloodPressureNo'
                      name='bloodPressure'
                      value='No'
                      onChange={(e) => setBloodPressure(e.target.value)}
                      className='form-check-input'
                    />
                    <label
                      htmlFor='bloodPressureNo'
                      className='form-check-label'
                    >
                      No
                    </label>
                  </div>
                </div>
                </div>
                <div className='mb-3 text-center'>
                  <button
                    onClick={onRegister}
                    className='btn btn-success px-5'
                    type='button'
                  >
                    Register
                  </button>
                </div>
                <div className='text-center'>
                  Already have an account?{' '}
                  <Link to='/login' className='link-primary'>
                    Login here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
