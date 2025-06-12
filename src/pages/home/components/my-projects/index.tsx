import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { cardData } from "./cardData";
import "./my-projects-styles.css";
const MyProjects: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const hoverSignRefs = useRef<HTMLDivElement[]>([]);

  const handleVideoHover = (index: number, state: string) => {
    if (state === "leave") {
      videoRefs.current[index]?.pause();
      hoverSignRefs.current[index]?.classList.remove("active");
    } else {
      videoRefs.current[index]?.play();
      hoverSignRefs.current[index]?.classList.add("active");
    }
  };

  return (
    <div className="my-projects flex flex-col  gap-30 items-center relative w-[80%] h-auto mt-[200px] mb-[300px] ">
      <h1 className="section-title text-[40px] font-bold ">My Projects 👨‍💻</h1>

      {cardData.map((card, index) => (
        <div
          key={index}
          className="project-card flex w-[100%]   h-[40%]  items-center gap-[10%] justify-center "
        >
          <div className="project-vidbox autoBlur flex justify-center items-center w-[40%] relative  cursor-pointer min-w-[400px] transition duration-500 mix-blend-exclusion">
            <video
              id={card.video}
              className="object-cover  w-[100%]  h-[320px] shadow-[0_0_10px_lightgray] rounded-[20px] transition duration-500 hover:shadow-[0_0_20px_lightgray]"
              src={card.video}
              ref={(el) => {
                videoRefs.current[index] = el!;
              }}
              onMouseEnter={() => handleVideoHover(index, "enter")}
              onMouseLeave={() => handleVideoHover(index, "leave")}
              loop
              muted
              playsInline
            ></video>
            <div
              ref={(el) => {
                hoverSignRefs.current[index] = el!;
              }}
              className="hover-sign absolute flex justify-center items-center w-[30%] h-[100px] "
            ></div>
          </div>
          <div className="project-info flex flex-col items-start justify-center w-[50%] pl-[10%]">
            <h1
              className="w-[90%] text-[25px] font-700 text-nowrap mb-[10px] mt-[0] max-w-[450px] 
"
            >
              {card.titleSection1}
              <span className="gradient"> {card.titleSection2} </span>
              {card.titleSection3}
            </h1>
            <p className="w-[90%] max-w-[400px] min-w-[300px] mb-[50px] mt-[0]">
              {card.description}
            </p>
            <a
              href={card.link}
              target="_blank"
              className="bx bx-link-external flex justify-center items-center gap-2 text-white py-[10px] px-[15px] rounded-[10px] border border-[#727fdeb4] bg-[#22004934] shadow-[0_0_5px_#727fde86] cursor-pointer transition duration-300 hover:shadow-[0_0_15px_#727fde86] hover:opacity-[0.7]"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-3 h-3"
              />
              Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
