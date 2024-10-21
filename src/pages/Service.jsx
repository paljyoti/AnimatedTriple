import React from "react";
import Loader from "./Loader";
// import videoSrc from "../../src/assets/blackNwhite.mp4";
import videoSrc from "../../src/assets/loaderblack.webm";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";
import { useState } from "react";
import image1 from "../../src/assets/icons8-logo-50 (1).png";
import image2 from "../../src/assets/icons8-logo-50 (2).png";
import image3 from "../../src/assets/icons8-logo-50.png";
import image4 from "../../src/assets/icons8-twitter-50.png";
import image8 from "../../src/assets/icons8-logo-50 (3).png";
import image6 from "../../src/assets/icon6.png";
import image7 from "../../src/assets/icon7.png";
import image5 from "../../src/assets/icon8.png";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const items = [
    {
      title: "First Slide",
      content: "This is the first slide content.",
      image: "https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Slide+1",
    },
    {
      title: "Second Slide",
      content: "This is the second slide content.",
      image: "https://via.placeholder.com/600x300/00FF00/FFFFFF?text=Slide+2",
    },
    {
      title: "Third Slide",
      content: "This is the third slide content.",
      image: "https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Slide+3",
    },
    {
      title: "Fourth Slide",
      content: "This is the fourth slide content.",
      image: "https://via.placeholder.com/600x300/FFFF00/000000?text=Slide+4",
    },
    {
      title: "Fifth Slide",
      content: "This is the fifth slide content.",
      image: "https://via.placeholder.com/600x300/FF00FF/FFFFFF?text=Slide+5",
    },
    {
      title: "Sixth Slide",
      content: "This is the sixth slide content.",
      image: "https://via.placeholder.com/600x300/00FFFF/000000?text=Slide+6",
    },
  ];

  return (
    <div>
      <Loader videoSrc={videoSrc} />

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-hidden">
        <div className="flex-shrink-0 snap-start w-full h-screen bg-yellow-400 items-center justify-center">
          <div className="flex ">
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
              <a
                className=" text-3xl font-semibold  hover:text-[#39FF14]"
                href="#"
              >
                HOME
              </a>
              <a
                className=" text-3xl font-semibold hover:text-[#39FF14]"
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
                <h1 className="pt-32 text-white font-semibold ">
                  GET IN TOUCH
                </h1>
                <h1 className="text-white text-sm">
                  Email : rishabhbharee@gmail.com
                </h1>
                <h1 className="text-white text-sm">Ph : +91 1234567890</h1>
              </div>
            </div>

            <main className="p-5 ml-[1200px] ">
              <span className="cursor-pointer text-2xl" onClick={openMenu}>
                &#9776;
              </span>
            </main>
          </div>
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

          <div className="footer pt-16">
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
          {/* <div className="flex">
            <div className=" heading text-white pt-40 pl-40 gap-10">
              <p className="text-sm font-bold">what we do </p>
              <h2 className="font-bold text-lg pl-96">01</h2>
              <h1 className="font-bold text-5xl">HEAD</h1>
              <p className="text-sm w-96">
               
                Every talented individual on our team works closely together on
                an equal footing.Every talented individual on our team works
                closely together on an equal footingour team works closely
                together on an equal footing.
              </p>
              <p className="text-sm w-96">
               
                Every talented individual on our team works closely together on
                an equal footing.Every talented individual on our team works
                closely together on an equal footingour team works closely
                together on an equal footing.
              </p>
            </div>
 
            <div className=" mt-10 ml-10 w-auto h-96 ">
              <img src={service} alt="" />
            </div>
          </div> */}

          <div className="relative w-full max-w-lg mx-auto flex">
            <div className="overflow-hidden rounded-lg flex-grow">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4">
                    <h2 className="text-xl">{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
              <h1 className="text-center text-2xl font-bold mb-4">
                Carousel Example
              </h1>

              <div items={items} />
            </div>

            {/* Dots for navigation */}
            <div className="flex flex-col justify-center items-center ml-4">
              {items.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 bg-gray-500 rounded-full mb-2 cursor-pointer ${
                    currentIndex === index ? "bg-blue-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 snap-start w-full h-screen bg-blue-700 items-center justify-center">
          <div className="flex gap-20 text-white">
            <div className="head">
              <p className="pt-36 pl-52 text-sm font-bold  ">OUR_CLIENTS</p>
            </div>
            <div className="headings">
              <h1 className="pt-36 font-bold text-6xl">
                We don’t work for you, but with you.
              </h1>
              <p className="text-sm pt-5 pr-20">
                You are not merely our client but our true partner. Every
                talented individual on our team works closely together on an
                equal footing. Fortunately, we’ve formed more than excellent
                partnerships; we have formed long-lasting, true friendships.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className="icons flex gap-48 pt-14 pl-96"
          >
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </motion.div>

          <motion.div
          //  variants={fadeIn("right", 0.2)}
            initial={{ x: 400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className="icons flex gap-48 pt-14 pl-96"
          >
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
            <img src={image8} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Service;
