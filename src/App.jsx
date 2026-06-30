import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TechStack from "./Components/TechStack/TechStack";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className=" bg-white dark:bg-black">
      <div className="px-3 sm:px-4 md:px-5 max-w-[1300px] mx-auto">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default App;
