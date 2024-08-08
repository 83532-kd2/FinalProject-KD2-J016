import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Our innovative application seamlessly bridges the gap between patients and doctors,
             offering an effortless way to book appointments. With just a few clicks,
              patients can schedule consultations with qualified healthcare professionals,
               ensuring they receive timely and personalized medical care.
                The app's user-friendly interface and 24/7 accessibility mean that managing your health has never been more convenient. 
                Whether you need a routine check-up or urgent medical advice,
                 our platform provides a reliable and efficient solution to meet your healthcare needs, 
                 making it easier for you to prioritize your well-being.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
