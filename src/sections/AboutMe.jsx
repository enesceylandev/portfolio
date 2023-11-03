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
    <div className="flex items-center relative h-40 mt-0">
      <div className="text-[9rem] font-bold text-gray-200 absolute md:block hidden overflow-x-hidden" style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.7s ease-out' }}>
        ABOUT ME
      </div>
      <div className='text-2xl md:right-20 text-center mx-5 md:text-left absolute'>
      Crafting user friendly and aesthetic UI designs is not just my <br className='hidden md:block'/> profession, it's my passion.
      </div>
    </div>
  );
};
export default AboutMe;
