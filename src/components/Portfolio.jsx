import React from 'react'
import  arrayDestruct  from "../assets/portfolio/arrayDestruct.jpg";
import  installNode  from "../assets/portfolio/installNode.jpg";
import  navbar from "../assets/portfolio/navbar.jpg";
import  reactSmooth  from "../assets/portfolio/reactSmooth.jpg";
import  reactParallax  from "../assets/portfolio/reactParallax.jpg";
import  reactWeather  from "../assets/portfolio/reactWeather.jpg";
const Portfolio = () => {

    const Portfolios = [
     {
        id:1,
        src:arrayDestruct
    },
    {
        id:2,
        src:installNode
    },
    {
        id:3,
        src:navbar
    },
    {
        id:4,
        src:reactSmooth
    },
    {
        id:5,
        src:reactParallax
    },
    {
        id:5,
        src:reactWeather
    },
]
        
  return (
    <div name ='portfolio'
    className='bg-gradient-to-b from-blue-800 to-blue-300 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-8'>
                    <p className='text-5xl font-bold inline border-b-4 border-white capitalize '>portfolio</p>
                    <p className='py-6 text-3xl '>check out some of my work right here</p>
            </div>  
            
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {Portfolios.map(({id,src})=> (

                 <div  key={id} className='shadow-md shadow-blue-800 rounded-lg'>
                     <img src={src} 
                     alt=''
                     className='rounded-md duration-200 hover:scale-105'
                     />
                 <div className='flex items-center justify-center'>
                     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                 </div>
             </div>
                ))}
                
            </div>
                   
        </div>
    </div>
  )
}

export default Portfolio