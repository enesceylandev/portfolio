import React, {useState, useEffect} from 'react';
import { profilePic } from '../import.js';

import { motion, useViewportScroll, useTransform } from 'framer-motion';


const Projects = () => {
    const [yazi] = React.useState([
        {
        project: {
            name: 'FR Design system',
            description: "Multi brand e-commerce design system for websites and native mobile applications.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: [profilePic, profilePic, profilePic, profilePic],
            links: {github: 'www.github.com/medusacollins/frdesginsystem', live:'test'}
        }},
        {
        project: {
            name: 'LASHIC',
            description: "Mobile app and websites for senior citizen facility's caregivers, service managers and admins.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: [profilePic, profilePic, profilePic, profilePic],
            links: {github: 'www.github.com/medusacollins/lashic', live:'test'}
            
        }},
        {
        project: {
            name: 'Eyep',
            description: "Single purpose website to show your IP address and location.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: [profilePic, profilePic, profilePic, profilePic],
            links: {github: 'www.github.com/medusacollins/frdesginsystem', live:'test'}
        }},
        {
        project: {
            name: 'sağdaki yazı 4',
            description: "",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: [profilePic, profilePic, profilePic, profilePic],
            links: {github: 'www.github.com/medusacollins/frdesginsystem', live:'test'}
        }},
        {
        project: {
            name: 'sağdaki yazı 5',
            description: "",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: [profilePic, profilePic, profilePic, profilePic],
            links: {github: 'www.github.com/medusacollins/frdesginsystem', live:'test'}
        }}
    ]);
    const [activeIndex, setActiveIndex] = useState(0);
 
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const yaziHeight = 2400;
        let newActiveIndex = Math.floor(scrollPosition / yaziHeight);
        if (newActiveIndex >= yazi.length) {
          newActiveIndex = yazi.length - 1;
        }
        if (newActiveIndex <= 5){
          setActiveIndex(newActiveIndex);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [yazi]);
    



    const speeds = [-50, -100, -60, -75];

    useEffect(() => {
      // Burada activeIndex değerini izleyerek parallax efekti başlatın
      if (activeIndex === 0) {
        startParallaxEffect(0.14);
      } else if (activeIndex === 1) {
        startParallaxEffect(0.22);
      } else if (activeIndex === 2) {
        startParallaxEffect(0.36);
      } else if (activeIndex === 3) {
        startParallaxEffect(0.60);
      }
    }, [activeIndex]);
  
    const startParallaxEffect = (start) => {
      // Parallax efektini başlatmak için gerekli kod
      // Örnek olarak generateImages'ı burada çağırabilirsiniz
    };
  
    function ParallaxImage({ src, index, speed, isActive }) {
      const { scrollYProgress } = useViewportScroll();
      const start = isActive ? 0.14 : 0; // isActive'e göre başlangıç değerini ayarla
      const transform = useTransform(scrollYProgress, [start, 1], [0, speed], "easeInOut");
  
      return (
        <motion.img key={index} src={src} alt="" className='w-32 h-32' style={{ y: transform }} />
      );
    }
  
    function generateImages(images, speeds, activeIndex) {
      return images.map((img, index) => (
        <ParallaxImage key={index} src={img} index={index} speed={speeds[index % speeds.length]} isActive={activeIndex === index} />
      ));
    }
  
    return (
      <div style={{ height: 10000 }}>
        <div className='grid grid-cols-2 text-[#303030] sticky top-0'>
          <div className='sticky top-0 h-screen p-11'>
            <div className='flex flex-col justify-between h-full  font-semibold tracking-wide'>
              <div className='text-3xl'>0{activeIndex+1}</div>
              <div className='space-y-8'>
                <p className='text-7xl font-bold'>{yazi[activeIndex].project.name}</p>
                <div className='flex'>
                  {yazi[activeIndex].project.stack.map((item, index) => (
                    <span key={index} className='mx-1 flex flex-col bg-[#16E0BD] text-[#16312d] p-2 rounded-full'>
                      {item}
                    </span>
                  ))}
                </div>
                <p>{yazi[activeIndex].project.description}</p>
              </div>
              <div>
                <p>Github: {yazi[activeIndex].project.links.github}</p>
                <p>Live: {yazi[activeIndex].project.links.live}</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-200 p-12 space-y-36">
            {generateImages(yazi[activeIndex].project.image, speeds, activeIndex)}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;