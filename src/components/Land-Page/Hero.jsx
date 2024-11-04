import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import hero1 from "/hero.jpg";
import hero2 from "/heroOne.jpg";
import hero3 from "/heroTwo.jpg";
import workshop from "/workshop.jpg";

const Hero = () => {
  const images = [hero1, workshop, hero2, hero3];
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
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
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
        <div className="relative py-3 px-2 mx-auto max-w-screen-sm text-center sm:py-6 sm:px-3 md:py-8 md:px-6 lg:py-16 lg:px-12 z-10">
          <div className="backdrop-blur bg-opacity-90 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
            <h1 className="mb-2 text-2xl font-extrabold tracking-tight leading-snug text-white sm:text-3xl md:text-5xl lg:text-6xl animate-easeIn">
              4 x 4 & Sedan SPECIALIST!
            </h1>
            <p className="mb-4 text-xs font-normal text-white sm:text-sm md:text-lg lg:text-xl sm:px-4 md:px-12 xl:px-24 animate-easeIn">
              Repairs & servicing of all diesel & petrol vehicles specializing
              in electronic diagnostics & fault finding.
            </p>
          </div>

          <button
            type="submit"
            className="mt-8 py-2 px-4 text-xs font-medium text-center text-white rounded-lg bg-red-800 hover:bg-red-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
          >
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
