import React from "react";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Dentist",
      description:
        "Dentists are healthcare professionals who specialize in the diagnosis, treatment, and prevention of oral health issues.",
      imgSrc: "s1.png",
    },
    {
      id: 2,
      title: "Cardiologist",
      description:
        "Cardiologists are physicians specializing in the diagnosis, treatment, and prevention of heart-related conditions and diseases.",
      imgSrc: "s2.png",
    },
    {
      id: 3,
      title: "Child Specialist",
      description:
        "Child specialists diagnose conditions, promote healthy growth and development, and guide parents on child healthcare.",
      imgSrc: "s3.png",
    },
    {
      id: 4,
      title: "Gastroenterologist",
      description:
        "Gastroenterologists are medical specialists who diagnose and treat disorders of the digestive system, including the esophagus, stomach, intestines, liver, and pancreas.",
      imgSrc: "s4.png",
    },
    {
      id: 5,
      title: "Heart Caring",
      description:
        "Heart Caring encompasses practices aimed at promoting cardiovascular health. This includes lifestyle choices like regular exercise and a healthy diet.",
      imgSrc: "s5.png",
    },
    {
      id: 6,
      title: "Pharmacist",
      description:
        "Pharmacists are healthcare professionals responsible for dispensing medications, ensuring patient safety, and providing medication counseling.",
      imgSrc: "s6.png",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-4xl font-bold text-black">Our Services</h2>
      <p className="text-xl text-center mt-2 max-md:max-w-md">
        We offer comprehensive medical care to address a wide range of health
        needs.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 max-w-screen-2xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-5 transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-56 object-cover rounded-md mb-4"
              src={service.imgSrc}
              alt={service.title}
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#2F87EE]">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
