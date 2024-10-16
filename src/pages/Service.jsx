import React from "react";
import Loader from "./Loader";
import videoSrc from "../../src/assets/blackNwhite.mp4";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";
import { useState } from "react";

function Service(props) {
  const [isMoved, setIsMoved] = useState(false);

  // Function to toggle the movement class
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
    <div>
      <Loader videoSrc={videoSrc} />

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-hidden">
        <div className="flex-shrink-0 snap-start w-full h-screen bg-yellow-400 items-center justify-center">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="head text-black text-center "
          >
            <p className="text-md font-bold pt-24 ">WHAT WE DO</p>
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-5xl font-bold"
            >
              A Top-Tier Design
            </motion.h1>
            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-5xl font-bold"
            >
              Agency
            </motion.h1>

            <p className="text-sm pt-5">
              We help brands to grow and better connect with their prospective
              clients by
            </p>
            <p className="text-sm">
              telling their stories clearly with effective branding.
            </p>
          </motion.div>

          <div className="footer  pt-32">
            <div className="container mx-auto flex flex-wrap justify-between">
              <div className=" w-full sm:w-1/3 ">
                <p className="text-sm pt-28  pl-6 font-semibold text-left">
                  © mayabytes 2023, All rights reserved.
                </p>
              </div>

              <div className="flex justify-center items-center mt-10 relative">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-rotate-svg w-40 h-40"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -20, 0
              a 20,20 0 1,1 40, 0
              a 20,20 0 1,1 -40, 0"
                    fill="transparent"
                  />
                  <text className="text-[7px] fill-current text-black">
                    <textPath href="#circlePath" startOffset="0%">
                      | Triple R Consulting | Triple R Consulting.
                    </textPath>
                  </text>
                </svg>
                <button className="absolute text-center text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center">
                  Let's
                  <br />
                  Talk
                </button>
              </div>

              <div className="contact w-full sm:w-1/3  pr-6">
                <p className="text-sm pt-28 font-semibold  text-right">
                  Privacy Policy · Terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 snap-start w-full h-screen bg-black items-center justify-center">


          
        </div>

        <div className="flex-shrink-0 snap-start w-full h-screen bg-blue-800 items-center justify-center"></div>
      </div>
    </div>
  );
}

export default Service;
