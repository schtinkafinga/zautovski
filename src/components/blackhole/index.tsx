import React from "react";

const BlackHole: React.FC = () => {
  return (
    <div className="blackhole-box absolute top-0 w-[100%] flex justify-center  mix-blend-lighten">
      <video className="w-[100%] mt-[-24.9%] " loop autoPlay muted playsInline src="videos/blackhole.mp4"></video>
    </div>
  );
};

export default BlackHole;
