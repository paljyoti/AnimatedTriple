import React, { useEffect, useState } from "react";
import imagelogo from "../../src/assets/TRIPLE R CONSULTING.png"


function Navbar() {


  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-black bg-opacity-20  backdrop-filter   backdrop-blur-lg fixed top-0 left-0  h-32   w-[100%] z-10 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="logo "> <img src= {imagelogo} className=" w-36   " alt="Logo" /> </div>
      <div className="container mx-auto flex justify-around items-center px-4">
        <div className="flex items-center space-x-4  ">
          <div className="navbar flex  space-x-10  text-lg pb-20">
            <a
              href="#"
              className="text-white  hover:text-black transition ml-60  duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-black transition  duration-300"
            >
              About 
            </a>
            <a
              href="#"
              className="text-white hover:text-black transition duration-300"
            >
              Service
            </a>
            <a
              href="#"
              className="text-white hover:text-black transition duration-300"
            >
              blog 
            </a>
            <a
              href="#"
              className="text-white hover:text-black transition duration-300"
            >
              Contact
            </a>

            <button
              onClick={toggleMenu}
              className={`relative flex flex-col items-center justify-center pl-44 w-7 h-7  transition-transform duration-300 ${
                isMenuOpen ? "bg-transparent" : ""
              }`}
            >
              <span
                className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-in-out ",
                }}
              />
              <span
                className={`block w-7 h-0.5 bg-white my-1 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
              
              <span
                className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </button>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Navbar;
