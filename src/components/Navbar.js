import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {

  const [show,handleShow] = useState(false);

  function detectScroll(){
      if(window.scrollY>130)
      handleShow(true);
      else handleShow(false);
  }
  useEffect(()=>{
      window.addEventListener("scroll", detectScroll);

      return () =>{
          window.removeEventListener("scroll",detectScroll);
      };

  },[]);
  
  const [nav, setNav] = useState(false);
  
  const links = [
    {
        id:1,
        link: "home",
    },
    {
        id:2,
        link: "about",
    },
    {
        id:3,
        link: "portfolio",
    },
    {
        id:4,
        link: "experience",
    },
    {
        id:5,
        link: "contact",
    },
  ];

  return(
    <div className={`nav ${show && "nav_dark"}`}>
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Hari</h1>
        </div>
        {/* FOR NORMAL SCREENS */}
        <ul className="hidden md:flex">
            {links.map(({ id, link })=>(
                <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-green-300 hover:scale-105 duration-200">
                    <Link to={link} smooth duration={800}>{link}</Link>
                </li>
            ))}
            </ul>
            {/* FOR PHONE SCREEN */}
            <div
                /* setnav(!nav)== used for in phone 3 bars accessibility....if it is true !nav will set it to false and vice-versa */
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                    {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
            </div>
            {nav &&(
            <ul className='flex flex-col justify-center items-center absolute top-0
            left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({ id, link })=>(
                <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={800}>{link}</Link>

                </li>
            ))}
            </ul>
        )}
    </div>
    </div>
  )
}

export default Navbar