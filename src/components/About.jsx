import React from 'react'

const About = () => {
  return (
    <div name='about' 
    className='w-full h-screen bg-gradient-to-b from-white to-blue-800'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> {/*this div for position about*/} 
            <div className='pb-8'>
                <p className='text-5xl text-blue-800 capitalize font-bold inline border-b-4 border-blue-800'>
                    about
                </p>
            </div>
            <p className='text-xl mt-[6%]'>
            Hi there! I'm Jane, a creative web designer with 5 years of experience in the industry. 
            I'm passionate about creating beautiful, functional websites that help businesses succeed online.

            My skills include front-end development, responsive design, and user experience (UX) design.
            I have experience working with a variety of clients across different industries, from small startups to large corporations.

            What sets me apart from other web designers is my attention to detail and my ability to collaborate effectively with clients and other team members.
            I believe that great design starts with listening to my clients' 
            needs and goals, and working closely with them throughout the design process to create a website that truly reflects their brand and vision.

            In my free time, I enjoy experimenting with new design tools and techniques, and staying up-to-date on the latest web design trends.

            If you're interested in learning more about my work or discussing a potential project, please don't hesitate to get in touch
            </p>
        </div>
    </div>
  )
}

export default About