import React from 'react'
import HTML from '../assets/html.png'
import C from '../assets/C.webp'
import Cpp from '../assets/C++.png'
import Python from '../assets/Python.jpg'
import Java from '../assets/Java.jpg'
const Skills = () => {
  return (
    <div name="skills" className='bg-black'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className=' border-b-4 inline border-sky-600 hover:border-sky-400 transition-all duration-15 text-4xl font-bold text-gray-300 py-4'>My Skills</p>   
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-4  py-12'>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt="Icon" />
                    <p className='text-gray-300'>C</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Cpp} alt="Icon" />
                    <p className='text-gray-300'>C++</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="Icon" />
                    <p className='text-gray-300'>Java</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Icon" />
                    <p className='text-gray-300'>Python</p>
                </div>

            </div>
    </div>
</div>
  )
}

export default Skills