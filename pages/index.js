import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <div className="h-screen flex justify-center  bg-black text-green-700">
      <div className="max-w-screen-lg h-4/6 py-12 px-8  shadow-lg rounded-lg my-24 bg-neutral-900 drop-shadow-lg shadow-green-700">
        <div className="flex justify-center md:justify-end -mt-16 mr-16">
          <img
            className="w-24 h-24 object-cover rounded-full border-2 border-green-700 "
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div>
          <h2 className="text-gray-400 mx-4 md:mx-16 text-3xl font-semibold ">
            Web Developer
          </h2>
          <p className="mt-8 mx-4 md:ml-24 md:mr-24 flex text-xl" id="test">
            Hey I'm Mehmet Can, you can call me MJ
          </p>
          <p className="mt-4 mx-4 md:ml-24 md:mr-24 flex  text-xl">
            Web developer from Budapest/Hungary. I create custom websites to
            help busnesses do better online.
          </p>
        </div>
      </div>
    </div>
  );
}