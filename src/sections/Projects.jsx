import React, {useState, useEffect} from 'react';

const Projects = () => {
    const [yazi] = React.useState([
        {
        project: {
            name: 'FR Design system',
            description: "Multi brand e-commerce design system for websites and native mobile applications.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg']
        }},
        {
        project: {
            name: 'LASHIC',
            description: "Mobile app and websites for senior citizen facility's caregivers, service managers and admins.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg']
        }},
        {
        project: {
            name: 'Eyep',
            description: "Single purpose website to show your IP address and location.",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg']
        }},
        {
        project: {
            name: 'sağdaki yazı 4',
            description: "",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg']
        }},
        {
        project: {
            name: 'sağdaki yazı 5',
            description: "",
            stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
            image: ['../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg', '../image/ProfilePic.jpg']
        }}
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          const yaziHeight = 2000; // Her bir 'yazi' öğesinin yüksekliği
          const activeIndex = Math.floor(scrollPosition / yaziHeight);
          setActiveIndex(activeIndex);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
      <div className='space-y-40'>
        <div className='grid grid-cols-2'>
          <div className='sticky top-0 h-screen p-11'>
            <div className='flex flex-col justify-between h-full text-xl font-semibold tracking-wide'>
                <div>0{activeIndex+1}</div>
                <div className='space-y-5'>
                    <p>{yazi[activeIndex].project.name}</p>
                    <div className='flex'>
                    {yazi[activeIndex].project.stack.map((item, index) => (
                        <span key={index} className='mx-1 flex flex-col bg-[#0077b6] hover:bg-[#00b4d8] text-[#16312d] p-2 rounded-full hover:cursor-pointer'>
                        {item}
                        </span>
                    ))}
                    </div>
                    <p>{yazi[activeIndex].project.description}</p>
                </div>
                <div>test</div>
            </div>
          </div>
          <div className={`bg-blue-200 h-[${yazi.length*1500 + "px"}]`}>test</div>
        </div>
      </div>
    );
  };

export default Projects;
