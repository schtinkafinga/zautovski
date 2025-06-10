import Lottie from "lottie-react";
import animation from "@/assets/Animation - 1749473636394.json";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Lottie
        className="w-96 h-96"
        animationData={animation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default Loading;
