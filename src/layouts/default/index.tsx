import Background from "@/components/background/background";
import BlackHole from "@/components/blackhole";
import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <div className="Container z-[22]   relative w-[100%] h-[100%] flex flex-col items-center justify-center gap-[100px] bg-[#001f7c38]">
      <Background />
      <BlackHole />
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
