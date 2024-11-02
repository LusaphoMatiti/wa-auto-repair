import React, { useState, useEffect } from "react";
import "../../index.css"; // Assuming you're using TailwindCSS
import engine from "/engine.png";
import gearbox from "/gearbox.png";
import clutch from "/clutch.png";
import brakes from "/brakes.png";
import cv from "/cv-joint.png";
import overhaul from "/overhaul.png";
import image from "/services.jpg";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Engine",
    description:
      "Expert repair and maintenance for optimal engine performance.",
    icon: (
      <img
        src={engine} // Replace with your PNG path
        alt="Engine Icon"
        className="w-6 h-6"
      />
    ),
    link: "/services/engine", // Add link property
  },
  {
    title: "Gearboxes",
    description: "Smooth gearbox repair and replacement for seamless shifting.",
    icon: (
      <img
        src={gearbox} // Replace with your PNG path
        alt="Gearbox Icon"
        className="w-6 h-6"
      />
    ),
    link: "/services/gearbox", // Add link property
  },
  {
    title: "Clutches",
    description:
      "Professional clutch services for responsive and reliable driving.",
    icon: (
      <img
        src={clutch} // Replace with your PNG path
        alt="Clutch Icon"
        className="w-6 h-6"
      />
    ),
    link: "/services/clutches", // Add link property
  },
  {
    title: "Brakes",
    description:
      "Precision brake repairs ensuring maximum stopping power and safety.",
    icon: (
      <img
        src={brakes} // Replace with your PNG path
        alt="Brakes Icon"
        className="w-6 h-6"
      />
    ),
    link: "/services/brakes", // Add link property
  },
  {
    title: "CV Joints",
    description:
      "Specialized CV joint services for smooth wheel rotation and stability.",
    icon: (
      <img
        src={cv} // Replace with your PNG path
        alt="CV Joint Icon"
        className="w-6 h-6"
      />
    ),
    link: "/services/cv-joints", // Add link property
  },
  {
    title: "Overhauls",
    description:
      "Complete vehicle overhauls to restore peak performance and longevity.",
    icon: (
      <img
        src={overhaul} // Replace with your PNG path
        alt="Overhaul Icon"
        className="w-6 h-6"
      />
    ),
    link: "/services/overhaul", // Add link property
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaused(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
        setPaused(false);
      }, 2000); // Pause for 2 seconds at the center
    }, 7000); // Adjusted total time to account for slower sliding and pausing
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-black dark:bg-black-900 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
        backdropFilter: "blur(5px)", // Adjust blur level as desired
      }}
    >
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center">
          Our <span className="underline decoration-red-500">Services</span>
        </h1>

        <p className="mt-4 text-white xl:mt-6  text-center ">
          The services we offer for your car:
        </p>

        <div className="relative h-64 mt-8 xl:mt-12 flex justify-center items-center overflow-hidden backdrop-blur bg-opacity-200 rounded-lg">
          {/* Slider */}
          <div
            className={`flex transition-transform ease-in-out ${
              paused ? "duration-2000" : "duration-700"
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${servicesData.length * 100}%`,
            }}
          >
            {servicesData.map((component, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center space-y-3"
                style={{
                  minWidth: "100%", // Full width for each item to center
                  textAlign: "center", // Center content in each slide
                }}
              >
                <span className="inline-block p-3 text-white bg-red-100 rounded-full dark:text-white dark:bg-red-500">
                  {component.icon}
                </span>
                <h1 className="text-xl font-semibold text-white capitalize dark:text-white">
                  {component.title}
                </h1>
                <p
                  className="text-white text-center md:w-3/4 lg:w-1/2 mx-auto"
                  style={{ maxWidth: "250px" }} // Change 600px to your desired max width
                >
                  {component.description}
                </p>
                <Link
                  to={component.link}
                  className="inline-flex items-center -mx-1 text-sm text-red-500 capitalize transition-colors duration-300 transform dark:text-red-400 hover:underline hover:text-red-600 dark:hover:text-red-500"
                >
                  <span className="mx-1">read more</span>
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
