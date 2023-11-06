import React, { useEffect, useState, useCallback } from 'react';

const Skills = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollX(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const translateX = -scrollX + 11100;
  return (
    <div className="flex items-center relative h-screen mt-0 overflow-x-hidden">
      <div className="text-[9rem] right-0 font-bold text-gray-200 absolute md:block hidden" style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.7s ease-out' }}>
        SKILLS
      </div>
      <div className='grid md:grid-cols-5 md:space-y-0 space-y-12 lg:mx-12 md:mx-5 mx-12 w-full text-left top-0 text-3xl z-10 align-top items-start'>
        <div className='md:col-start-1 md:col-span-2 col-span-5'>
          <p>HTML, CSS, JS</p> 
          <p>React</p>
          <p>Bootstrap</p>
          <p>Tailwind CSS</p>
        </div>
        <div className='md:col-start-5 lg:col-start-5 md:col-span-2 col-span-5'>
          <p>Mongo DB</p>
          <p>Express JS</p>
          <p>Node JS</p>
        </div>
        <div className='md:col-start-3 md:row-start-2 md:col-span-3 col-span-5'>
          <p>Product Design</p>
          <p>Design system</p>
          <p>Project Management</p>
          <p>Concept development</p>
        </div>
      </div>
    </div>
  );
};

export default Skills