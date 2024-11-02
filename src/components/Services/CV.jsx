import React from "react";
import cvJoint from "/cvJoint.jpg";
import cvIcon from "/cv-joint.png";
import { Link } from "react-router-dom";

const Engine = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-24 p-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <div
          className="lg:w-1/2 flex justify-center"
          style={{ paddingLeft: "10px" }}
        >
          <img
            src={cvJoint}
            alt="Engine illustration"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div
          className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left"
          style={{ maxWidth: "500px", marginLeft: "60px" }}
        >
          <span className="inline-flex items-center justify-center p-4 text-white bg-red-500 rounded-full">
            <img src={cvIcon} alt="Engine Icon" className="w-6 h-6" />
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">CV Joints</h2>

          <p className="text-sm text-gray-500 mt-8 sm:text-base md:mb-10 lg:mb-12">
            CV joints play a crucial role in delivering power from your
            transmission to your wheels. When CV joints wear out, you may hear a
            clicking sound when turning, or notice vibrations while driving,
            both signs of potential failure. Faulty CV joints can compromise
            your ability to handle the car smoothly and safely. Our service
            includes a full inspection and replacement of worn joints, ensuring
            safe, consistent power to your wheels.
          </p>

          <p className="mt-6 text-gray-500">
            Contact us today to keep your vehicle stable and responsive.
          </p>
          <button className="inline-flex items-center justify-center mt-10 px-6 py-2 text-sm text-white duration-300 bg-red-800 rounded-lg hover:bg-red-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <Link to="/contact">Contact us</Link>
          </button>
          <p className="mt-10 text-gray-500">
            Related Service:{" "}
            <span className="text-blue-500 hover:text-blue-800 underline">
              <Link to="/services/suspension">Suspension Repair</Link>
            </span>{" "}
            for a better, safer driving experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Engine;
