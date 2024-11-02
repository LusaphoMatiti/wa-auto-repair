import React from "react";
import "../../index.css";
import tools from "/tools.jpg";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-white  lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-whitelg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        {/* Image section */}
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage: `url(${tools})`,
            }}
          ></div>
        </div>

        {/* Text and Call-to-Action section */}
        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-black-800 dark:text-black md:text-3xl">
            Need your car <span className="text-red-500">Fixed</span>?
          </h2>

          <p className="mt-4 text-black-500 dark:text-black-300">
            Your car deserves expert attention, whether it’s for a quick fix or
            a major repair. Our skilled team is ready to get you back on the
            road safely. From diagnostics to complete repairs, we handle it all.
            Contact us today, let’s keep your car running smoothly!
          </p>

          {/* CTA Button */}
          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-red-800 rounded-lg hover:bg-red-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
