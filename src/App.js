import React from "react";

import AboutMe from "./sections/AboutMe.jsx";
import Contact from "./sections/Contact.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
function App() {
  return (
    <>
      <div className=" flex flex-col mx-auto">
        <section className="h-screen items-center justify-center flex text-[#303030]">
          <Hero />
        </section>
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
