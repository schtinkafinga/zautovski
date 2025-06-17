import React from "react";

const Background: React.FC = () => {
  return (
    <video
      loop
      autoPlay
      muted
      playsInline
      src="videos/galaxy2.mp4"
      className="fixed right-0 bottom-0 w-full h-full object-cover z-[-1] mix-blend-lighten "
    ></video>
  );
};

export default Background;
