import Head from "next/head";
import { useEffect, useState } from "react";
import { IconNextIcon } from "../components/Icons";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNpm,
} from "react-icons/io5";

import {
  FaUserFriends,
  FaTrophy,
  FaRegGrinBeam,
  FaBookOpen,
  FaPeopleCarry,
  FaSeedling,
} from "react-icons/fa";

export default function Home() {

  return (
    <>
      <Head>
        <title>MJ - Developer Life</title>
      </Head>
      <div className="h-screen flex justify-center  bg-black text-green-500">
        <div className="max-w-screen-lg h-6/6 md:h-4/6 py-12 px-8  shadow-lg rounded-lg my-24 bg-neutral-900 drop-shadow-lg shadow-green-700 relative">
          <div className="flex justify-center md:justify-end -mt-16 mr-16">
            <img
              className="w-24 h-24 object-cover rounded-full border-2 border-green-700 "
              src=""
            />
          </div>
          <div>
            <h2 className="text-gray-300 mx-4  md:mx-16 text-2xl md:text-3xl font-semibold ">
              Web Developer
            </h2>
            <div
              className="mt-8 mx-4 md:ml-24 md:mr-24 flex text-xl md:text-2xl"
              id="test"
            >
              Hey! It is Mehmet Can, you can call me &nbsp;<i>MJ</i>
            </div>
            <div className="mt-4 mx-4 md:ml-24 md:mr-24 flex text-xl md:text-2xl">
              I graduated from Computer Science at the University of Mersin at
              Turkey. Currently, I am worknig as a web developer to create
              front-end applications. Aside from work,I am a husband of my
              lovely wife, a sport adict and Galatasaray FK fan.
            </div>
            <div className="flex justify-center cursor-pointer ">
              <div className="py-4 mx-4 md:py-12 md:px-12 grid grid-cols-4 md:grid-cols-7 gap-4 justify-center">
                <div className="flex justify-center">
                  <IoLogoJavascript id='JS' className="bg-transparent w-12 h-12 text-slate-400 hover:text-yellow-500"/>
                </div>
                <div className="flex justify-center">
                  <IoLogoReact className="bg-transparent w-12 h-12 text-slate-400 hover:text-cyan-500" />
                </div>
                <div className="flex justify-center bg-slate-400 hover:bg-slate-200">
                  <IconNextIcon className="w-12 h-12 " />
                </div>
                <div className="flex justify-center">
                  <IoLogoCss3 className="bg-transparent w-12 h-12  text-slate-400 hover:text-cyan-700" />
                </div>
                <div className="flex justify-center">
                  <IoLogoHtml5 className="bg-transparent w-12 h-12  text-slate-400 hover:text-orange-600" />
                </div>
                <div className="flex justify-center">
                  <IoLogoGithub className="bg-transparent w-12 h-12  text-slate-400 hover:text-gray-500" />
                </div>
                <div className="flex justify-center">
                  <IoLogoNpm className="bg-transparent w-12 h-12  text-slate-400 hover:text-red-700" />
                </div>
              </div>
            </div>
            <div className="flex justify-center cursor-pointer pb-4">
              <div className="py-2 mx-4 md:py-6 md:px-12 grid grid-cols-3 md:grid-cols-5 gap-4 justify-center">
                <div className="flex justify-center">
                  <FaUserFriends className="bg-transparent w-12 h-12 text-gray-500 hover:text-slate-200"/>
                </div>
                <div className="flex justify-center">
                  <FaTrophy className="bg-transparent w-12 h-12 text-gray-500 hover:text-slate-200"/>
                </div>

                <div className="flex justify-center">
                  <FaRegGrinBeam className="bg-transparent w-12 h-12 text-gray-500 hover:text-slate-200"/>
                </div>
                <div className="flex justify-center">
                  <FaBookOpen className="bg-transparent w-12 h-12 text-gray-500 hover:text-slate-200"/>
                </div>
                <div className="flex justify-center">
                  <FaPeopleCarry className="bg-transparent w-12 h-12 text-gray-500 hover:text-slate-200"/>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}