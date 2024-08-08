import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from './screens/Login'

import DoctorRegister from './screens/Doctor_Register'
import DoctorProfileUpdate from './screens/UpdateDoctor.jsx'
import PatientRegister from './screens/Patient_Register.jsx'
import PatientProfileUpdate from './screens/UpdatePatient.jsx'
import Home from './screens/Home.jsx'
import Doctor from './screens/Doctors.jsx'

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
      
        <Route path='patientregister' element={<PatientRegister/>} />
        <Route path='doctorregister' element={<DoctorRegister />} />
        <Route path='updatedoctor' element={<DoctorProfileUpdate />} />
        <Route path='updatepatient' element={<PatientProfileUpdate />} />
        <Route path='doctors' element={<Doctor />} />

      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
