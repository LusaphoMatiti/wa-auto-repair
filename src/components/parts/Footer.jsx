import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="bg-gray-200 ">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="/">
                <h1 className="my-2  transition-colors duration-300 transform   text-white dark:text-white hover:text-red-700 dark:hover:text-red-400 md:mx-4 md:my-0 font-oswald text-2xl">
                  WA AUTO REPAIR
                </h1>
              </a>

              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Reddit"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG path for Reddit icon */}
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG path for Facebook icon */}
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG path for Github icon */}
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  title: "About",
                  links: [{ name: "Company", path: "/about" }],
                },

                {
                  title: "Services",
                  links: [
                    { name: "Engine", path: "/services/engine" },
                    { name: "Overhaul", path: "/services/overhaul" },
                    { name: "Gearboxes", path: "/services/gearbox" },
                    { name: "Brakes", path: "/services/brakes" },
                    { name: "CV Joints", path: "/services/cv-joints" },
                    { name: "Clutches", path: "/services/clutches" },
                  ],
                },
                {
                  title: "Whatsapp",
                  whatsapp: ["061 884 5728 / 071 358 6828"],
                },
                {
                  title: "Phone",
                  call: ["076 432 8576"],
                },
                {
                  title: "Email",
                  email: ["waautorepairs00@email.com / skamanena@gmail.com"],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    {section.title}
                  </h3>
                  {section.links &&
                    section.links.map((link, i) => (
                      <Link
                        key={i}
                        to={link.path}
                        className="block mt-2 text-sm text-black   hover:text-red-500 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    ))}
                  {section.whatsapp &&
                    section.whatsapp.map((whatsapp, i) => (
                      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <span
                            key={i}
                            to={whatsapp.path}
                            className="text-lg sm:text-xl mr-2 text-green-400"
                          >
                            <FaWhatsapp />
                          </span>
                          <span
                            key={i}
                            className="block mt-2 text-sm text-black"
                          >
                            {whatsapp}
                          </span>
                        </div>
                      </div>
                    ))}
                  {section.call &&
                    section.call.map((call, i) => (
                      <div className="container mx-auto flex flex-col sm:flex-row justify-between ">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <span
                            key={i}
                            to={call.path}
                            className="text-lg sm:text-xl mr-2 text-gray-400"
                          >
                            <FaPhone />
                          </span>
                          <span
                            key={i}
                            className="block mt-2 text-sm text-black"
                          >
                            {call}
                          </span>
                        </div>
                      </div>
                    ))}
                  {section.email &&
                    section.email.map((email, i) => (
                      <div className="container mx-auto flex flex-col sm:flex-row justify-between ">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <span
                            key={i}
                            to={email.path}
                            className="text-lg sm:text-xl mr-2 text-gray-400"
                          >
                            <FaEnvelope />
                          </span>
                          <span
                            key={i}
                            className="block mt-2 text-sm text-black "
                          >
                            {email}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-gray-400 text-sm">
            Built, maintained, and SEO by{" "}
            <a
              className="text-black hover:text-red-500"
              href="https://lmdevpro.vercel.app/"
            >
              LMDevPro
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
