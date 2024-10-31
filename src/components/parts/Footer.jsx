import React from "react";
import { Link } from "react-router-dom";
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
                  title: "Contact",
                  contacts: [
                    "076 432 8576 / 061 884 5728",
                    "waautorepairs00@email.com / skamanena@gmail.com",
                  ],
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
                  {section.contacts &&
                    section.contacts.map((contact, i) => (
                      <span
                        key={i}
                        className="block mt-2 text-sm text-black  hover:text-red-500 cursor-pointer"
                      >
                        {contact}
                      </span>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Built, maintened and SEO by{" "}
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
