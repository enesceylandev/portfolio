import React, {useState, useEffect} from 'react';

const Projects = () => {
    const [yazi] = React.useState([
        {
        project: {
            name: 'FR Design system',
            description: "Multi brand e-commerce design system for websites and native mobile applications.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg'],
            links: {github: 'www.github.com/medusacollins/frdesginsystem', live:'test'}
        }},
        {
        project: {
            name: 'LASHIC',
            description: "Mobile app and websites for senior citizen facility's caregivers, service managers and admins.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg'],
            links: {github: 'www.github.com/medusacollins/lashic', live:'test'}
            
        }},
        {
        project: {
            name: 'Eyep',
            description: "Single purpose website to show your IP address and location.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg'],
            links: {github: 'www.github.com/medusacollins/frdesginsystem', live:'test'}
        }},
        {
        project: {
            name: 'sağdaki yazı 4',
            description: "",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg'],
            links: {github: 'www.github.com/medusacollins/frdesginsystem', live:'test'}
        }},
        {
        project: {
            name: 'sağdaki yazı 5',
            description: "",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg'],
            links: {github: 'www.github.com/medusacollins/frdesginsystem', live:'test'}
        }}
    ]);
    const scrollable= useState(yazi.length*1500)
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          const yaziHeight = 2400; // Her bir 'yazi' öğesinin yüksekliği
          const activeIndex = Math.floor(scrollPosition / yaziHeight);
          setActiveIndex(activeIndex);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className='grid grid-cols-2 text-[#303030]'>
          <div className='sticky top-0 h-screen p-11'>
            <div className='flex flex-col justify-between h-full  font-semibold tracking-wide'>
                <div className='text-3xl'>0{activeIndex+1}</div>
                <div className='space-y-8'>
                    <p className='text-7xl font-bold'>{yazi[activeIndex].project.name}</p>
                    <div className='flex'>
                    {yazi[activeIndex].project.stack.map((item, index) => (
                        <span key={index} className='mx-1 flex flex-col bg-[#16E0BD] text-[#16312d] p-2 rounded-full hover:cursor-pointer'>
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
          <div className="bg-blue-200" style={{height: 10000}}>test</div>
        </div>
    );
  };

export default Projects;
