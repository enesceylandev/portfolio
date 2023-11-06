import React from "react";

import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx"
import Contact from "./sections/Contact.jsx";
function App() {
  return (
    <>
    <div className=" flex flex-col mx-auto">
      <section className="h-screen items-center justify-center flex text-[#303030]">
      <Hero/>
      </section>
      <section>
        <AboutMe/>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
        <Skills/>
      </section>
      <section className="text-[#101010] hover:text-[#303030]">
        <Contact/>
      </section>
    </div>
    </>
  );
}

export default App;
