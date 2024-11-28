import React from 'react'
import Loader from "./Loader";
import videoSrc from "../../src/assets/loaderblack.webm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";

function Terms(props) {

  const navigate = useNavigate();
  const [isMoved, setIsMoved] = useState(false);

  const handleTouch = () => {
    setIsMoved(!isMoved);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <div className='bg-[#EEF7FF]'>
    
    <Loader videoSrc={videoSrc} />
    <div className="header "
      >
        <div className=" flex  justify-between items-center pl-14 pr-20 px-4 py-9">
          <h2 onClick={() => navigate("/")} className="text-3xl">
            <ImHome className="fixed hover:text-[#39FF14]" />
            <h1 className=" fixed font-bold text-xs pl-8">
              Triple{" "}
              <span className="text-2xl font-bold text-[#39FF14]">R</span>{" "}
              Consulting
            </h1>
          </h2>

          <main>
            <span
              className="cursor-pointer text-2xl fixed font-bold"
              onClick={openMenu}
            >
              &#9776;
            </span>
          </main>
        </div>

        <div
          id="side-menu"
          className={`fixed top-0 right-0 w-[240px] z-50 bg-black p-5 flex flex-col space-y-5 text-white duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <a
            href="javascript:void(0)"
            className="text-right text-4xl"
            onClick={closeMenu}
          >
            &times;
          </a>
          <a className="text-3xl font-semibold hover:text-[#39FF14]" href="#">
            HOME
          </a>
          <a
            className="text-3xl font-semibold hover:text-[#39FF14]"
            href="/#/aboutus"
          >
            ABOUT US
          </a>
          <a
            className="text-3xl font-semibold hover:text-[#39FF14]"
            href="/#/service"
          >
            SERVICES
          </a>
          <a
            className="text-3xl font-semibold hover:text-[#39FF14]"
            href="/#/blog"
          >
            BLOG
          </a>
          <a
            className="text-3xl font-semibold hover:text-[#39FF14]"
            href="/#/contact"
          >
            CONTACT US
          </a>

          <div className="details">
            <h1 className="pt-32 text-white font-semibold">GET IN TOUCH</h1>
            <h1 className="text-white text-sm">
              Email : rishabhbahree@gmail.com
            </h1>
            <h1 className="text-white text-sm">Ph : +91 7018324802</h1>
          </div>
        </div>
      </div>

    
    </div>
  )
}

export default Terms