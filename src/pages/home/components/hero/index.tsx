import React from "react";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SendHorizontal } from "lucide-react";
import Lottie from "lottie-react";

import animationScroll from "@/assets/animations/Scroll-Animation - 1749495927443.json";
import "./hero-styles.css";

const Hero: React.FC = () => {
  return (
    <section className="hero  w-full h-[100vh] flex border">
      {/* Hero Info */}
      <div className="hero-info autoBlur  bottom-[2%] left-[9%] md:bottom-[45%] md:left-[5%]">
        <div className="hero-info-title w-[250px] flex items-center justify-center gap-1 rounded-[50px] border border-[#727fde77] bg-[#2200493d] py-2 px-2 text-[#727fde] shadow-[0_0_5px_#727fde88]">
          <FontAwesomeIcon icon={faSketch} />
          Front-end Developer Portfolio
        </div>

        <h1 className="mt-5 mb-[30px] text-[35px] sm:text-[60px] font-bold leading-[50px] sm:leading-[70px] max-w-[600px]">
          Providing <span className="gradient">the best</span> Project{" "}
          <span className="gradient">Experience</span>
        </h1>

        <p className="mb-10 max-w-[550px] text-[20px] leading-[25px] ">
          I'm a Front-end developer with experience in website, mobile, and
          software development. Check out my skills.
        </p>

        <button className="flex items-center justify-center gap-2 rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] px-[35px] py-[15px] text-white shadow-[0_0_5px_#727fde86] transition duration-300 hover:shadow-[0_0_15px_#727fde86]">
          <SendHorizontal className="w-4 h-4" />
          Contact Me
        </button>
      </div>

      {/* Hero Video */}
      <div className="hero-vid-box  right-0 bottom-[48%] sm:bottom-[24%] pl-4 sm:pl-0 ">
        <video
          loop
          autoPlay
          muted
          src="videos/hero-video3.mp4"
          className="autoBlur max-h-[900px] mix-blend-lighten "
        ></video>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-down  left-[58%] sm:left-[49%] bottom-[2.2%] sm:bottom-[28%] h-[50px] w-[30px] rounded-[50px] border-2 border-[lightgray] shadow-[0_0_15px_rgba(211,211,211,0.477)] cursor-pointer">
        <Lottie
          animationData={animationScroll}
          loop
          className=" top-[-12px] left-[-22px] w-[70px] h-[70px]"
        />
      </div>
    </section>
  );
};

export default Hero;
