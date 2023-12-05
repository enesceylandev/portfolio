import { meduware1, meduware2, meduware3, meduware4, secondchanges1,secondchanges2,secondchanges3,secondchanges4 } from '../import.js';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  const [info] = React.useState([
    {
      project: {
        name: 'secondChanges',
        description: "E-commerce platform that facilitates easy buying and selling of used products by connecting buyers and sellers.",
        stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
        image: [secondchanges1, secondchanges2, secondchanges3, secondchanges4],
        links: { github: 'https://github.com/MedusaCollins/secondChanges' }
      }
    },
    {
      project: {
        name: 'Meduware',
        description: "A website created to enhance the visibility and boost sales of the Turkish CS:GO community server within the community.",
        stack: ['html', 'css', 'javascript'],
        image: [meduware1, meduware2, meduware3, meduware4],
        links: { github: 'https://github.com/MedusaCollins/meduware', live: 'https://medusacollins.github.io/meduware/' }

      }
    }
  ]);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  useState(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {info.map((project, index) => (
        <div key={index} className='flex flex-col mb-12'>
          <Item project={project.project} index={index} scrollPosition={-scrollPosition / 10} />
        </div>
      ))}
    </div>
  );
}




const Item = (props) => {
  function translateY(index,type) {
    switch (index) {
      case 0:
        switch(type){
          case "position":
            return 100
          case "speed":
            return 2
          case "gap":
            return 0
          default:
            break;
        }
        break;
      case 1:
        switch(type){
          case "position":
            return 270
          case "speed":
            return 2
          case "gap":
            return -300
          default:
            break;
        }
        break;
      case 2:
        switch(type){
          case "position":
            return 420
          case "speed":
            return 2
          case "gap":
            return -100
          default:
            break;
        }
        break;
      case 3:
        switch(type){
          case "position":
            return 550
          case "speed":
            return 2
          case "gap":
            return -10
          default:
            break;
        }
        break;
      case 4:
        switch(type){
          case "position":
            return 650
          case "speed":
            return 2
          case "gap":
            return -15
          default:
            break;
        }
        break;
      default:
        return 0
    }
  }
  return (
    <section className='flex'>
      <div className='sticky top-0 w-1/2 h-[70vh] p-11'>
        <div className='flex flex-col justify-between h-full font-semibold tracking-wide'>
          <div className='text-3xl'>0{props.index + 1}</div>
          <div className='space-y-8'>
            <p className='text-7xl font-bold'>{props.project.name}</p>
            <div className='flex'>
              {props.project.stack.map((item, index) => (
                <span key={index} className='mx-1 flex flex-col bg-[#16E0BD] text-[#16312d] p-2 rounded-full'>
                  {item}
                </span>
              ))}
            </div>
            <p>{props.project.description}</p>
          </div>
          <div className='flex flex-col gap-2'>
            {props.project.links.github && 
            <a href={props.project.links.github} target='_blank' rel="noreferrer" className='hover:text-[#16E0BD] transition-all w-fit'>Github 
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>}

            {props.project.links.live && 
            <a href={props.project.links.live} target='_blank' rel="noreferrer" className='hover:text-[#16E0BD] transition-all w-fit'>Live 
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>}
          </div>
        </div>
      </div>
      <div className='h-[1000px] w-1/2 grid grid-cols-2 items-center place-items-center '>
        {props.project.image.map((item, index) => {
          return(
            

            <div key={index} style={{zIndex: props.project.image.length - index}}>
              <motion.div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"
                              style={{
                                translateY: 
                                (props.scrollPosition + translateY(props.index,"position")) *
                                ((props.project.image.length - index)*translateY(props.index,"speed")) -
                                (props.index * translateY(props.index,"gap")),
                                scale: 1 + ((props.project.image.length - index)/20),
                              }}
                            >
                  <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                      <img src={item} class="block" alt="img" style={{ transform: 'translateY(-50px)' }}/>
                  </div>
              </motion.div>
              {/* <motion.img
                src={item}
                alt={index}
                className={'w-full'}
                style={{
                  translateY: 
                  (props.scrollPosition + translateY(props.index,"position")) *
                  ((props.project.image.length - index)*translateY(props.index,"speed")) -
                  (props.index * translateY(props.index,"gap")),
                  scale: 1 + ((props.project.image.length - index)/2),
                }}
              /> */}
            </div>
          )})}
      </div>
      
    </section>
  );
};