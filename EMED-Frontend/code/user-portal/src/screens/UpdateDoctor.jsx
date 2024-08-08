import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDoctorProfile, updateDoctorProfile } from '../services/user';

function DoctorProfileUpdate() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  
  const [fees, setFees] = useState('');
  const [description, SetDescription] = useState('');
  const [qualification, SetQualification] = useState('');
  const [specification, SetSpecification] = useState('');
  
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const navigate = useNavigate();
  const { id } = useParams(); // Assuming you're passing doctor ID via URL

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      const result = await getDoctorProfile(id);
      if (result.status === 'success') {
        const profile = result.data;
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
        setEmail(profile.email);
        setPhone(profile.phone);
        setGender(profile.gender);
        setDob(profile.dob);
        setAge(profile.age);
        setFees(profile.fees);
        SetDescription(profile.description);
        SetQualification(profile.qualification);
        SetSpecification(profile.specification);
        setCountry(profile.country);
        setState(profile.state);
        setArea(profile.area);
        setCity(profile.city);
        setZipCode(profile.zipCode);
      } else {
        toast.error(result.error);
      }
    };

    fetchDoctorProfile();
  }, [id]);

  const onUpdate = async () => {
    if (firstName.trim().length === 0) {
      toast.error('Please enter first name');
    } else if (lastName.trim().length === 0) {
      toast.error('Please enter last name');
    } else if (email.trim().length === 0) {
      toast.error('Please enter email');
    } else if (phone.trim().length === 0) {
      toast.error('Please enter phone number');
    } else if (age.trim().length === 0) {
      toast.error('Please enter the age');
    } else if (fees.trim().length === 0) {
      toast.error('Please enter consultation fees');
    } else if (description.trim().length === 0) {
      toast.error('Please enter description');
    } else if (qualification.trim().length === 0) {
      toast.error('Please enter qualification');
    } else if (specification.trim().length === 0) {
      toast.error('Please enter specification');
    } else if (country.trim().length === 0) {
      toast.error('Please select country');
    } else if (state.trim().length === 0) {
      toast.error('Please select state');
    } else {
      const result = await updateDoctorProfile(id, {
        firstName,
        lastName,
        email,
        phone,
        gender,
        dob,
        age,
        fees,
        description,
        qualification,
        specification,
        country,
        state,
        area,
        city,
        zipCode,
      });

      if (result.status === 'success') {
        toast.success('Profile updated successfully');
        navigate('/profile');
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
    ],
  };

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setState('');
  };

  return (
    <div className='container mt-50'>
      <div className='row justify-content-center'>
        <div className='col-md-60'>
          <div className='card shadow-sm' style={{ backgroundColor: 'lightcyan' }}>
            <div className='card-body'>
              <h2 className='card-title text-center mb-4'>Update Doctor Profile</h2>
              <form className='needs-validation' noValidate>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='firstName' className='form-label'>First Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='lastName' className='form-label'>Last Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='phone' className='form-label'>Phone Number</label>
                    <input
                      type='tel'
                      className='form-control'
                      id='phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='age' className='form-label'>Age</label>
                    <input
                      type='text'
                      className='form-control'
                      id='age'
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='fees' className='form-label'>Consultation Fees</label>
                    <input
                      type='text'
                      className='form-control'
                      id='fees'
                      value={fees}
                      onChange={(e) => setFees(e.target.value)}
                    />
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='qualification' className='form-label'>Qualification</label>
                    <input
                      type='text'
                      className='form-control'
                      id='qualification'
                      value={qualification}
                      onChange={(e) => SetQualification(e.target.value)}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='specification' className='form-label'>Specification</label>
                    <input
                      type='text'
                      className='form-control'
                      id='specification'
                      value={specification}
                      onChange={(e) => SetSpecification(e.target.value)}
                    />
                  </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>Description</label>
                    <input
                      type='textarea'
                      className='form-control'
                      id='description'
                      value={description}
                      onChange={(e) => SetDescription(e.target.value)}
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
                <div className='d-flex justify-content-evenly'>
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
                </div>
                <div className='d-flex justify-content-evenly'>
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
                          checked={gender === 'Male'}
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
                          checked={gender === 'Female'}
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
                          checked={gender === 'Other'}
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
                    <label htmlFor='dob' className='form-label'>Date of Birth</label>
                    <input
                      type='date'
                      className='form-control'
                      id='dob'
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
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
                  <button
                    onClick={() => navigate('/profile')}
                    className='btn btn-secondary'
                    type='button'
                  >
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

export default DoctorProfileUpdate;
