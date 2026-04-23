import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TechStack from "./Components/TechStack/TechStack";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
