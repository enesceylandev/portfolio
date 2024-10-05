import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import * as images from '../import';

export default function Projects() {
  const [info] = React.useState([
    {
      project: {
        name: "AlgoRiddle",
        description:
          "AlgoRiddle is an open-source and user-friendly platform where users enhance their programming skills by solving algorithmic puzzles presented at various difficulty levels on a daily basis.",
        stack: ["React", "TypeScript", "TailwindCSS"],
        image: [images.algoriddle1, images.algoriddle2, images.algoriddle3, images.algoriddle4],
        links: {
          Github: "https://github.com/MedusaCollins/AlgoRiddle",
          Live: "https://algoriddle.enesceylan.dev",
        },
      },
    },
    {
      project: {
        name: "Discord Clone",
        description:
          "A Discord clone that allows users to chat with each other in real-time, login with google account, create and join servers, and send messages to each other.",
        stack: ["React", "Node", "Express", "MongoDB", "TailwindCSS"],
        image: [images.discord1, images.discord2, images.discord3, images.discord4],
        links: {
          Github: "https://github.com/MedusaCollins/discord-clone",
          "Video Presentation": "https://youtu.be/7Gal4R5hMjU"
        }
      },
    },
    {
      project: {
        name: "secondChanges",
        description:
          "E-commerce platform that facilitates easy buying and selling of used products by connecting buyers and sellers.",
        stack: ["React", "Node", "Express", "MongoDB", "TailwindCSS"],
        image: [images.secondchanges1, images.secondchanges2, images.secondchanges3, images.secondchanges4],
        links: {
          Github: "https://github.com/MedusaCollins/secondChanges",
          "Video Presentation": "https://www.youtube.com/watch?v=Bl0fNF5CrFM"
        },
      },
    },
    {
      project: {
        name: "Meduware",
        description:
          "A website created to enhance the visibility and boost sales of the Turkish CS:GO community server within the community.",
        stack: ["html", "css", "javascript"],
        image: [images.meduware1, images.meduware2, images.meduware3, images.meduware4],
        links: {
          Github: "https://github.com/MedusaCollins/meduware",
          Live: "https://medusacollins.github.io/meduware/",
        },
      },
    },
  ]);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  useState(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {info.map((project, index) => (
        <div key={index} className="flex flex-col mb-12">
          <Item
            project={project.project}
            index={index}
            scrollPosition={-scrollPosition / 10}
          />
        </div>
      ))}
    </div>
  );
}

const Item = (props) => {

  function translateY(index, type) {
    switch (index) {
      case 0:
        switch (type) {
          case "position":
            return 100;
          case "speed":
            return 2;
          case "gap":
            return 0;
          default:
            break;
        }
        break;
      case 1:
        switch (type) {
          case "position":
            return 200;
          case "speed":
            return 2;
          case "gap":
            return -300;
          default:
            break;
        }
        break;
      case 2:
        switch (type) {
          case "position":
            return 350;
          case "speed":
            return 2;
          case "gap":
            return -100;
          default:
            break;
        }
        break;
      case 3:
        switch (type) {
          case "position":
            return 450;
          case "speed":
            return 2;
          case "gap":
            return -10;
          default:
            break;
        }
        break;
      case 4:
        switch (type) {
          case "position":
            return 650;
          case "speed":
            return 2;
          case "gap":
            return -15;
          default:
            break;
        }
        break;
      default:
        return 0;
    }
  }
  return (
    <section className="flex">
      <div className="sticky top-0 md:w-1/2 w-full h-[70vh] md:p-11 p-3">
        <div className="flex flex-col justify-between h-full font-semibold tracking-wide">
          <div className="md:text-3xl text-xl">0{props.index + 1}</div>
          <div className="md:space-y-8 space-y-5">
            <p className="md:text-7xl text-4xl font-bold text-[#333333]">
              {props.project.name}
            </p>
            <div className="flex">
              {props.project.stack.map((item, index) => (
                <span
                  key={index}
                  className="mx-0.5 md:text-base text-xs flex flex-col bg-[#16E0BD] text-[#16312d] p-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="font-normal text-2xl">{props.project.description}</p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            {Object.entries(props.project.links).map(([key, value], index) => (
              <a
                key={index}
                href={value}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#16E0BD] transition-all w-fit"
              >
                {key + " "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[1000px] w-1/2  hidden md:grid grid-cols-2 items-center place-items-center ">
        {props.project.image.map((item, index) => {
          return (
            <div
              key={index}
              className="2xl:scale-100 xl:scale-75 scale-50"
              style={{ zIndex: props.project.image.length - index }}
            >
              <motion.div
                className="relative mx-auto border-black bg-black border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"
                style={{
                  translateY:
                    (props.scrollPosition +
                      translateY(props.index, "position")) *
                    ((props.project.image.length - index) *
                      translateY(props.index, "speed")) -
                    props.index * translateY(props.index, "gap"),
                  scale: 1 + (props.project.image.length - index) / 20,
                  transition: "transform 0.4s ease-out",
                }}
              >
                <div className="h-[32px] w-[3px] bg-black absolute -start-[17px] top-[72px] rounded-s-lg" />
                <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[124px] rounded-s-lg" />
                <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[178px] rounded-s-lg" />
                <div className="h-[64px] w-[3px] bg-black absolute -end-[17px] top-[142px] rounded-e-lg" />
                <div className="rounded-[2rem] bg-black overflow-hidden w-[272px] h-[572px]">
                  <img
                    src={item}
                    className="block mt-[50px]"
                    alt="img"
                    style={{ transform: "translateY(-50px)" }}
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
