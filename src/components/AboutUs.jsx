import React from "react";
import { Link } from "react-router-dom";
import workshop from "/workshop.jpg";

const AboutUs = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      {/* Parallax Background Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${workshop})`,
            position: "fixed",
            zIndex: -1,
            height: "100%",
            width: "100%",
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-10" />{" "}
        {/* Optional overlay */}
        <div className="flex flex-col justify-center items-start h-full p-10 text-white">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6">
            At WA AUTO REPAIR, we’re committed to honest, reliable, and
            high-quality auto repair. Founded in [Year], our experienced team
            offers expert services to keep your vehicle safe and running
            smoothly.
          </p>
          <h2 className="text-2xl font-semibold leading-7 pt-6">
            Our Services
          </h2>
          <p className="font-normal text-base leading-6">
            We specialize in everything from brake repairs and oil changes to
            diagnostics and full engine work. Whatever you need, we’ve got you
            covered.
          </p>
          <h2 className="text-2xl font-semibold leading-7 pt-6">Our Promise</h2>
          <p className="font-normal text-base leading-6">
            We prioritize customer satisfaction, transparent pricing, and timely
            repairs.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold leading-7 text-white pt-6">
            Get in Touch
          </h2>
          <p className="font-normal text-base leading-6 text-white">
            Contact us today to book an appointment!
          </p>
          <button className="mt-4 px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
