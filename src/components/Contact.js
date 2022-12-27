import React from 'react'
import Image from '../assets/img-2.png'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-50 bg-gradient-to-b from-black to-gray-800 p-4'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pt-30 pb-8'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-200 text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6 text-white'>Submit the form below to get in touch with me</p>
            </div>
            <div className='w-full flex items-center gap-40 align-middle justify-evenly'>
            <img className='h-96 w-96 flex flex-row mb-24' src={Image} alt="" />
                <form action="https://getform.io/f/d2350413-1b66-436b-92cd-9d37818dc211"
                      method='POST'
                      className='w-full'>
                    <input type="text"
                    name='name'
                    placeholder='Enter your name'
                    className='flex flex-col  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full'/>
                    
                    <input type="text"
                    name='email'
                    placeholder='Enter your email'
                    className='flex flex-col  my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full'/>
                    
                    <textarea name="message" rows="10"
                    placeholder='Enter your message'
                    className='flex flex-col p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full'>   
                    </textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300'> Let's talk! </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact