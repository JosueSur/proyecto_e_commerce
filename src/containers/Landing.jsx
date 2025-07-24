import React from "react";
import Silk from "../components/LandingBackground";

function Landing() {
    return (
        <div className="relative w-full h-full">
            {/* Background Silk */}
            <div className="absolute inset-0 z-0">
                <Silk speed={2} scale={1} color="#5c1818" noiseIntensity={0.5} rotation={0} />
            </div>
            
            {/* Content Layer */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                {/* Fondo de la navbar */}
                <div className="absolute top-1/5 left-1/2 -translate-x-1/2 
                                -translate-y-1/2 flex items-center justify-center 
                                w-2/3 h-16 rounded-full bg-red-300 opacity-20 
                                shadow-2xl border-2 border-white">
                    <div className="flex items-center justify-center w-full h-full">
                    </div>
                </div>
                {/* Texto de la navbar */}
                <div className="absolute top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-start w-2/3 h-16 rounded-full">
                    <div className="flex items-center justify-start p-12 w-full h-full">
                        <a className="btn font-bold text-gray-300 text-3xl">GlutenFree</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
