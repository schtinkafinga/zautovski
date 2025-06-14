import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SendHorizontal } from "lucide-react";
import "./hero-styles.css";

import Lottie from "lottie-react";
import animationScroll from "@/assets/animations/Scroll-Animation - 1749495927443.json";

const Hero: React.FC = () => {
  return (
    <div className="hero flex relative w-full h-[100vh] items-center justify-between ">
      <div className="hero-info autoBlur absolute left-[5%] ">
        <div className="hero-info-title rounded-[50px] flex justify-center items-center text-[#727fde] py-[8px] px-[5px] border border-[#727fde77] w-[250px] bg-[#2200493d] shadow-[0_0_5px_#727fde88]">
          <FontAwesomeIcon icon={faSketch} />
          Front-end Developer Portfolio
        </div>
        <h1 className="text-[60px] max-w-[600px] font-[700] leading-[70px] mt-[40px] mb-[30px]">
          Providing <span className="gradient">the best</span> Project
          <span className="gradient"> Experience</span>
        </h1>
        <p className="max-w-[550px] leading-[25px] mb-[40px] text-[20px]">
          I'm a Front-end developer with Experience in website,Mobile and
          Software development. Check out my skills.
        </p>

        <button className="text-white flex items-center transition duration-300 justify-center gap-2 py-[15px] px-[35px] border rounded-[10px] bg-[#2200493d] border-[#727fdeb4] shadow-[0_0_5px_#727fde86] cursor-pointer hover:shadow-[0_0_15px_#727fde86] ">
          <SendHorizontal className="w-4 h-4 " />
          Contact Me
        </button>
      </div>

      <div className="hero-vid-box  absolute right-[0%] ">
        <video
          className="autoBlur h-[900px] mix-blend-lighten"
          autoPlay
          loop
          muted
          playsInline
          src="videos/hero-video.mp4"
        ></video>
      </div>

      <div className="scroll-down w-[30px]  h-[50px] absolute left-[49%] bottom-[8%] rounded-[50px] cursor-pointer shadow-[0_0_15px_rgba(211,211,211,0.477)]  border-2 border-[lightgray]">
        <Lottie
          animationData={animationScroll}
          loop={true}
          className=" w-[70px] h-[70px]   absolute top-[-12px] left-[-22px]  "
        />
      </div>
    </div>
  );
};

export default Hero;
