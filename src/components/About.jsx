import React from "react";
import Me from '../assets/WhatsApp Image 2023-09-03 at 11.06.34.jpeg'
const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-pink text-gray-300 bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-sky-600 hover:border-sky-400 transition-all duration-15">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <p className="px-4 md:text-md">
                I am Yuvaan Pradhan, currently in my third year of pursuing a
                Computer Science and Engineering degree. I'm a passionate tech
                enthusiast, always eager to explore the latest advancements in
                the world of technology. My primary area of interest lies in web
                development, with a strong inclination towards front-end
                development and UI/UX design.
              </p>
            
          </div>
          <div className="flex justify-center items-center">
            <img className="rounded-full p-4 md:max-w-sm " src={Me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
