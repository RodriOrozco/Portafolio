import React from "react";

import WorkImg from "../../assets/workImg.jpeg";
import Weather from "../../assets/ProjectImages/weatherapp.png";
import TeslaClon from "../../assets/ProjectImages/tesla.png";
import ToDoList from "../../assets/ProjectImages/todolist.png";
import Calculadora from "../../assets/ProjectImages/calculadora.png";
import realEstate from "../../assets/ProjectImages/realstate.png";
import VideoGames from "../../assets/ProjectImages/videogames.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda]">
            Proyectos
          </p>
          <p className="py-6">
            // Ultimos proyectos realizados y algunos en proceso
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${VideoGames})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 cursor-pointer">
              <span className="text-2xl font-bold text-white tracking-wider">
                Proyecto Full-Stack con <br /> Back-End y Front-End
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pi-videogames-main-one.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/RodriOrozco/PI-Videogames-main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 cursor-pointer">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Web Bienes Raíces con <br /> React y Styled-Components
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://real-estate-web-iota.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/RodriOrozco/Real-Estate-Web"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Calculadora})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 cursor-pointer">
              <span className="text-2xl font-bold text-white tracking-wider">
                Calculadora React js, <br /> Javascript, responsive
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://calculadora-orpin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/RodriOrozco/calculadora"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ToDoList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 cursor-pointer">
              <span className="text-2xl font-bold text-white tracking-wider">
                Lista de tareas responsive,
                <br /> con React, JS y TS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://to-do-list-orpin-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/RodriOrozco/To-Do-List"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TeslaClon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Native y Expo <br /> (descargar Expo Go para acceder a la
                app desde QR)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://expo.dev/@rozco/Tesla-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/RodriOrozco/tesla-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React, JS, Bootstrap <br /> (No tiene deploy, por ahora..)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://www.linkedin.com/posts/rodri-orozco_buenaaaas-paso-a-mostrarles-la-app-del-activity-6909937228756480000-hGas?utm_source=linkedin_share&utm_medium=member_desktop_web"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
