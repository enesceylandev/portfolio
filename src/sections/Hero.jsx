import React from 'react'
import myPic from '../image/ProfilePic.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative overflow-hidden flex flex-col sm:w-[450px] md:w-[550px] lg:w-[650px] sm:h-40 md:h-48 lg:h-56 text-[#303030]'>
      <motion.div 
        className='sm:relative left-0'
        initial={{ opacity: 0, y: -300, zIndex:20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
      <img src={myPic} alt="" className='sm:w-40 w-32 md:w-48 lg:w-56 sm:absolute mx-auto left-0 right-0 sm:mx-0 sm:left-7 sm:right-0 z-20'/>
      </motion.div>
      <motion.div 
        className='right-0 sm:absolute'
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-center sm:text-left font-medium tracking-widest mt-2 mr-1'>
        Merhaba! ben <br/><b className='text-4xl md:text-5xl lg:text-6xl font-bold'>Enes Ceylan</b></h1>
      </motion.div>
      <motion.div 
        className=' bg-[#16E0BD] sm:absolute bottom-5 w-full sm:text-right text-center p-2 z-10 text-lg md:text-xl lg:text-2xl'
        initial={{ y: 150, zIndex: 10}}
        animate={{ y: 0, zIndex: 10}}
        transition={{ duration: 0.5 }}>
          Full Stack Web Developer</motion.div>
    </div>
  )
}

export default Hero