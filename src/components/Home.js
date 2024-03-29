import React from "react";
import Bio from "./Bio";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
