import React from "react";
import engine from "/engine.jpg";
import engineIcon from "/engine.png";
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
            src={engine}
            alt="Engine illustration"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div
          className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left"
          style={{ maxWidth: "500px", marginLeft: "30px" }}
        >
          <span className="inline-flex items-center justify-center p-4 text-white bg-red-500 rounded-full">
            <img src={engineIcon} alt="Engine Icon" className="w-6 h-6" />
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Engine Repair and Maintenance
          </h2>

          <p className="text-sm text-gray-500 mt-8 sm:text-base md:mb-10 lg:mb-12">
            Your vehicle's engine is what keeps it moving. If you've noticed
            strange sounds, smoke, trouble starting, or reduced fuel efficiency,
            your engine might need attention. A neglected engine can lead to
            breakdowns and costly repairs down the line. Our team is equipped to
            handle all aspects of engine care, from oil changes and part
            replacements to in-depth diagnostics. We work to make your engine
            run like new so you can enjoy safe, worry-free drives every day.
          </p>

          <p className="mt-6 text-gray-500">
            Contact us today to schedule a checkup and keep your engine running
            strong!
          </p>
          <button className="inline-flex items-center justify-center mt-10 px-6 py-2 text-sm text-white duration-300 bg-red-800 rounded-lg hover:bg-red-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <Link to="/contact">Contact us</Link>
          </button>
          <p className="mt-10 text-gray-500">
            Related Service:{" "}
            <span className="text-blue-500 hover:text-blue-800 underline">
              <Link to="/services/gearbox">Gearbox and Transmission</Link>
            </span>{" "}
            for better engine performance and longevity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Engine;
