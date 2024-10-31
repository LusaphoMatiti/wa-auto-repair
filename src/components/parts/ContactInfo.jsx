import React from "react";
import "../../index.css";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-gray-200 text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <span className="text-lg sm:text-xl mr-2 text-green-500">
            <FaWhatsapp />
          </span>
          <a
            href="tel:+1234567890"
            className="text-gray-800 hover:text-gray-600 font-semibold text-sm sm:text-base hover:underline pr-5"
          >
            076 432 8576 / 076 615 5998
          </a>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <span className="text-lg sm:text-xl mr-2">✉️</span>
          <a
            href="mailto:waautorepairs00@gmail.com"
            className="text-gray-800 hover:text-gray-600 font-semibold text-sm sm:text-base hover:underline pr-5"
          >
            waautorepairs00@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-lg sm:text-xl mr-2">🕒</span>
          <span className="font-semibold text-sm sm:text-base">
            Mon - Sat: 7 AM - 4 PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
