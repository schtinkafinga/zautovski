import React from "react";

const Background: React.FC = () => {
  return (
    <video
      poster="/images/galaxy.png"
      preload="auto"
      loop
      autoPlay
      muted
      playsInline
      src="/videos/galaxy2.mp4"
      className="fixed top-0 left-0 w-full h-full object-cover  mix-blend-lighten "
    ></video>
  );
};

export default Background;
