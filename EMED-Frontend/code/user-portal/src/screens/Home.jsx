// src/screens/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import image from '../images/home.webp'

const Home = () => {
    const App_Name="HealthBooker";
  return (
    <div className="container-fluid"
    style={{
        backgroundColor:'lightcyan'
        
    }}>
      <Navbar />
      <br />
      <div className="hero-section container row" style={{
        backgroundImage:`url(${image})`,
        backgroundSize:'cover',
        borderRadius:'50px',
        width:'100vw',
        marginLeft:'12%'
      }}>
        <div className="hero-text col-7 " style={{height:'54vh',
            
        }}>
          <h1>Your Health, Our Responsibility</h1>
          <hr />
          <p style={{textAlign:'justify'}}>Welcome to {App_Name}, your ultimate solution for seamless healthcare management! Our platform connects you with top medical
             professionals effortlessly, allowing you to schedule and manage your appointments with ease. Whether you need a routine check-up or a specialized consultation,
               {App_Name} simplifies the process with real-time availability, personalized reminders, and secure communication. Experience the future of healthcare today—efficient, accessible,
               and tailored to your needs. Join us and take the first step towards a healthier you!

</p>
        </div>
        <div className="hero-image col-5">
          {/* <img src={image} alt="Doctor" 
          style={{width:'100vh'}}/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
