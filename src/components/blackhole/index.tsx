import React from "react";

const BlackHole: React.FC = () => {
  return (
    <div className="blackhole-box  w-full  flex justify-center  mix-blend-lighten  ">
      <video
        poster="/images/blackhole.png"
        preload="auto"
        className="w-full h-46 sm:h-54 md:h-59 lg:h-72 "
        loop
        autoPlay
        muted
        playsInline
        src="videos/blackhole2.mp4"
      ></video>
    </div>
  );
};

export default BlackHole;
