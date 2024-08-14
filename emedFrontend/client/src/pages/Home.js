import React from "react";

import { Link } from "react-router-dom";
import HomeCircles from "../components/HomeCircles";
import ChatBot from "../components/ChatBot";
import AboutSection from "../components/AboutSection";
import EmedServices from "../components/EmedServices";
import OurServices from "../components/OurServices";
import ConsultationInfo from "../components/ConsultationInfo";
const Home = () => {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="text-center bg-opacity-70 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800">
            Your Health, Our Priority
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find the right doctor and book an appointment instantly. Our experts
            are available 24/7 to assist you.
          </p>
          <Link
            to="/doctors"
            className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            View Our Doctors
          </Link>
        </div>
      </section>
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Book an Appointment Now
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Our dedicated doctors are just a click away. Schedule your appointment
          today.
        </p>
        <Link
          to="/appointments"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Book An Appointment
        </Link>
      </section>

      {/* Statistics Section */}
      <HomeCircles />

      <EmedServices />
      {/* CTA Section */}

      <AboutSection />
      <ConsultationInfo />
      <OurServices />

      {/* ChatBot */}
      <ChatBot />
    </main>
  );
};

export default Home;
