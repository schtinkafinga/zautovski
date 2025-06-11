import React from "react";
import Hero from "./components/hero";
import MyProjects from "./components/my-projects";
import Skills from "./components/skills";
import Info from "./components/info";
import Contact from "./components/contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Info />
      <MyProjects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
