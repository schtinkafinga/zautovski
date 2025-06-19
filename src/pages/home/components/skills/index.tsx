import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LaptopMinimal } from "lucide-react";
import React from "react";
import "./skills-styles.css";

const Skills: React.FC = () => {
  const items = [
    "images/12.png",
    "images/11.png",
    "images/10.png",
    "images/13.png",
    "images/6.png",
    "images/5.png",
    "images/7.png",
    "images/15.png",
  ];

  return (
    <div className="skills-section flex flex-col items-center w-full mt-20 sm:mt-32 px-4 sm:px-8">
      <h1 className="section-title autoDisplay text-3xl sm:text-4xl font-bold mb-16 text-center">
        My Skills 💪
      </h1>

      <div className="skills-box  flex flex-col lg:flex-row items-center   justify-center gap-12 lg:gap-6 w-full max-w-8xl">
        {/* Designer Section */}
        <div className="max-w-sm   flex flex-col items-start gap-4 text-left h-full min-h-60">
          <h2 className="gradient text-2xl sm:text-4xl flex items-center gap-2">
            Designer
            <LaptopMinimal className="w-8 h-8 sm:w-10 sm:h-10" />
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            I have expertise in HTML, CSS, and JavaScript, along with modern UI
            libraries and frameworks like Tailwind CSS, Bootstrap, ShadCN UI, and
            Ant Design. I also use Figma to bring ideas to life. My strength lies
            in blending aesthetics with functionality to craft seamless and
            responsive user experiences.
          </p>
        </div>

        {/* Center Image */}
        <div className="w-full  max-w-md lg:max-w-lg xl:max-w-xl h-auto transition-all duration-300">
          <img
            src="images/digital brain.png"
            alt="skills"
            className="w-full h-auto object-contain opacity-80 mix-blend-lighten"
          />
        </div>

        {/* Coder Section */}
        <div className="max-w-sm  flex flex-col items-start gap-4 text-left h-full min-h-60">
          <h2 className="gradient text-2xl sm:text-4xl flex items-center gap-2">
            Coder
            <FontAwesomeIcon icon={faCode} className="w-8 h-8 sm:w-10 sm:h-10" />
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            I have strong expertise in React, with working proficiency in
            Angular, Next.js, and React Native. On the backend, I’m familiar with
            PHP and Express.js. I'm also skilled with SQL (MySQL) and have a
            foundational understanding of MongoDB.
          </p>
        </div>
      </div>

      {/* Tech Icons Slider */}
      <div className="slider w-full max-w-6xl overflow-hidden mt-0 sm:mt-15 lg:mt-24 ">
        <div className="slider-track flex animate-marquee gap-6 h-[100px] ">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="item w-[100px] h-[100px]  flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={item}
                alt={`skill-icon-${index}`}
                className="w-[80px] h-[80px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
