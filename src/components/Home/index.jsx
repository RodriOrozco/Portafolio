import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#64ffda]">Hola!, mi nombre es</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Rodrigo Orozco
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          Desarrollador Web Full-Stack.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Me centro en crear Full-Stack Apps y deseo generar experiencias
          unicas, tengo orientación al Front-End, pero sin miedo al Back-End y
          me apasiona el diseño tanto visual como responsive.
        </p>
        <div>
          <button className="text-white hover:text-[#0a192f] hover:font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda]">
            Ver Proyectos
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
