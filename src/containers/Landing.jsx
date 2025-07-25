import React from "react";
import Silk from "../components/LandingBackground";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";

function Landing() {
    return (
        <div className="relative w-full h-full">
            {/* Background Silk */}
            <div className="absolute inset-0 z-0">
                <Silk speed={2} scale={1} color="#5c1818" noiseIntensity={0.5} rotation={0} />
            </div>
            
            {/* Content Layer */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                {/* Barra de navegación */}
                <div className="absolute top-0 left-0 w-full z-20">
                  <NavBar />
                </div>
                {/* Contenedor del catálogo */}
                <div className="relative z-10 flex items-center justify-center w-full mt-32">
                  <ItemListContainer mensaje="¡Bienvenido a GlutenFree! Descubre nuestros productos sin gluten." />
                </div>
            </div>
        </div>
    )
}

export default Landing;
