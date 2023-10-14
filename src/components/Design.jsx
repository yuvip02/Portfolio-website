import React from 'react'
import figma2 from '../assets/figma2.jpg'
const Design = () => {
  return (
    <div name="skills" className='bg-black'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className=' border-b-4 inline border-sky-600 hover:border-sky-400 transition-all duration-15 text-4xl font-bold text-gray-300 py-4'>Design Tools UI/UX</p>   
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-4  py-12'>
                
            <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-auto h-25 mx-auto' src={figma2} alt="Icon" />
                    <p className='text-gray-300'>Figma</p>
                </div>
            </div>
    </div>
</div>
  )
}

export default Design