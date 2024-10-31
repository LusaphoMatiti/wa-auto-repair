import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import hero1 from "../images/hero.jpg";
import hero2 from "../images/heroOne.jpg";
import hero3 from "../images/heroTwo.jpg";

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Move to the previous image
  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Move to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <section className="relative h-screen flex items-center overflow-hidden z-10">
        {/* Carousel */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative h-full w-full">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
          </div>
          {/* Carousel Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 z-10">
          <div className="backdrop-blur bg-opacity-100 rounded-lg">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white animate-easeIn">
              4 x 4 & Sedan SPECIALIST!
            </h1>
            <p className="mb-8 text-lg font-normal dark:text-white lg:text-xl sm:px-16 xl:px-48 animate-easeIn">
              Repairs & servicing of all diesel & petrol vehicles specialising
              in electronic diagnostic & fault finding.
            </p>
          </div>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-red-700 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
