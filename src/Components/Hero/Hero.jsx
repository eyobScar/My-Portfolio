import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../../Task/scrollToSection";
import { FadeIn } from "../../Animations/FadeIn";
import Typing from "../../Task/Typing";

import React from "react";

const Hero = () => {
  const words = ["Frontend", "Backend", "Fullstack"];
  return (
    <section
      className="min-h-[700px] lg:px-4 pt-30 sm:pt-0 mb-10 sm:mb-0 flex items-center"
      id="home"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5 items-start justify-center">
          <FadeIn>
            <div className="" data-aos="fade-up">
              <div className="font-bold text-3xl lg:text-4xl">
                <h1>Hi there, </h1>
                <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  <h1>I'm</h1>
                  <h2>Eyob Alayu</h2>
                </div>
              </div>
              <Typing words={words} />
            </div>
          </FadeIn>
          <FadeIn>
            <p className="opacity-60 text-black dark:text-white/80">
              Turning ideas into full-stack web solutions , I build modern,
              responsive full-stack web applications that turn ideas into real,
              scalable digital products.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="relative max-w-80 ">
              <div className="absolute inset-0 bg-primary rounded-lg blur"></div>
              <button
                className="relative dark:bg-black bg-white w-full flex item-center justify-center space-x-3 py-1 px-5 rounded-lg text-sm"
                onClick={() => scrollToSection("contact-me")}
              >
                <span className="">
                  <Star className="text-primary w-3 h-3 mt-1" />
                </span>
                <span className="divide-x divide-x-primary group">
                  <span className="text-primary pr-5">Full-Stack</span>
                  <span className="text-secondary pl-5 ">
                    Contact Me
                    <ArrowRight className="w-10 h-5 inline transition-all duration-400 group-hover:translate-x-2" />
                  </span>
                </span>
              </button>
            </div>
          </FadeIn>
        </div>
        <div className="relative rounded-2xl orverflow-hidden aspect-1:1 max-w-[200px] sm:ml-auto md:max-w-[250px] lg:max-w-[300px] mx-auto sm:mx-0 group" data-aos="flip-right">
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-primary inset-[-2px] animate-[spin_6s_infinite] rounded-lg"></div>
          </div>
          <div className="relative rounded-full m-[5px] h-cal(100%-2px) overflow-hidden">
            <img
              src="Eyob_img.webp"
              srcSet="Eyob_img.webp 1x, Eyob_img@2x.webp 2x"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
