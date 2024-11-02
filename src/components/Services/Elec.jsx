import React from "react";
import elec from "/electrical-diagnostics.jpg";
import diagnosticIcon from "/diagnostic.png";
import { Link } from "react-router-dom";

const Elec = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-24 p-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <div
          className="lg:w-1/2 flex justify-center"
          style={{ paddingLeft: "10px" }}
        >
          <img
            src={elec}
            alt="Engine illustration"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div
          className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left"
          style={{ maxWidth: "500px", marginLeft: "18px" }}
        >
          <span className="inline-flex items-center justify-center p-4 text-white bg-red-500 rounded-full">
            <img src={diagnosticIcon} alt="Engine Icon" className="w-6 h-6" />
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Electric Diagnostic
          </h2>

          <p className="text-sm text-gray-500 mt-8 sm:text-base md:mb-10 lg:mb-12">
            Vehicle electrical problems can be confusing and frustrating.
            Whether you're facing dashboard warning lights, flickering
            headlights, or issues with your audio or climate control, we can
            help. Our electric diagnostic service pinpoints the exact issue
            quickly, saving you time and guesswork. We use modern tools to
            analyze every part of your car’s electrical system, ensuring it
            works as it should, without unexpected shutdowns or surprises.
          </p>

          <p className="mt-6 text-gray-500">
            Contact us today to resolve electrical issues
          </p>
          <button className="inline-flex items-center justify-center mt-10 px-6 py-2 text-sm text-white duration-300 bg-red-800 rounded-lg hover:bg-red-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <Link to="/contact">Contact us</Link>
          </button>
          <p className="mt-10 text-gray-500">
            Related Service:{" "}
            <span className="text-blue-500 hover:text-blue-800 underline">
              <Link to="/services/engine">Engine</Link>
            </span>{" "}
            for comprehensive vehicle performance support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Elec;
