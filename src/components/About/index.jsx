import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
              Sobre Mi
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left  text-4xl font-bold">
            <p>Me alegra verte por acá, gusto en conocerte! Soy Rodri 👋😁</p>
          </div>
          <div className="sm:border-l-4 border-[#64ffda] sm:pl-4">
            <p>
              Me apasiona programar, amo ver cuando una Aplicación/Página queda
              en excelentes condiciones y le atrae al usuario, lo cual me
              impulsa a querer aprender y perfeccionarme constantemente. <br />
              Tengo estudios en Psicología, conocimientos en artes visuales,
              marketing y ventas. Además he adquirido, gracias a mi experiencia,
              un pensamiento creativo y analitico, me gusta trabajar en equipo,
              entreno mi inteligencia emocional, tengo habilidad social, escucha
              activa y considero importante la comunicación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
