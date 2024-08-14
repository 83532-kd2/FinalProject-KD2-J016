import React from "react";
import CountUp from "react-countup";

const HomeCircles = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto flex flex-wrap justify-center gap-10">
        {/* Circle 1 */}
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg">
          <div className="text-4xl font-bold text-blue-600">
            <CountUp start={0} end={600} duration={3} />+
          </div>
          <div className="mt-2 text-center text-gray-700 text-lg">
            Satisfied Patients
          </div>
        </div>

        {/* Circle 2 */}
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg">
          <div className="text-4xl font-bold text-blue-600">
            <CountUp start={0} end={50} duration={3} />+
          </div>
          <div className="mt-2 text-center text-gray-700 text-lg">
            Verified Doctors
          </div>
        </div>

        {/* Circle 3 */}
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg">
          <div className="text-4xl font-bold text-blue-600">
            <CountUp start={0} end={20} duration={3} />+
          </div>
          <div className="mt-2 text-center text-gray-700 text-lg">
            Specialist Doctors
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCircles;
