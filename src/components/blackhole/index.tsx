import React from "react";

const BlackHole: React.FC = () => {
  return (
    <div className="blackhole-box z-[-1]   absolute top-0  flex justify-center  mix-blend-lighten">
      <video
        poster="/images/blackhole.png"
        preload="auto"
        className="w-[100%] mt-[-9%] sm:mt-[-16.5%] md:mt-[-18.5%] lg:mt-[-22.2%]"
        loop
        autoPlay
        muted
        playsInline
        src="videos/blackhole.mp4"
      ></video>
    </div>
  );
};

export default BlackHole;
