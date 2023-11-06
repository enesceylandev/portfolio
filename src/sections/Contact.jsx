import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
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

  const translateX = scrollX - 12050;

  return (
    <div className="flex items-center relative h-screen mt-0 overflow-x-hidden z-10">
      <div className="text-[9rem] font-bold text-gray-200 absolute md:block hidden" style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.7s ease-out' }}>
        CONTACT
      </div>
      <div className='text-8xl font-light flex items-center justify-center w-full z-20'>
        <div className="flex justify-center space-x-20">
          <button className="mx-auto hover:scale-110 transition-all" onClick={() => window.open('https://github.com/MedusaCollins', '_blank')}><FontAwesomeIcon icon={faGithub} /></button>
          <button className="mx-auto hover:scale-110 transition-all" onClick={() => window.location.href = 'mailto:enesfurkanceylan@hotmail.com'}><FontAwesomeIcon icon={faEnvelope} /></button>
          <button className="mx-auto hover:scale-110 transition-all" onClick={() => window.open('https://www.linkedin.com/in/enes-ceylan-5b893a1a3/', '_blank')}><FontAwesomeIcon icon={faLinkedin} /></button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
