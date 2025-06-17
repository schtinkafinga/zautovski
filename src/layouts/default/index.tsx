import Background from "@/components/background/background";
import BlackHole from "@/components/blackhole";
import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <div className="Container  p-0 m-0   relative bg-[#001f7c29]  z-[-1] w-full mx-auto h-auto ">
      <Background />
      <Header />
      <BlackHole />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
