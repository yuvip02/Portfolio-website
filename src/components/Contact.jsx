import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-6'>
        <form method='POST' action="https://getform.io/f/8600d5a4-553c-4e10-b1d4-b141369b74f7" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-600 hover:border-sky-400 transition-all duration-15 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>My email- yuvi.pradhan2002@gmail.com</p>
            </div>
                <input type="text" className=' bg-white place p-2' placeholder='Name' name='name' />
                
                <input type="email" className='my-4 p-2 bg-white' placeholder='Email' name='email' />
                <textarea name="message" id="" cols="30" rows="10" className='h-[150px] rounded-md' placeholder='Message'></textarea>
                <button className='bg-sky-600 w-[20%] mt-2 rounded-lg p-2 text-gray-300 hover:bg-sky-400 transition-all duration-500'>Submit</button>
        </form>
    </div>
  )
}

export default Contact