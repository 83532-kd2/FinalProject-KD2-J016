import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/user';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '../styles/Login.css';   

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEmpty, setEmailEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);

  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.error('Please enter email');
    } else if (password.length === 0) {
      toast.error('Please enter password');
    } else {
      const result = await login(email, password);
      if (result.status === 'success') {
        const data = result.data;
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('token', data.token);
        navigate('/properties');
      } else {
        toast.error(result.error);
      }
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="card shadow-sm p-50">
            <h2 className="text-center mb-3">Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                onChange={(e) => {
                  if (e.target.value.length === 0) {
                    setEmailEmpty(true);
                  } else {
                    setEmailEmpty(false);
                  }
                  setEmail(e.target.value);
                }}
                type="email"
                className={`form-control ${isEmailEmpty ? 'is-invalid' : ''}`}
              />
              {isEmailEmpty && (
                <div className="invalid-feedback">Email is mandatory</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                onChange={(e) => {
                  if (e.target.value.length === 0) {
                    setPasswordEmpty(true);
                  } else {
                    setPasswordEmpty(false);
                  }
                  setPassword(e.target.value);
                }}
                type="password"
                className={`form-control ${isPasswordEmpty ? 'is-invalid' : ''}`}
              />
              {isPasswordEmpty && (
                <div className="invalid-feedback">Password is mandatory</div>
              )}
            </div>
            <div className="mb-4 text-center">
              Don't have an account? <Link to="/patientregister">Register here as Patient</Link><br/>
              <Link to="/doctorregister">Register here as Doctor</Link>
            </div>
            <button onClick={onLogin} className="btn btn-success w-100">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
