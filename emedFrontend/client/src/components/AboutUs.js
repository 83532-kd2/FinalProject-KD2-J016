import React from "react";
import image from "../images/aboutimg.jpg";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component

const AboutUs = () => {
  return (
    <>
      <section className="container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-1/2">
            <img
              src={image}
              alt="hero"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="lg:w-3/5 bg-white p-8 rounded-lg shadow-lg">
            <div className="text-lg leading-relaxed text-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                Welcome to EMED
              </h3>
              <p>
                Welcome to EMED, your trusted partner in managing your health
                and connecting with healthcare professionals. Our innovative
                application seamlessly bridges the gap between patients and
                doctors, offering an effortless way to book appointments with
                just a few clicks.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mt-8 mb-4">
                Our Mission
              </h3>
              <p>
                Our mission is to make healthcare more accessible and convenient
                for everyone. Our platform provides an easy-to-use interface for
                scheduling consultations with qualified healthcare
                professionals, ensuring you receive timely and personalized
                medical care.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mt-8 mb-4">
                Our Vision
              </h3>
              <p>
                We envision a world where healthcare is simplified and
                accessible to all, regardless of location or time constraints.
                By leveraging technology, we strive to improve the efficiency of
                medical consultations and enhance the overall patient
                experience.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mt-8 mb-4">
                How It Works
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong className="text-blue-600">Easy Booking:</strong>{" "}
                  Schedule appointments with top-rated doctors quickly and
                  effortlessly.
                </li>
                <li>
                  <strong className="text-blue-600">24/7 Accessibility:</strong>{" "}
                  Manage your health and book consultations anytime, anywhere.
                </li>
                <li>
                  <strong className="text-blue-600">Personalized Care:</strong>{" "}
                  Choose from a wide range of healthcare professionals based on
                  your specific needs.
                </li>
                <li>
                  <strong className="text-blue-600">
                    Secure and Confidential:
                  </strong>{" "}
                  Your personal and medical information is protected with the
                  highest standards of security.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mt-8 mb-4">
                Why Choose Us?
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong className="text-blue-600">Convenience:</strong> No
                  more waiting in long queues or dealing with busy phone lines.
                  Book your appointments online with ease.
                </li>
                <li>
                  <strong className="text-blue-600">Comprehensive Care:</strong>{" "}
                  From routine check-ups to specialized consultations, our
                  platform covers all your healthcare needs.
                </li>
                <li>
                  <strong className="text-blue-600">
                    Expert Professionals:
                  </strong>{" "}
                  Connect with certified and experienced doctors who are
                  committed to providing quality care.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mt-8 mb-4">
                Our Story
              </h3>
              <p>
                Founded in 2024, EMED was created out of a need to improve
                access to quality healthcare. Our team is dedicated to
                continuously enhancing the platform to better serve our users
                and support the healthcare community.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mt-8 mb-4">
                Get In Touch
              </h3>
              <p>
                We value your feedback and are here to help with any questions
                or concerns. Contact us at [Contact Information] or follow us on
                [Social Media Links].
              </p>
            </div>
          </div>
          <Sidebar /> {/* Add Sidebar here */}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
