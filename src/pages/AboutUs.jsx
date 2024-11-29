import React from "react";
import Loader from "./Loader"; // Ensure this path is correct for your project
import videoSrc from "../../src/assets/loaderblack.webm";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";
import aboutTriangle from "../../src/assets/triangle.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import aboutImage from "../../src/assets/Screenshot_2024-11-26_162124-removebg-preview.png";

function AboutUs(props) {
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
    <div>
      <Loader videoSrc={videoSrc} />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-hidden ">
        <div className="flex-shrink-0 snap-start w-full h-screen bg-[#EEF7FF]  items-center justify-center ">
          <div className="header">
            <div className="flex justify-between items-center pl-14 pr-20 px-9 py-9">
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
              <a
                className="text-3xl font-semibold hover:text-[#39FF14]"
                href="#"
              >
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

          <div className="top flex flex-col sm:flex-row sm:pl-12 md:pl-24 lg:pl-48 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
            <div className="text-black text-left pt-8  sm:pt-12 md:pt-16 lg:pt-16">
              <motion.h1
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold"
              >
                About Us
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="pt-2 w-full sm:w-80 md:w-96 lg:w-96 font-semibold text-lg sm:text-md md:text-lg font-serif"
              >
                Step inside the world of young, energetic and innovative
                marketing agency
              </motion.p>

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="pt-2 text-justify w-full sm:w-80 md:w-96 lg:w-96 text-sm font-serif"
              >
                We are Triple R Consulting. The innovative marketing agency. We
                believe in the power of innovation to enhance brands.
              </motion.p>

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="pt-2 text-justify w-full sm:w-80 md:w-96 lg:w-96 text-sm font-serif"
              >
                Founded in 2024, Triple R Consulting is a young and innovative
                marketing agency committed to delivering tailored solutions for
                businesses of all sizes. We aim to enhance our clients’ online
                presence, drive growth, and build lasting relationships. At
                Triple R Consulting, we believe in turning ideas into impactful
                campaigns that resonate with audiences and deliver measurable
                results.
              </motion.p>
            </div>

            <img
              src={aboutImage}
              alt=""
              className="h-64 sm:h-80 md:h-96 lg:h-96 w-full sm:w-80 md:w-96 lg:w-96 ml-0 sm:ml-4 md:ml-8 lg:ml-20 mt-4 sm:mt-6 md:mt-8 lg:mt-1"
            />
          </div>
          <div className="container flex mx-auto   space-x-24  ">
            <div className="text-left pl-20 ">
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-black text-xs w-96 pt-16 "
              >
                © Triple R Consulting 2024, All rights reserved.
              </motion.p>
            </div>

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
                className="absolute  text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center"
              >
                Let's
                <br />
                Talk
              </button>
            </div>

            <div className="text-right">
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-black w-96 text-xs pt-16"
              >
                Privacy Policy · Terms and conditions
              </motion.p>
            </div>
          </div>




          
        </div>






        <div className="flex-shrink-0 snap-start w-full h-screen bg-[#CDE8E5] items-center justify-center">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Left Section */}
            <div className="text-black text-left pt-36 pl-10 sm:pl-20 md:pl-24 lg:pl-40">
              <motion.h1
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold w-full lg:w-[50vw]"
              >
                Our
              </motion.h1>
              <motion.h1
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                Core Values.
              </motion.h1>
            </div>

            {/* Right Section - Swiper Slides */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              // navigation
            >
              <SwiperSlide>
                <div className="text-black pt-28">
                  <img
                    src={aboutTriangle}
                    alt=""
                    className="h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44"
                  />
                  <motion.h1
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-xl sm:text-2xl   font-bold text-[#39FF14]"
                  >
                    01 Innovation
                  </motion.h1>
                  <p className="w-72 sm:w-80 md:w-96 text-justify font-serif">
                    We stay ahead of the curve by embracing the latest trends,
                    tools, and techniques in digital marketing, ensuring our
                    clients always have a competitive edge.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-black text-left pt-32">
                  <img
                    src={aboutTriangle}
                    alt=""
                    className="h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44"
                  />
                  <motion.h1
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-xl sm:text-2xl font-bold text-[#39FF14]"
                  >
                    02 Integrity
                  </motion.h1>
                  <p className="w-72 sm:w-80 md:w-96 text-justify font-serif">
                    Transparency and honesty form the foundation of everything
                    we do. We believe in building trust through ethical
                    practices and clear communication.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-black text-left pt-32">
                  <img
                    src={aboutTriangle}
                    alt=""
                    className="h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44"
                  />
                  <motion.h1
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-xl sm:text-2xl font-bold text-[#39FF14]"
                  >
                    03 Collaboration
                  </motion.h1>
                  <p className="w-72 sm:w-80 md:w-96 text-justify font-serif">
                    Our success lies in working closely with clients to
                    understand their unique needs and creating strategies that
                    align with their goals.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="flex-shrink-0 snap-start w-full h-screen bg-[#7AB2B2] item-center justify-center">
          <div className="teams flex flex-col sm:flex-row">
            <div className="text-white text-left pt-12 sm:pt-52 pl-6 sm:pl-40">
              <motion.h1
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-4xl sm:text-6xl font-bold"
              >
                Our Team
              </motion.h1>
            </div>

            <div className="team text-white text-justify pl-6 sm:pl-40 pt-10 sm:pt-28 pr-6 sm:pr-20 font-serif">
              <h1 className="font-bold text-xl sm:text-2xl">
                Rishabh Bahree – Founder
              </h1>
              <p className="pt-5 text-sm sm:text-base  md:text-base">
                Rishabh brings a wealth of multi-domain expertise and energy to
                Triple R Consulting. With a deep understanding of the brands,
                industries, consumer behavior, digital marketing and a vision to
                help businesses thrive in the online world, he leads the company
                with determination and creativity. Rishabh’s innovative mindset
                and dedication to excellence set the tone for everything we do.
              </p>

              <h1 className="font-bold text-xl sm:text-2xl md:text-base pt-5">
                The R Team
              </h1>
              <p className="text-sm sm:text-base">
                At Triple R Consulting, our diverse team is our backbone. With
                experts from various domains such as FMCG industry, Packaging
                industry, Consulting, Academics, Website development, Social
                media marketing, Content development and Digital strategy, we
                bring a unique blend of industry knowledge and marketing
                expertise. Each team member is dedicated to delivering
                exceptional results, ensuring our clients receive solutions
                tailored to their specific needs.
              </p>

              <p className="pt-5 text-sm sm:text-base">
                By combining creativity, strategy, and technical expertise,
                we’re here to help businesses unlock their true potential. Let’s
                grow together.
              </p>

              <p className="pt-5 text-xs sm:text-md  pl-[60%] sm:pl-0 text-left font-bold">
                Email: rishabhbahree@gmail.com
              </p>
            </div>
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
              <div className=" w-full sm:w-1/3  hidden  sm:block ">
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
                      About Us
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
              <div className="contact w-full sm:w-1/3  sm:text-center  pr-6">
                <h6 className="text-lg pt-28 font-semibold  text-right">
                  Get in touch
                </h6>
                <h1 className="text-md text-right">
                  Email
                  <a
                    href="mailto:jyot2999@gmail.com"
                    className="hover:text-gray-400"
                  >
                    : rishabhbahree@gmail.com
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
    </div>
  );
}

export default AboutUs;
