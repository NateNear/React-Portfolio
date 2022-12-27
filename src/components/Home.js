import React from 'react'
import HeroImage from '../assets/heroImage1.png'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div 
        name='home' 
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl  sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-200'>
                  I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Donec ut purus dui. Fusce sit amet ligula euismod magna mattis varius. 
                   Integer interdum lacus enim, non posuere nunc mollis quis. Nulla venenatis tempor lectus, 
                   vitae vulputate nunc malesuada non. Aenean vulputate odio quis ipsum mollis, sed iaculis augue molestie.
                </p> 
                   <div>
                    <Link to='portfolio'
                    smooth duration={800}
                     className='group text-white w-fit px-6 py-3 my-2 flex items-center
                     rounded-md bg-gradient-to-r from-cyan-500 to-green-400 cursor-pointer'>
                       
                       Portfolio
                    
                    <span className='group-hover:rotate-90 duration-300'>
                        <FiArrowRight size={20} className='ml-1'/>
                    </span>
                    </Link>
                   </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile"
                className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home