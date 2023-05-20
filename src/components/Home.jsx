import React from 'react'
import ahmed from "../assets/ahmed.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name='home' 
    className='h-screen w-full bg-gradient-to-b from-blue-800 via-blue-800 '> {/*via is more degradation */}
       
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Front-End Developer 
                </h2>
                <p className='py-4 max-w-md'>
               
                        I am a front-end developer specialized in web design and development. 
                        I am proficient in React JS, NodeJS, JavaScript, and several other programming languages.
                        My expertise in front-end development allows me to design and develop modern, functional, and user-friendly user interfaces for websites.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                    bg-gradient-to-r from-purple-700 to-blue-600 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiOutlineArrowRight size={18}
                            className='ml-1'/>
                        </span>
                    </Link >
                </div>
            </div>
            <div>
                 <img src={ahmed} 
                 alt='my profile' 
                 className='rounded-2xl mx-auto w-2/3 md:w-80'/>
            </div>
        </div>
    </div>
  )
}

export default Home