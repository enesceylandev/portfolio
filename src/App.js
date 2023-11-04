import React from "react";

import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Projects from "./sections/Projects.jsx";
function App() {
  return (
    <>
    <div className=" flex flex-col mx-auto">
      <section className="h-screen items-center justify-center flex">
      <Hero/>
      </section>
      <section>
        <AboutMe/>
      </section>
      <section>
        <Projects/>
      </section>
    </div>
    </>
  );
}

export default App;
