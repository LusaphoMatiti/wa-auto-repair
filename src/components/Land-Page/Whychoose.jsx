import React from "react";
import "../../index.css";
import speech from "/Speech bubble.png";
import spanner from "/spanner.png";
import truck from "/tow-truck.png";

const Whychoose = () => {
  return (
    <section className="bg-white dark:bg-white-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-black">
          Why choose <span className="text-red-500">US</span>?
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white-500 shadow-lg rounded-xl dark:bg-white-800">
            <span className="inline-flex items-center justify-center p-4 text-white bg-red-500 rounded-full">
              <img
                src={speech} // Update the path to your PNG image
                alt="Quality Service" // Add a descriptive alt text
                className="w-8 h-8 object-cover" // Ensure the image covers the container
              />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize-700">
              Every job is personal
            </h1>

            <p className="text-gray-700 dark:text-gray-700">
              If you want the quality you would expect from the dealership, but
              with a more personal and friendly atmosphere, you have found it.
            </p>

            <a
              href="#"
              className="flex items-center -mx-1 text-sm text-red-500 capitalize transition-colors duration-300 transform dark:text-red-400 hover:underline hover:text-red-600 dark:hover:text-red-500"
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
            </a>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white-500 shadow-lg rounded-xl dark:bg-white-800">
            <span className="inline-flex items-center justify-center p-4 text-white bg-red-500 rounded-full">
              <img
                src={spanner} // Update the path to your PNG image
                alt="Quality Service" // Add a descriptive alt text
                className="w-8 h-8 object-cover" // Ensure the image covers the container
              />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize-700">
              Great Material
            </h1>

            <p className="text-gray-700 dark:text-gray-700">
              We use diagnostic tools and repair equipment to ensure accurate
              assessments and high-quality repairs, no matter the make or model
              of your vehicle.
            </p>

            <a
              href="#"
              className="flex items-center -mx-1 text-sm text-red-500 capitalize transition-colors duration-300 transform dark:text-red-400 hover:underline hover:text-red-600 dark:hover:text-red-500"
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
            </a>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white-500 shadow-lg rounded-xl dark:bg-white-800">
            <span className="inline-flex items-center justify-center p-4 text-white bg-red-500 rounded-full">
              <img
                src={truck} // Update the path to your PNG image
                alt="Quality Service" // Add a descriptive alt text
                className="w-8 h-8 object-cover" // Ensure the image covers the container
              />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize-700">
              Professional standards
            </h1>

            <p className="text-gray-700 dark:text-gray-700">
              Our auto repair shop is capable of servicing a variety of models.
              We only do the work that is needed to fix your problem.
            </p>

            <a
              href="#"
              className="flex items-center -mx-1 text-sm text-red-500 capitalize transition-colors duration-300 transform dark:text-red-400 hover:underline hover:text-red-600 dark:hover:text-red-500"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Whychoose;
