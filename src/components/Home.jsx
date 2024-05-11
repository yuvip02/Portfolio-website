import React from 'react'
import Me from '../assets/WhatsApp Image 2023-09-03 at 11.06.34.jpeg'

import { render } from 'react-dom';
// import Typed from 'react-typed';
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Yours Truly",
        "Yuvaan Pradhan",
      ],
      startDelay: 300,
      typeSpeed: 30,
      backSpeed: 70,
      backDelay: 100,
      loop: false,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div name="home" className='bg-gradient-to-b from-black to-gray-800 w-full h-[50vh] pt-32'>
        <div className='max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full'>  
          <p className='text-blue-200 text-2xl'>Welcome to my Portfolio Website</p>


          <h1>
      <span className='text-4xl sm:text-4xl font-bold text-blue-400' ref={el}></span>{" "}
    </h1>
        </div>
        <div>
        {/* <img className="rounded-full p-4 md:max-w-sm " src={Me} alt="" /> */}
        </div>
    </div>
  )
}

export default Home