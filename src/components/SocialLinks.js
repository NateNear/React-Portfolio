/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    
    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/a-harindra-reddy-35349920a/.com',
            style: 'rounded-tr-md border-t-4 border-green-500 border-r-4 '
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/NateNear',
            style: 'border-green-500 border-r-4'
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:askmeanythinghari@gmail.com',
            style: 'border-green-500 border-r-4'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.pdf',
            download: true,
            style: 'rounded-br-md border-r-4 border-green-500 border-b-4'
        }
    ]

  return (

    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download}) =>(
            <li key={id}   className={
                "bg-black backdrop-filter backdrop-blur-lg bg-opacity-10 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " +
                style
              }>
                
                <a href={href}
                className='flex justify-between items-center w-full text-white'
                download={download}
                target='_blank'
                rel='noreferrer'>
                 {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks