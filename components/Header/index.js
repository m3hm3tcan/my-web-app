import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <h1 className="lucky-text self-center font-semibold whitespace-nowrap text-green-800 text-3xl ">
                <span>Developer</span> <span>Life</span>
              </h1>
            </a>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center bg-green-700 p-2 ml-3 text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open Menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0">
              <li>
                <Link href="/">
                  <a
                    className="block py-2 pr-4 pl-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:hover:text-gray-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="block py-2 pr-4 pl-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:hover:text-gray-700 md:p-0 dark:text-white">
                    Time Line
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:hover:text-gray-700 md:p-0 dark:text-white">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700  md:hover:text-gray-700 md:p-0 dark:text-whitet">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
