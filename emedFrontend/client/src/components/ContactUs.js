import React from 'react';
import Sidebar from '../components/Sidebar'; // Adjust the path according to the file location

const ContactUs = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <section className="text-center bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We're here to help you with any questions or concerns you may have about your healthcare experience.
            Whether you need assistance with booking appointments, managing your profile, or understanding the 
            services offered by our partner doctors and clinics, our team is ready to assist. Please feel free to 
            reach out to us using the contact details below. Your health and satisfaction are our top priorities, 
            and we're committed to providing you with the support you need for a seamless and stress-free experience.
          </p>
        </section>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">ADDRESS</h3>
            <p className="text-lg text-gray-600">27 13 Lowe Haven</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">PHONE</h3>
            <p className="text-lg text-gray-600">111 343 43 43</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">EMAIL</h3>
            <p className="text-lg text-gray-600">business@info.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
