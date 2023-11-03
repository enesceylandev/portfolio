import React from 'react'
import myPic from '../image/ProfilePic.jpg'

const Hero = () => {
  return (
    <div className='relative sm:w-[450px] w-[250px] md:w-[550px] lg:w-[650px] flex flex-col h-40 md:h-48 lg:h-56 text-[#303030]'>
      <div className='sm:relative left-0'>
      <img src={myPic} alt="" className='sm:w-40 w-32 md:w-48 lg:w-56 sm:absolute mx-auto left-0 right-0 sm:mx-0 sm:left-7 sm:right-0 z-20'/>
      </div>
      <div className='right-0 sm:absolute '>
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-center sm:text-left font-medium tracking-widest mt-2 mr-1'>Merhaba! ben <br/><b className='text-4xl md:text-5xl lg:text-6xl font-bold'>Enes Ceylan</b></h1>
      </div>
      <div className=' bg-[#16E0BD] sm:absolute bottom-5 w-full sm:text-right text-center p-2 z-10 text-lg md:text-xl lg:text-2xl'>Full Stack Web Developer</div>
    </div>
  )
}

export default Hero