import React from 'react'
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const Links = [ 
    { id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>      
            ),
        href:'https://www.linkedin.com/in/ahmeddhahri100/',
        style:'rounded-tr-md',
    },
    { id:2,
        child:(
            <>
            GitHub <FaGithubAlt size={30}/>
            </>      
            ),
        href:'https://github.com/dhahri100',
        
    },
    { id:3,
        child:(
            <>
            Mail <HiOutlineMail size={30}/>
            </>      
            ),
        href:'mailto:foo@gmail.com',
        
    },
    { id:4,
        child:(
            <>
            Resume <BsFillPersonLinesFill size={30}/>
            </>      
            ),
        href:'DhahriAhmed.pdf',
        style:'rounded-br-md',
        download:true,
    }

]
    return (
    <div className='hidden lg:flex flex-col top-[31%] left-0 fixed '>
        <ul>
            {Links.map(({id,child,href,style,download}) => (
                <li key={id} className={`flex justify-between items-center hover:ml-[-10px] hover:rounded-md duration-300 w-40 h-14 px-4 bg-gray-400 ml-[-100px] ${''} ${style}` } >
                    <a href={href}
                    className='flex justify-between items-center w-full '
                    download={download}
                    target='_blank' //when open new tab
                    rel='noreferrer'
                    >
                
                        {child}
                    
                    </a>
            </li>
                ))}
        </ul>
    </div>
  )
}

export default SocialLinks;