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
    <div className="skills-section flex flex-col items-center relative w-full sm:mt-40">
      <h1 className="section-title autoDisplay text-[40px] font-bold">
        My Skills 💪
      </h1>

      <div className="skills-box h-[90vh] relative flex items-start justify-center">
        <img
          className="w-[55%] mix-blend-lighten opacity-70  mt-10"
          src="images/digital brain.png"
          alt="skills-image"
        />

        {/* Designer Section */}
        <div className="designer autoDisplay gap-10 absolute top-[35%] sm:top-[25%] sm:left-[-15%] max-w-[300px] flex flex-col items-start">
          <h1 className="gradient text-[32px] sm:text-[50px] flex items-center gap-3">
            Designer
            <LaptopMinimal className="w-12 h-12 relative top-[3px]" />
          </h1>
          <p className="text-sm sm:text-base leading-[23px]">
            I have expertise in HTML, CSS, and JavaScript, along with modern UI
            libraries and frameworks such as Tailwind CSS, Bootstrap, ShadCN UI,
            and Ant Design. I also use design tools like Figma to bring ideas to
            life. My strength lies in blending aesthetics with functionality to
            craft seamless and responsive user experiences.
          </p>
        </div>

        {/* Coder Section */}
        <div className="coder autoDisplay gap-10 absolute top-[70%] sm:top-[25%] sm:right-[-15%] max-w-[300px] flex flex-col items-start">
          <h1 className="gradient text-[32px] sm:text-[50px] flex items-center gap-3">
            Coder
            <FontAwesomeIcon
              icon={faCode}
              className="w-12 h-12 relative top-[3px]"
            />
          </h1>
          <p className="text-sm sm:text-base leading-[23px]">
            I have strong expertise in React, and working proficiency with
            Angular, Next.js, and React Native. On the backend, I have a basic
            understanding of PHP and Express.js. I’m also proficient in working
            with databases — I have intermediate-level experience with SQL
            (including MySQL), and basic knowledge of MongoDB.
          </p>
        </div>
      </div>

      {/* Tech Icons Slider */}
      <div className="slider w-[300px] sm:w-[800px]  h-[120px] overflow-hidden mt-[105px] sm:mt-[20px]">
        <div className="list slider-track flex w-max animate-marquee h-[120px] gap-6">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="item w-[110px] h-[110px] flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={item}
                alt={`slide-${index}`}
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
