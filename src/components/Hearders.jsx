import React, { useEffect } from "react";
import image from "../../src/assets/people-5579977_1280.png";
import "../../src/css/header.css";

function Header() {
  // const ScrollRedirect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 300) {
        document
          .getElementById("")  //section two
          .scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // };

  return (
    <div className="">
      <div className="top flex pl-52 gap-20 w-full h-full  mt-3  ">
        <div className=" bg-white text-black text-left mt-16">
          <h1 className="text-6xl font-bold">
            Triple <span className="text-8xl mt-12 text-[#39FF14]">R</span>
          </h1>
          <h1 className="text-6xl font-bold">Consulting</h1>
          <p className="mt-4 w-96 text-sm">
            Adding wings to your brand through sparkling ideas, holistic
            branding concepts, extraordinary and handcrafted designs. We
            collaborate with companies to create remarkable digital experiences.
          </p>
        </div>
        {/* <div className="flex">
          <img src={image} alt="" className="w-full h-full " />
        </div> */}
      </div>
      <div className="container flex mx-auto  space-x-24 p-4 mt-12">
        <div className="text-left mb-6 pl-16">
          <p className="text-black text-sm w-96">
            Creative agency in Houston made with loads of love and dedication in
            Houston, TX.
          </p>
        </div>

        <div className="flex justify-center items-center relative">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-rotate-svg w-40 h-40"
          >
            <path
              id="circlePvath"
              d="M 50, 50 m -20, 0
              a 20,20 0 1,1 40, 0
              a 20,20 0 1,1 -40, 0"
              fill="transparent"
            />
            <text className="text-[7px]  fill-current text-black">
              <textPath href="#circlePath" startOffset="0%">
                | Triple R Consulting | Triple R Consulting.
              </textPath>
            </text>
          </svg>
          <button className="absolute text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center">
            Let's
            <br />
            Talk 
          </button>
        </div>
        <div className="text-right">
          <p className="text-black w-96 text-sm">
            Weaving together creativity and practical ways to link people to
            cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
