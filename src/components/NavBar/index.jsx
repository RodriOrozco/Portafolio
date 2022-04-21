import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Whatsapp from "../../assets/whatsapp-logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#64ffda]">
          <Link to="home" smooth={true} duration={500}>
            | Home
          </Link>
        </li>
        <li className="hover:text-[#64ffda]">
          <Link to="about" smooth={true} duration={500}>
            | Sobre Mi
          </Link>
        </li>
        <li className="hover:text-[#64ffda]">
          <Link to="skills" smooth={true} duration={500}>
            | Skills
          </Link>
        </li>
        <li className="hover:text-[#64ffda]">
          <Link to="work" smooth={true} duration={500}>
            | Proyectos
          </Link>
        </li>
        <li className="hover:text-[#64ffda]">
          <Link to="contact" smooth={true} duration={500}>
            | Hola! Quieres Hablar?
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars size={30} className="cursor-pointer hover:text-[#64ffda]" />
        ) : (
          <FaTimes size={30} className="cursor-pointer hover:text-[#64ffda]" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* WhatsApp fixed */}
      <a
        className="lg:hidden flex fixed bottom-5 right-5"
        href="https://api.whatsapp.com/send?phone=+542646717912"
        target="_blank"
      >
        <img src={Whatsapp} style={{ width: "55px" }} alt="whatsApp icon" />
      </a>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#64ffda]">
            <a
              className="flex justify-between items-center w-full text-[#0a192f]"
              href="https://www.linkedin.com/in/rodri-orozco/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#64ffda]">
            <a
              className="flex justify-between items-center w-full text-[#0a192f]"
              href="https://github.com/RodriOrozco"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#64ffda]">
            <a
              className="flex justify-between items-center w-full text-[#0a192f]"
              href="https://api.whatsapp.com/send?phone=+542646717912"
              target="_blank"
            >
              Celular <IoLogoWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
