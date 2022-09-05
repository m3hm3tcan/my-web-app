import Head from "next/head";
import { useEffect, useState } from "react";

export default function About() {
  return (
    <div className="md:w-6/12 shadow-lg rounded-lg my-24 relative bg-neutral-900  drop-shadow-lg  shadow-green-700 pt-12">
      <div className="container  mx-auto w-full h-full min-w-0">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-0 md:left-1/2"></div>

          <div className="mb-8 flex justify-between items-center w-full  flex-row-reverse md:flex-row">
            <div className="order-1 w-1/12 md:w-5/12 "></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-10 rounded-full">
              <h1 className="mx-auto font-semibold  text-white text-sm md:text-lg">
                2019- ...
              </h1>
            </div>
            <div className="order-1  rounded-lg shadow-xl w-10/12 md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-lg md:text-xl">
                Full Stack Web Developer
              </h3>
              <p className="mb-3 font-bold text-white text-sm md:text-md">
                ExxonMobil - Hungary
              </p>
              <ul
                className="text-xs leading-snug tracking-wide text-gray-600 text-opacity-100 list-disc"
              >
                <li>Working with latest trends to create web application</li>
                <li>
                  Collaborating with UI/UX team to create application designs
                </li>
                <li>
                  Working with Azure services / environments to host web
                  projects
                </li>
                <li>
                  Continuous learning, researching new technologies and
                  implementing on web projects
                </li>
                <li>
                  Participating to innovation sprints to turn ideas into real
                  life products and more...
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-2/12 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-10 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-sm md:text-lg">
                2017-2019
              </h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-10/12 md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-lg md:text-xl">
                .NET Developer
              </h3>
              <p className="mb-3 font-bold text-white text-sm md:text-md">
                ATOS - Hungary
              </p>
                <ul className="text-xs leading-snug tracking-wide text-gray-600 text-opacity-100 list-disc">
                  <li>Producing code using .NET languages (C#, VB .NET)</li>
                  <li>Upgrading, configuring and debugging existing systems</li>
                  <li>Providing technical support for web applications</li>
                  <li>
                    Writing technical documents to maintain application for
                    future developments
                  </li>
                  <li>
                    Supporting users / product owner for applications and
                    more...
                  </li>
                </ul>
            </div>
          </div> 

          <div className="mb-8 flex justify-between items-center w-full right-timeline flex-row-reverse md:flex-row">
            <div className="order-1 w-1/12 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-10 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-sm md:text-lg">
                2009-2017
              </h1>
            </div>
            <div className="order-1  rounded-lg shadow-xl w-10/12 md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-lg md:text-xl">
                Civil Servant - Computer Eng.
              </h3>
              <p className="mb-3 font-bold text-white text-sm md:text-md ">
                General Command of Gendarmerie - Turkey
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-2/12 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-10 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-sm md:text-lg">
                2007-2008
              </h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-10/12 md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-lg md:text-xl">
                <i>3rd Lieutenant</i> - Compulsory Military Service
              </h3>
              <p className="mb-3 font-bold text-white text-sm md:text-md">
                NRDC-T Istanbul
              </p>
              <p className="text-xs font-medium leading-snug tracking-wide text-gray-600 text-opacity-100"></p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline flex-row-reverse md:flex-row">
            <div className="order-1 w-2/12 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-10 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-sm md:text-lg">
                2003-2007
              </h1>
            </div>
            <div className="order-1  rounded-lg shadow-xl w-10/12 md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-lg md:text-xl">
                Computer Engineering - BSc
              </h3>
              <p className="mb-3 font-bold text-white text-sm md:text-md">
                Mersin University
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
