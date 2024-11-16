import React from "react";
import Loader from "./Loader";
import videoSrc from "../../src/assets/loaderblack.webm";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";
import { useState } from "react";
import image1 from "../../src/assets/icons8-logo-50 (1).png";
import image2 from "../../src/assets/icons8-logo-50 (2).png";
import image3 from "../../src/assets/icons8-logo-50.png";
import image4 from "../../src/assets/icons8-logo-50 (7).png";
import image8 from "../../src/assets/icons8-logo-50 (5).png";
import image6 from "../../src/assets/icons8-logo-50 (6).png";
import image7 from "../../src/assets/icons8-logo-50 (4).png";
import image5 from "../../src/assets/icons8-logo-50 (8).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import slideImage from "../../src/assets/network-4025614_1280-removebg-preview.png";
import slideImage1 from "../../src/assets/layoutdesigner_online_1-removebg-preview.png";
import slideImage2 from "../../src/assets/internet-6896_256-ezgif.com-gif-maker.gif";
import slideImage3 from "../../src/assets/letter-1174_256.gif";
import slideImage5 from "../../src/assets/seo-12288_256-ezgif.com-gif-maker.gif";
import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";

function Service(props) {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Loader videoSrc={videoSrc} />

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-hidden">
        <div className="flex-shrink-0 snap-start w-full h-screen bg-[#EEF7FF] items-center justify-center">
          <div className="header">
            <div className="flex justify-between items-center pl-14 pr-20 px-9 py-9">
              <h2 
               onClick={() => navigate('/')}
              className="text-3xl">
                <ImHome className="fixed hover:text-[#39FF14]" />
              </h2>

              <main>
                <span className="cursor-pointer text-2xl fixed font-bold" onClick={openMenu}>
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
                  Email : rishabhbharee@gmail.com
                </h1>
                <h1 className="text-white text-sm">Ph : +91 1234567890</h1>
              </div>
            </div>
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

            <p className="text-sm pt-5 font-serif">
              We help brands to grow and better connect with their prospective
              clients by
            </p>
            <p className="text-sm font-serif">
              telling their stories clearly with effective branding.
            </p>
          </motion.div>    

<div className="container flex mx-auto   space-x-24  ">
            <div className="text-left pl-20 ">
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-black text-xs w-96 pt-44 "
              >
                © Triple R Consulting 2024, All rights reserved.
              </motion.p>
            </div>

            <div className="flex justify-center items-center relative pt-28">
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
              <button className="absolute  text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center">
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
                className="text-black w-96 text-xs pt-44"
              >
                Privacy Policy · Terms and conditions
              </motion.p>
            </div>
          </div>

        </div>
        <div className="flex-shrink-0 snap-start w-full h-screen bg-[#CDE8E5] items-center justify-center">
          <div className="ml-36 mr-36">
            <Swiper
              modules={[Pagination, Navigation, Scrollbar]}
              // scrollbar={{ draggable: true }}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{ clickable: true }}
              // direction="vertical"
              navigation
            >
              <SwiperSlide>
                <div className="slider flex pt-32  gap-10">
                  <div className="pl-20 pt-16 text-black">
                    <p className="text-sm font-bold text-[#39FF14]">
                      WHAT WE DO{" "}
                    </p>
                    <h4 className="font-bold text-4xl pl-96">01</h4>
                    <h1 className="font-bold text-4xl pt-5">
                      DIGITAL-MARKETING
                    </h1>
                    <p className=" w-[35vw] text-justify pt-3 text-sm font-serif">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum consectetur debitis aspernatur?Lorem ipsum,Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore laudantium officia voluptas. dolor sit amet
                      consectetur adipisicing elit. Doloribus tempore totam
                      fugit.
                    </p>
                  </div>
                  <div>
                    <img src={slideImage} alt="" className="h-96 pr-10" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider flex pt-32  gap-10">
                  <div className="pl-20 pt-16 text-black">
                    <p className="text-sm font-bold text-[#39FF14]">
                      WHAT WE DO{" "}
                    </p>
                    <h4 className="font-bold text-4xl pl-96">02</h4>
                    <h1 className="font-bold pt-5 text-4xl">WEB DESIGNING</h1>
                    <p className=" w-[35vw] pt-3 text-justify text-sm font-serif">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum consectetur debitis aspernatur?Lorem ipsum,Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Ab at
                      molestiae facilis. dolor sit amet consectetur adipisicing
                      elit. Doloribus tempore totam fugit.
                    </p>
                  </div>
                  <div>
                    <img src={slideImage1} alt="" className="h-96 pr-10" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider flex pt-32  gap-10">
                  <div className="pl-20 pt-16 text-black">
                    <p className="text-sm font-bold text-[#39FF14]">
                      WHAT WE DO{" "}
                    </p>
                    <h4 className="font-bold text-4xl pl-96">03</h4>
                    <h1 className="font-bold pt-5 text-4xl">
                      SOCIAL MARKETING
                    </h1>
                    <p className=" w-[35vw] pt-3 text-justify text-sm font-serif">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum consectetur debitis aspernatur?Lorem ipsum,Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Ab at
                      molestiae facilis. dolor sit amet consectetur adipisicing
                      elit. Doloribus tempore totam fugit.
                    </p>
                  </div>
                  <div>
                    <img src={slideImage2} alt="" className="h-96 pr-10" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider flex pt-32  gap-10">
                  <div className="pl-20 pt-16 text-black">
                    <p className="text-sm font-bold text-[#39FF14]">
                      WHAT WE DO{" "}
                    </p>
                    <h4 className="font-bold text-4xl pl-96">04</h4>
                    <h1 className="font-bold pt-5 text-4xl">EMAIL MARKETING</h1>
                    <p className=" w-[35vw] pt-3 text-justify text-sm font-serif">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum consectetur debitis aspernatur?Lorem ipsum,Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Ab at
                      molestiae facilis. dolor sit amet consectetur adipisicing
                      elit. Doloribus tempore totam fugit.
                    </p>
                  </div>
                  <div>
                    <img src={slideImage3} alt="" className="pr-10 w-96" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider flex pt-32  gap-10">
                  <div className="pl-20 pt-16 text-black">
                    <p className="text-sm font-bold text-[#39FF14]">
                      WHAT WE DO{" "}
                    </p>
                    <h4 className="font-bold text-4xl pl-96">05</h4>
                    <h1 className="font-bold pt-5 text-4xl">
                      CONTENT MARKETING
                    </h1>
                    <p className=" w-[35vw] pt-3 text-justify text-sm font-serif">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum consectetur debitis aspernatur?Lorem ipsum,Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Ab at
                      molestiae facilis. dolor sit amet consectetur adipisicing
                      elit. Doloribus tempore totam fugit.
                    </p>
                  </div>
                  <div>
                    {/* <img src={slideImage1} alt="" className="h-96 pr-10" /> */}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider flex pt-32  gap-10">
                  <div className="pl-20 pt-16 text-black">
                    <p className="text-sm font-bold text-[#39FF14]">
                      WHAT WE DO{" "}
                    </p>
                    <h4 className="font-bold text-4xl pl-96">06</h4>
                    <h1 className="font-bold pt-5 text-4xl">
                      SEARCH ENGINE OPTIMIZATION
                    </h1>
                    <p className=" w-[35vw] pt-3 text-justify text-sm font-serif">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum consectetur debitis aspernatur?Lorem ipsum,Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Ab at
                      molestiae facilis. dolor sit amet consectetur adipisicing
                      elit. Doloribus tempore totam fugit.
                    </p>
                  </div>
                  <div>
                    <img src={slideImage5} alt="" className="pr-10 w-96" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="flex-shrink-0 snap-start w-full h-screen bg-[#7AB2B2] items-center justify-center">
          <div className="flex gap-20 text-white">
            <div className="head">
              <p className="pt-36 pl-52 text-sm font-bold  ">OUR_CLIENTS</p>
            </div>
            <div className="headings">
              <h1 className="pt-36 font-bold text-6xl">
                We don’t work for you, but with you.
              </h1>
              <p className="text-sm pt-5 pr-20 font-serif">
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

        <div className="flex-shrink-0 snap-start w-full h-screen bg-[#4D869C] items-center justify-center">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="head text-black text-center "
          >
            <p className="text-lg pt-24">Reveal your thoughts</p>
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
              <button className="absolute onClick={()=>{navigate('/contact')}} text-center text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center">
                Let's
                <br />
                Talk
              </button>
            </div>
          </motion.div>

          <div className="footer text-black">
            <div className="container mx-auto flex flex-wrap justify-between">
              <div className=" w-full sm:w-1/3 ">
                <h6 className="text-lg pt-28  pl-6 font-semibold text-left">
                  Explore more
                </h6>
                <ul className="list-none  text-sm pl-6 flex gap-2">
                  <li>
                    <a href="#/service" className="hover:text-gray-400">
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
                    <a href="#" className="hover:text-gray-400">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Terms
                    </a>
                  </li>
                </ul>
                <h1 className="text-left pl-6">
                  © Triple R Consulting 2024, All rights reserved.
                </h1>
              </div>

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

              <div className="contact w-full sm:w-1/3  pr-6">
                <h6 className="text-lg pt-28 font-semibold  text-right">
                  Get in touch
                </h6>
                <h1 className="text-md text-right">
                  Email:
                  <a
                    href="mailto:jyot2999@gmail.com"
                    className="hover:text-gray-400"
                  >
                    rishabhbahree@gmail.com
                  </a>
                </h1>
                <h1 className="text-md text-right">
                  Phone:
                  <a href="tel:+1234567890" className="hover:text-gray-400">
                    123-456-7890
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

export default Service;
