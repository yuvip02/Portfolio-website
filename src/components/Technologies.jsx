import React from "react";

import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import CSS from "../assets/css.png";
import Rreact from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import NodeJS from "../assets/node.png";
import express from "../assets/express.webp";
import next from "../assets/nextjs.png";
import mongo from "../assets/mongo.jpg";
import mongoose from "../assets/mongoose.png";
import sql from "../assets/mysql.jpg";
const Technologies = () => {
  return (
    <div name="tech" className="bg-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" border-b-4 inline border-sky-600 hover:border-sky-400 transition-all text-4xl font-bold text-gray-300 py-4">
            Technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-4  py-12">
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="Icon" />
            <p className="text-gray-300">HTML</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="Icon" />
            <p className="text-gray-300">CSS</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Icon" />
            <p className="text-gray-300">JavaScript</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NodeJS} alt="Icon" />
            <p className="text-gray-300">NodeJS</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={express} alt="Icon" />
            <p className="text-gray-300">Express</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Rreact} alt="Icon" />
            <p className="text-gray-300">React</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={next} alt="Icon" />
            <p className="text-gray-300">NextJS</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Icon" />
            <p className="text-gray-300">Tailwind</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongo} alt="Icon" />
            <p className="text-gray-300">MongoDB</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongoose} alt="Icon" />
            <p className="text-gray-300">Mongoose</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sql} alt="Icon" />
            <p className="text-gray-300">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
