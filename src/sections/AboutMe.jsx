import React, { useEffect, useState, useCallback } from 'react';

const AboutMe = () => {
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

  const translateX = scrollX - 200;

  return (
    <div className="flex items-center relative h-[400px] mb-[200px] mt-0 overflow-x-hidden">
      <div className="text-[9rem] font-bold text-gray-200 absolute md:block hidden" style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.7s ease-out' }}>
        ABOUT ME
      </div>
      <div className='md:text-4xl text-xl font-light md:right-5 text-center mx-5 lg:text-left absolute'>
      Crafting user friendly and aesthetic UI designs is not just my <br className='hidden lg:block'/> profession, it's my passion.
      </div>
    </div>
  );
};
export default AboutMe;
