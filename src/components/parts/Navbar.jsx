import React, { useState, useEffect } from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controls dropdown visibility

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-container") &&
        !event.target.closest(".services-link")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black dark:bg-black-700 z-50">
      <nav className="relative bg-black dark:bg-black-700">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="my-2 transition-colors duration-300 transform text-white dark:text-white hover:text-red-700 dark:hover:text-red-400 md:mx-4 md:my-0 font-oswald text-2xl">
                WA AUTO REPAIR
              </h1>
            </Link>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="my-2 transition-colors duration-300 transform text-white dark:text-white hover:text-red-700 dark:hover:text-red-400 md:mx-4 md:my-0"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Main navigation links */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black dark:bg-black-700 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="my-2 transition-colors duration-300 text-white dark:text-white hover:text-red-700 dark:hover:text-red-400 md:mx-4 md:my-0"
                to="/"
              >
                Home
              </Link>

              {/* Services link with dropdown */}
              <div className="relative dropdown-container">
                <button
                  className="my-2 transition-colors duration-300 transform text-white dark:text-white hover:text-red-700 dark:hover:text-red-400 md:mx-4 md:my-0 services-link"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Services
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 bg-black shadow-lg rounded-md z-30">
                    <Link
                      to="/services/engine"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      Engine
                    </Link>
                    <Link
                      to="/services/overhaul"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      Overhaul
                    </Link>
                    <Link
                      to="/services/gearbox"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      Gearboxes
                    </Link>
                    <Link
                      to="/services/brakes"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      Brakes
                    </Link>
                    <Link
                      to="/services/cv-joints"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      CV Joints
                    </Link>
                    <Link
                      to="/services/clutches"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      Clutches
                    </Link>
                    <Link
                      to="/services/shocks"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      Shocks
                    </Link>
                    <Link
                      to="/services/suspension"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      Suspension
                    </Link>
                    <Link
                      to="/services/electric-diagnostic"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-500"
                    >
                      Electronic diag.
                    </Link>
                  </div>
                )}
              </div>

              <Link
                className="my-2 transition-colors duration-300 transform text-white dark:text-white hover:text-red-700 dark:hover:text-red-400 md:mx-4 md:my-0"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="my-2 transition-colors duration-300 transform text-white dark:text-white hover:text-red-700 dark:hover:text-red-400 md:mx-4 md:my-0"
                to="/about"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
