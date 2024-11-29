import React, { useRef, useState } from "react";
import imageSection from "../../src/assets/social-media-marketing.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../src/Varients";
import "../../src/css/landing.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import gif from "../../src/assets/twofingergif.gif";
import imageClient from "../../src/assets/greenery.gif";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ImHome } from "react-icons/im";
import logo from "../../src/assets/Untitled_design__1___2_-removebg-preview.png";

import image1 from "../../src/assets/icons8-logo-50 (1).png";
import image2 from "../../src/assets/icons8-logo-50 (2).png";
import image3 from "../../src/assets/icons8-logo-50.png";
import image4 from "../../src/assets/icons8-logo-50 (7).png";
import image8 from "../../src/assets/icons8-logo-50 (5).png";
import image6 from "../../src/assets/icons8-logo-50 (6).png";
import image7 from "../../src/assets/icons8-logo-50 (4).png";
import image5 from "../../src/assets/icons8-logo-50 (8).png";

function Landing(props) {
  const navigate = useNavigate();
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
    <div className="snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth overflow-hidden">
      <div className="flex-shrink-0 snap-start w-full h-screen bg-[#EEF7FF]  items-center justify-center ">
        <div className="header ">
          <div className=" flex  justify-between items-center pl-14 pr-20 px-4 py-9">
            {/* <img src={logo} alt="" className="fixed h-52 w-52 pt-9" /> */}
            <h2 className="text-3xl">
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

            <div className="details text-xs">
              <h1 className="pt-32 text-white font-semibold">GET IN TOUCH</h1>
              <h1 className="text-white ">
                Email : info@tripleRconsulting.net
              </h1>
              <h1 className="text-white text-sm">Ph : +91 7018324802</h1>
            </div>
          </div>
        </div>

        <div className="top flex flex-col lg:flex-row pl-4 lg:pl-48 gap-10 lg:gap-20">
          <div className="bg-[#EEF7FF] text-black text-left  px-4 lg:px-0">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              Triple
              <span className="text-5xl sm:text-6xl lg:text-8xl pt-2 text-[#39FF14]">
                R
              </span>
            </motion.h1>
            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              Consulting
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="pt-4 sm:pt-6 w-full text-justify sm:w-[90%] md:w-[93%] lg:w-96 text-xs sm:text-sm font-serif"
            >
              Soar to New Heights with Our Sparkling Ideas, Holistic Branding
              Concepts, and Exquisite Handcrafted Designs. We Partner with
              Brands to Craft Unforgettable Digital Experiences!
            </motion.p>
          </div>
          <img
            src={imageClient}
            alt=""
            className="w-full sm:w-[50vw]  lg:w-[23vw] h-auto mt-4 lg:ml-24"
          />
        </div>

        <div className="container flex flex-col lg:flex-row mx-auto space-y-8 lg:space-y-0 lg:space-x-24 ">
          <div className="text-left px-4 lg:px-16">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black text-xs w-full hidden sm:block sm:w-[90%] lg:w-96  pt-8 sm:pt-16"
            >
              Crafted with passion, our creative agency in Gurugram, Haryana,
              India, delivers innovative solutions to bring your brand's vision
              to life.
            </motion.p>
          </div>

          <div className="flex justify-center  items-center relative px-4  lg:px-6">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-rotate-svg w-36 sm:w-40  h-36 sm:h-40  lg:h-44"
            >
              <path
                id="circlePvath"
                d="M 50, 50 m -20, 0
        a 20,20 0 1,1 40, 0
        a 20,20 0 1,1 -40, 0"
                fill="transparent"
              />
              <text className="text-[3px] sm:text-[4.9px] fill-current text-black  hidden  sm:block">
                <textPath href="#circlePath" startOffset="0%">
                  | TripleRConsulting | TripleRConsulting | TripleRConsulting
                </textPath>
              </text>
            </svg>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="absolute text-xs sm:text-sm bg-black text-white w-10  hidden  sm:block sm:w-12 h-10 sm:h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center"
            >
              Let's
              <br />
              Talk
            </button>
          </div>

          <div className="px-4   lg:px-8 text-xs pr-10">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black w-full sm:w-[90%] lg:w-96  hidden  sm:block pr-20 text-xs xs:text-xs pt-8 sm:pt-16"
            >
              Blending creativity with practical solutions, we connect people
              and brands with technology in inspiring ways.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 snap-start w-full h-screen  bg-[#EEE6FF] flex items-center justify-center">
        <div className="">
          <div className="top flex pl-20  gap-52">
            <div className="hidden sm:block pt-44  ">
              <div className="web">
                <a className="pl-60" href="/#/webDesign">
                  <button className="bg-[#8A2BE2]  mt-10  text-lg font-bold text-white py-2 px-4 rounded-full hover:bg-[#39FF14] transition">
                    Web Designing
                  </button>
                </a>
              </div>
              <div className="sec gap-44 text-lg font-bold  flex">
                <a className=" flex pt-14 pl-16 " href="/#/digitalMarketing">
                  <button className="bg-[#FF0000] text-white  py-2 px-4 rounded-full hover:bg-[#39FF14] transition">
                    Digital Marketing
                  </button>
                </a>
                <a className="flex pt-14" href="/#/emailMarketing">
                  <button className="bg-[#4B0082]   text-white py-2 px-4 rounded-full hover:bg-[#39FF14] transition">
                    Email Marketing
                  </button>
                </a>
              </div>
              <div className="sec text-lg font-bold  flex">
                <a className=" flex  pr-10  " href=" /#/contentMarketing">
                  <button className="bg-[#FF8C00] mt-24 mb-24  text-white py-2 px-4 rounded-full hover:bg-[#39FF14] transition">
                    Content Marketing
                  </button>
                </a>
                <img src={imageSection} alt="" className="w-52 h-52   " />
                <a className="flex pl-10" href="/#/socialMedia">
                  <button className="bg-[#0000FF] mt-24 mb-24 text-white py-2 px-4 rounded-full hover:bg-[#39FF14] transition">
                    Social Media
                  </button>
                </a>
              </div>
              <div className="sec text-lg font-bold gap-44 pl-32  flex">
                <a className=" flex " href="/#/seo">
                  <button className="bg-[#FFD700] mb-48  text-white py-2 px-4 rounded-full hover:bg-[#39FF14] transition">
                    SEO
                  </button>
                </a>
                <a className="flex" href="/#/ppc">
                  <button className="bg-[#008000] mb-48  text-white py-2 px-4 rounded-full hover:bg-[#39FF14] transition">
                    PPC
                  </button>
                </a>
              </div>
            </div>

            <div className="pt-72">
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-4xl font-bold text-black"
              >
                Branding
              </motion.h1>
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-4xl font-bold text-black"
              >
                with Innovation
              </motion.h1>
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-4xl font-bold text-black"
              >
                and Strategy!
              </motion.h1>
              <p className="pt-5"> THINK DIFFERENTLY.</p>
              <p>BUILD DIFFERENTLY.</p>
              <p>GROW DIFFERENTLY.</p>

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="pt-4 w-96 pr-10 text-sm text-black font-serif"
              >
                Discover how our website design services can transform your
                business
              </motion.p>
              <button
                onClick={() => navigate("/service")}
                className="bg-black  mt-10 ml-20 text-white py-2 px-4 rounded hover:bg-[#39FF14] transition"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 snap-start w-full h-screen bg-[#7AB2B2] flex items-center justify-center">
        <div className="top flex flex-col lg:flex-row ml-5 gap-10 lg:gap-20">
          <div className="text-white pl-4 lg:pl-20 text-left">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-4xl sm:text-5xl    lg:text-6xl pl-4 lg:pl-16 pt-20 font-bold"
            >
              Our Happy
            </motion.h1>
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl pl-4 lg:pl-16 font-bold"
            >
              Clients
            </motion.h1>
            <motion.p
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="pl-4 lg:pl-16 mr-8   lg:mr-24 text-xs  pt-4 font-serif"
            >
              We partner with ambitious clients to build an unforgettable brand
              that resonates with their audience and leaves a lasting impact.
            </motion.p>

            <div className="">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="icons flex gap-20 pt-14 pl-16 "
              >
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" className="pl-4" />
                <img src={image4} alt="" className="pl-4" />
              </motion.div>

              <div className="logo flex  gap-12 pl-16 pt-4 text-sm ">
                <h1>Earnify</h1>
                <h1>Driving Awareness</h1>
                <h1 className="">Interior design</h1>
                <h1 className="">Exeligo Innovations</h1>
              </div>
            </div>
          </div>
          <img
            src={imageClient}
            alt=""
            className="h-auto w-64 sm:w-80 lg:w-96 mx-auto lg:mr-32 mt-8 lg:mt-0"
          />
        </div>
      </div>

      <div className="flex-shrink-0 snap-start w-full h-screen bg-[#4D869C] items-center justify-center">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="head text-black text-center "
        >
          <p className="text-lg text-black font-semibold pt-24">
            Reveal your thoughts
          </p>
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-5xl font-bold text-white"
          >
            Ready to start your
          </motion.h1>
          <motion.h1
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-5xl font-bold text-white"
          >
            project?
          </motion.h1>

          <div className="flex justify-center items-center relative">
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
              <text className="text-[4.9px] fill-current text-black">
                <textPath href="#circlePath" startOffset="0%">
                  | TripleRConsulting | TripleRConsulting | TripleRConsulting
                </textPath>
              </text>
            </svg>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="absolute text-center text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center"
            >
              Let's
              <br />
              Talk
            </button>
          </div>
        </motion.div>

        <div className="footer text-black">
          <div className="container mx-auto sm:flex flex  justify-between">
            <div className=" w-full sm:w-1/3 md:1/3 lg:1/3  hidden  sm:block ">
              <h6 className="text-lg pt-28  pl-6 font-semibold text-left">
                Explore more
              </h6>
              <ul className="list-none  text-sm pl-6 flex gap-2">
                <li>
                  <a href="/#/service" className="hover:text-gray-400">
                    Service
                  </a>
                </li>
                <li>
                  <a href="/#/aboutus" className="hover:text-gray-400">
                    AboutUs
                  </a>
                </li>
                <li>
                  <a href="/#/contact" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/#/privacy" className="hover:text-gray-400">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/#/terms" className="hover:text-gray-400">
                    Terms
                  </a>
                </li>
              </ul>
              <h1 className="text-left pl-6">
                © Triple R Consulting 2024, All rights reserved.
              </h1>
            </div>

            <div className="hidden sm:block">
              <svg
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="300.151px"
                height="200.15px"
                viewBox="0 0 388.151 388.15"
                style={{
                  enableBackground: "new 0 0 388.151 388.15",
                  marginLeft: "60px",
                  marginTop: "5px",
                }}
                xmlSpace="preserve"
                className={`svg-container ${isMoved ? "move-up" : ""}`} // Toggle class based on state
                onClick={handleTouch} // Handle click event
                {...props}
              >
                <g>
                  <g>
                    <path d="M294.442,388.15c1.393-4.576,2.918-9.344,3.938-11.8c24.241-58.511,21.491-120.33,20.417-140.134 c-0.745-13.367-2.054-24.655-9.518-33.615c-11.025-13.153-27.935-17.248-35.158-18.452c-4.588-11.529-11.602-19.11-20.867-22.584 c-3.621-1.36-7.572-2.048-11.715-2.048c-6.966,0-13.229,1.91-17.438,3.615c-5.566-10.104-12.994-16.369-22.098-18.651 c-2.498-0.633-5.143-0.952-7.854-0.952c-8.67,0-16.603,3.27-21.995,6.197c-1.402-9.334-6.29-84.8-9.185-126.176 C162.045,10.302,151.026,0,137.74,0h-0.018c-14.192,0-25.709,11.47-25.767,25.656c-0.435,89.7-2.765,178.297-3.312,191.718 c-8.713,3.963-23.89,9.253-30.643,18.41c-15.444,20.945-8.725,37.362-1.068,50.177c17.285,28.967,47.384,80.74,60.204,102.189 H294.442L294.442,388.15z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="contact w-full sm:w-1/3 md:w-1/4 lg:w-1/3  sm:text-center  pr-6">
              <h6 className="text-lg pt-28 font-semibold  text-right">
                Get in touch
              </h6>
              <h1 className="text-md text-right">
                Email
                <a
                  href="mailto:jyot2999@gmail.com"
                  className="hover:text-gray-400"
                >
                  : info@tripleRconsulting.net
                </a>
              </h1>
              <h1 className="text-md text-right">
                Phone:
                <a href="tel:+1234567890" className="hover:text-gray-400">
                  +91 7018324802
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
