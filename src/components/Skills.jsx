import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
const Skills = () => {
    const Skill =[
    { id:1,
      src: html ,
      title:'HTML',
      style:'shadow-orange-700'
    },
    { id:2,
        src: css,
        title:'CSS',
        style:'shadow-blue-900'
      },
      { id:3,
        src:  javascript,
        title:'Javascript',
        style:'shadow-yellow-900'
      },
      { id:4,
        src: nextjs ,
        title:'Nextjs',
        style:'shadow-white'
      },
      { id:5,
        src: node ,
        title:'Node',
        style:'shadow-green-900'
      },
      { id:6,
        src: tailwind ,
        title:'Tailwind',
        style:'shadow-green-500'
      },
      { id:7 ,
        src: github ,
        title:'Github',
        style:'shadow-black'
      },
      { id:8 ,
        src: react ,
        title:'Reactjs',
        style:'shadow-blue-500'
      },
    ]
  return (
    <div name ='skill'
    className='bg-gradient-to-b from-blue-300 to-blue-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div>
                <p className='text-5xl text-blue-800 font-bold inline border-b-4 border-blue-800 capitalize '>Skills</p>
                <p className='py-6 text-3xl text-blue-800'>there are the technologies i've worked with</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {Skill.map(({id,src,title,style})=>(
                    
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                  
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Skills