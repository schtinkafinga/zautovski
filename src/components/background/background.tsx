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
      className="fixed z-[-1] w-full right-0 bottom-0  object-cover "
    ></video>
  );
};

export default Background;

//mix-blend-lighten  ეს შეგიძლია დაამატო ვიდეოზე თუგინდა რომ ფერი დაედოს ბექში
