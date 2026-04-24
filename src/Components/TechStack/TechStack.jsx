import React from "react";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FadeIn } from "../../Animations/FadeIn";
const TechStack = () => {
  const icons = [
    "html5",
    "css3",
    "js",
    "react",
    "node",
    "mongo",
    "mysql",
    "tailwind",
    "git",
  ];
  return (
    <section
      className="my-20 max-w-[1100px] mx-auto px-5 w-full "
      id="tech-stack"
    >
      <div className="w-fit mx-auto text-center">
        <h2 className="text-2xl text-black dark:text-white">My Tech Stacks</h2>
        <hr className="border-none h-1 w-25 bg-primary mx-auto my-2" />
        <p className="text-black/80 dark:text-white/80">
          Tools which I am using for development
        </p>
      </div>
      <FadeIn>
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap gap-10 sm:gap-15 md:gap-20 mt-10 justify-center">
            {icons.map((icon , ind) => (
              <svg key={ind} className=" icon w-15 h-15 min-[400px]:w-20 h-20 sm:w-25 h-25 ">
                <use href={`/sprite.svg#${icon}`} />
              </svg>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default TechStack;
