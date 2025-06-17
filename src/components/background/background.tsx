import React from "react";

const Background: React.FC = () => {
  return (
    <video
      loop
      autoPlay
      muted
      playsInline
      src="/videos/galaxy2.mp4"
      className="fixed z-[-1] right-0 bottom-0 w-full h-full object-cover  "
    ></video>
  );
};

export default Background;
