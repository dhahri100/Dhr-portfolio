import React from 'react'

const Contact = () => {
  return (
    <div name='contact'  className='w-full h-screen bg-gradient-to-b from-blue-800 to-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center h-full'>
            <div className='pb-8'>
                <p className='text-5xl text-white font-bold inline border-b-4 border-white capitalize '>Contact</p>
                <p className='py-6 text-3xl text-white'>Submit the from the below to get in touch with me </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/78774b13-edbe-4bea-98e6-e7028b14e94f"
                method='POST'
                className='flex flex-col w-full md:w-1/2 '>
                    <input type="text" name='name' placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md placeholder-blue-900 text-white focus:outline-none' />
                    <input type="text" name='email' placeholder='Enter your email'
                    className='my-4 p-2 bg-transparent border-2 rounded-md placeholder-blue-900 text-white focus:outline-none' />
                    <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md placeholder-blue-900 text-white focus:outline-none'>
                        </textarea>
                    <button className='text-white bg-gradient-to-b from-purple-700 to-blue-600 px-6 py-3 my-8 
                    mx-auto flex items-center rounded-md hover:scale-150 duration-300 '>Let's talk</button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Contact