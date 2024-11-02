import React from "react";
import shocks from "/shocks.jpg";
import shocksIcon from "/shocks.png";
import { Link } from "react-router-dom";

const Shocks = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-24 p-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <div
          className="lg:w-1/2 flex justify-center"
          style={{ paddingLeft: "10px" }}
        >
          <img
            src={shocks}
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
            <img src={shocksIcon} alt="Engine Icon" className="w-6 h-6" />
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Shocks</h2>

          <p className="text-sm text-gray-500 mt-8 sm:text-base md:mb-10 lg:mb-12">
            Worn-out shocks can make every bump on the road feel jarring,
            reducing driving comfort and even safety. If you’re experiencing
            excessive bouncing or your vehicle feels unstable, especially on
            rough roads, it’s likely time to check your shocks. Our service
            includes inspecting and replacing worn shocks, which absorbs the
            impact from rough surfaces, making your drive smoother and more
            comfortable. Good shocks aren’t just about comfort; they also help
            your brakes work better and keep your tires in good shape.
          </p>

          <p className="mt-6 text-gray-500">
            Reach out to us to bring comfort back to your ride.
          </p>
          <button className="inline-flex items-center justify-center mt-10 px-6 py-2 text-sm text-white duration-300 bg-red-800 rounded-lg hover:bg-red-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <Link to="/contact">Contact us</Link>
          </button>
          <p className="mt-10 text-gray-500">
            Related Service:{" "}
            <span className="text-blue-500 hover:text-blue-800 underline">
              <Link to="/services/cv-joints">CV Joint Repair</Link>
            </span>{" "}
            for smooth handling and control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shocks;
