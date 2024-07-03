import React, { useCallback, useEffect, useState } from 'react';

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

  const translateX = -scrollX + 5000;
  return (
    <div className="flex items-center relative h-screen mt-0 overflow-x-hidden">
      <div className="text-[9rem] right-0 font-bold text-gray-200 absolute md:block hidden -z-10" style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.7s ease-out' }}>
        SKILLS
      </div>
      <div className='grid md:grid-cols-5 md:space-y-0 space-y-12 lg:mx-12 md:mx-5 mx-12 w-full text-3xl z-10 '>
        <div className='md:col-start-1 md:col-span-2 col-span-5 w-fit'>
          <p>HTML, CSS, JS, TS</p>
          <p>React, Next.js</p>
          <p>Tailwind CSS, Bootstrap</p>
          <p>shadcn/ui, Material UI</p>
        </div>
        <div className='md:col-start-6 lg:col-start-6 md:col-span-2 col-span-5 w-fit'>
          <p>Mongo DB</p>
          <p>Express JS</p>
          <p>Node JS</p>
          <p>Python</p>
        </div>
        <div className='md:col-start-3 md:row-start-2 md:col-span-3 col-span-5 w-fit'>
          <p>Product Design</p>
          <p>Project Management</p>
          <p>Technical Expertise</p>
          <p>Client-Centric Approach</p>
        </div>
      </div>
    </div >
  );
};

export default Skills
