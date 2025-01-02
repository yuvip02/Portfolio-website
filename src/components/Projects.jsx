import React from "react";
import work from "../assets/ksu_bg.png";
import exp from "../assets/Expense_Tracker.png";
import yc from "../assets/youcare.png";
import fig_store from "../assets/figma store.png";
import todo from "../assets/Todo.png";
const Projects = () => {
  return (
    <div
      name="project"
      className=" md:h-screen text-gray-300 bg-gradient-to-b from-black to-gray-800 w-full"
    >
      <div className="max-w-screen-lg p-3 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-600 hover:border-sky-400 transition-all duration-150   ">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-800 rounded-lg h-[40vh]">
            <img
              src={yc}
              alt=""
              className="rounded-md duration-200 hover:scale-110"
            />
            <div className="flex items-center text:sm font-medium justify-center">
              <p className=" px-3 py-1 m-2 duration-200">
                <a href="https://health-clinic-frontend.netlify.app">
                  YouCare. A full stack Health Clinic management system
                </a>
              </p>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg h-[40vh]">
            <img
              src={work}
              alt=""
              className="rounded-md duration-200 hover:scale-110"
            />
            <div className="flex items-center text:sm font-medium justify-center">
              <p className=" px-3 py-1 m-2 duration-200">
                <a href="https://ksuprod.vercel.app/">
                  Immense Contribution in the development of Kanchendzonga State
                  University website using Front-End development skills.
                </a>
              </p>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg h-[40vh]">
            <img
              src={exp}
              alt=""
              className="rounded-md duration-200 hover:scale-110"
            />
            <div className="flex items-center text:sm font-medium justify-center">
              <p className=" px-3 py-1 m-2 duration-200">
                <a href="https://expense-tracker-mb17.vercel.app/">
                  An effiecient expense tracking website to keep you in check
                </a>
              </p>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg h-[40vh]">
            <img
              src={fig_store}
              alt=""
              className="rounded-md duration-200 hover:scale-110"
            />
            <div className="flex items-center text:sm font-medium justify-center">
              <p className=" px-3 py-1 m-2 duration-200">
                <a href="https://www.figma.com/design/YddtmDuShJXpPfLTF21zXh/Store?node-id=0-1&t=XQ0rBFtxSscfOlKV-1">
                  UI/UX design concept for an online store
                </a>
              </p>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg h-[40vh]">
            <img
              src={todo}
              alt=""
              className="rounded-md duration-200 hover:scale-110"
            />
            <div className="flex items-center text:sm font-medium justify-center">
              <p className=" px-3 py-1 m-2 duration-200">
                <a href="https://to-do-list-kappa-sandy.vercel.app/">
                  A simple yet effient To Do list website
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
