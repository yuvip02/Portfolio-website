import React from 'react'

import { render } from 'react-dom';
// import Typed from 'react-typed';
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Yours Truely",
        "Yuvaan Pradhan",
      ],
      startDelay: 300,
      typeSpeed: 30,
      backSpeed: 70,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div name="home" className='bg-gradient-to-b from-black to-gray-800 w-full h-[70vh] pt-32'>
        <div className='max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full'>  
          <p className='text-blue-200 text-2xl'>Welcome to my Portfolio Website</p>


          <h1>
      <span className='text-4xl sm:text-4xl font-bold text-blue-400' ref={el}></span>{" "}
    </h1>
          {/* <span className='text-4xl sm:text-4xl font-bold text-blue-400' ref={el} />  */}
                   {/* <Typed className='text-4xl sm:text-4xl font-bold text-blue-400'
            strings={["Yours Truly","Yuvaan Pradhan"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          /> */}

          <p className='py-3 max-w-[700px] text-gray-200'>
            I'm a Web Developer specializing in Front-end and also a UI/UX designer. I am a tech enthusiast and love designing and developing websites. 
          </p>




        </div>
    </div>
  )
}

export default Home