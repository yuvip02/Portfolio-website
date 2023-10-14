import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaLinkedin
} from "react-icons/fa";
import { HiOutLineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handleClick = () => setnav(!nav);

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white items-center justify-between fixed w-full flex h-[12vh]">
      <h1 className="px-2">Yuvaan</h1>

      <div className="hidden md:flex space-x-3 px-3">
        <ul className="flex space-x-2">
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300">
 
            <Link
              
              to="home"

              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300">    
             <Link to="skills" smooth={true} offset={50} duration={500}>
          Skills
        </Link></li>
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300"><Link to="contact" smooth={true} offset={50} duration={500}>
          Contacts
        </Link></li>
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300"><Link to="tech" smooth={true} offset={50} duration={500}>
          Technologies
        </Link></li>
        </ul>
      </div>

      {/* Mobile View */}
      <div onClick={handleClick} className=" px-2 z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile view */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute left-0 top-0 w-full space-x-2 h-[100vh] bg-black flex flex-col justify-center items-center"
        }
      >
        <ul className="py-6 text-4xl">Home</ul>
        <ul className="py-6 text-4xl">Contacts</ul>
        <ul className="py-6 text-4xl">Projects</ul>
        <ul className="py-6 text-4xl">Experience</ul>
      </div>

      {/* Side Links */}
      <div className=" hidden lg:flex fixed top-[35%] left-0 ">
        <ul className="space-y-2">
          <li className="w-[160px] flex justify-between items-center ml-[-50%] hover:ml-[8%] duration-200 bg-[#C13584] " >
            <a
              href="/"
              className=" flex justify-between items-center space-x-3 text-gray-300"
            >
              <a href="https://www.instagram.com/yyyyyuvi/?igshid=NGVhN2U2NjQ0Yg%3D%3D" className="px-2">Instagram</a>
              <FaInstagram size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] flex justify-between items-center ml-[-50%] hover:ml-[8%] duration-200 bg-[#c47544]">
            <a
              href="/"
              className=" flex justify-between items-center text-gray-300"
            >
              <a href="/yuvi.pradhan2002@gmail.com" className="px-7">Gmail</a>
              <FaMailBulk size={30} />
            </a>
          </li> */}
          <li className="w-[160px] flex justify-between items-center ml-[-50%] hover:ml-[8%] duration-200 bg-[#342e9e]">
            <a
              href="/"
              className=" flex justify-between items-center text-gray-300"
            >
              <a href="https://www.linkedin.com/in/yuvaan-pradhan-70554823a" className="px-7">Linkdin</a>
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
