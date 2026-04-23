import { Circle, Dot } from "lucide-react";
import React from "react";

const Project = ({
  image,
  projectDescription,
  projectTitle,
  projectTechs,
  projectLiveURL,
  projectGithubURL,
}) => {
  return (
    <div className="p-2  max-w-[400px] md:max-w-full">
      <div className="flex flex-col gap-3 items-center hover:scale-101 transition-all duration-300">
        <div className=" bg-accent rounded-lg p-4">
          <div className="overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full rounded-lg opacity-70 hover:opacity-80 hover:scale-105 transition-all duration-300 "
            />
          </div>
          <div className="">
            <h3 className=" my-2">{projectTitle}</h3>
            <p className=" opacity-60">{projectDescription}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {projectTechs.map((tech, ind) => (
                <li key={ind} className="relative ">
                  <div className=" absolute bg-primary inset-0 blur rounded-lg"></div>
                  <div className="relative bg-black px-2  w-fit rounded-lg">
                    <span className="text-secondary text-[10px]">{tech}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-1 items-center border border-primary/30 rounded-lg p-2 cursor-pointer">
              <Circle
                className="fill-green-500 text-green-500 w-3 h-3 animate-pulse
               border border-green-500/30 rounded-full
              "
              />
              <p className="text-sm">Live Preview</p>
            </div>
            <div className="flex gap-1 items-center border border-primary/30 rounded-lg p-2 cursor-pointer">
              <p className="text-sm">Github Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
