import React from "react";
import overhaul from "/overhaul-p.png";
import overHaulIcon from "/overhaul.png";
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
            src={overhaul}
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
            <img src={overHaulIcon} alt="Engine Icon" className="w-6 h-6" />
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Full Overhaul</h2>

          <p className="text-sm text-gray-500 mt-8 sm:text-base md:mb-10 lg:mb-12">
            Sometimes, vehicles require a fresh start. If you've noticed
            multiple issues, from engine trouble to suspension wear, a full
            vehicle overhaul might be the answer. An overhaul includes
            comprehensive checks, part replacements, and fine-tuning of major
            components, ensuring your vehicle is in peak condition. This is
            particularly valuable for high-mileage cars or vehicles showing
            signs of aging. With our skilled mechanics, every part is carefully
            inspected, repaired, or replaced to restore your vehicle’s
            reliability and safety.
          </p>

          <p className="mt-6 text-gray-500">
            Contact us for a quote on a complete overhaul and make your car feel
            like new again.
          </p>
          <button className="inline-flex items-center justify-center mt-10 px-6 py-2 text-sm text-white duration-300 bg-red-800 rounded-lg hover:bg-red-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <Link to="/contact">Contact us</Link>
          </button>
          <p className="mt-10 text-gray-500">
            Related Service:{" "}
            <span className="text-blue-500 hover:text-blue-800 underline">
              <a href="">Engine Repair</a>
            </span>{" "}
            and
            <span className="text-blue-500 hover:text-blue-800 underline">
              {" "}
              <a href="">Brakes</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Engine;
