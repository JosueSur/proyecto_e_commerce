import React from "react";
import { Outlet } from "react-router-dom";
import Silk from "../components/LandingBackground";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Silk */}
      <div className="absolute inset-0 z-0">
        <Silk speed={2} scale={1} color="#5c1818" noiseIntensity={0.5} rotation={0} />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen">
        {/* Barra de navegación */}
        <div className="relative z-20">
          <NavBar />
        </div>
        
        {/* Contenido principal */}
        <div className="relative z-10 pt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
