import React from "react";
import Loader from "./Loader";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "swiper/swiper-bundle.css";
import slideImage from "../../src/assets/network-4025614_1280-removebg-preview.png";
import slideImage1 from "../../src/assets/layoutdesigner_online_1-removebg-preview.png";
import slideImage2 from "../../src/assets/internet-6896_256-ezgif.com-gif-maker.gif";
import slideImage3 from "../../src/assets/letter-1174_256.gif";
import slideImage5 from  "../../src/assets/seo-12288_256-ezgif.com-gif-maker.gif";



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
        <div className="flex-shrink-0 snap-start w-full h-screen bg-white items-center justify-center">
      
      <div className="ml-36 mr-36">
          <Swiper
          modules={[Pagination ,Navigation,Scrollbar]}
          // scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true}}
            // direction="vertical"
            navigation
            
          
          >
            <SwiperSlide>
              <div className="slider flex pt-32  gap-10">
                <div className="pl-20 pt-16 text-black">
                  <p className="text-sm font-bold">WHAT WE DO </p>
                  <h4 className="font-bold text-4xl pl-96">01</h4>
                  <h1 className="font-bold text-4xl pt-5">DIGITAL-MARKETING</h1>
                  <p className=" w-[35vw] text-justify pt-3 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum consectetur debitis aspernatur?Lorem ipsum,Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Tempore
                    laudantium officia voluptas. dolor sit amet consectetur
                    adipisicing elit. Doloribus tempore totam fugit.
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
                  <p className="text-sm font-bold">WHAT WE DO </p>
                  <h4 className="font-bold text-4xl pl-96">02</h4>
                  <h1 className="font-bold pt-5 text-4xl">WEB DESIGNING</h1>
                  <p className=" w-[35vw] pt-3 text-justify text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum consectetur debitis aspernatur?Lorem ipsum,Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ab at molestiae
                    facilis. dolor sit amet consectetur adipisicing elit.
                    Doloribus tempore totam fugit.
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
                  <p className="text-sm font-bold">WHAT WE DO </p>
                  <h4 className="font-bold text-4xl pl-96">03</h4>
                  <h1 className="font-bold pt-5 text-4xl">SOCIAL MARKETING</h1>
                  <p className=" w-[35vw] pt-3 text-justify text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum consectetur debitis aspernatur?Lorem ipsum,Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ab at molestiae
                    facilis. dolor sit amet consectetur adipisicing elit.
                    Doloribus tempore totam fugit.
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
                  <p className="text-sm font-bold">WHAT WE DO </p>
                  <h4 className="font-bold text-4xl pl-96">04</h4>
                  <h1 className="font-bold pt-5 text-4xl">EMAIL MARKETING</h1>
                  <p className=" w-[35vw] pt-3 text-justify text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum consectetur debitis aspernatur?Lorem ipsum,Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ab at molestiae
                    facilis. dolor sit amet consectetur adipisicing elit.
                    Doloribus tempore totam fugit.
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
                  <p className="text-sm font-bold">WHAT WE DO </p>
                  <h4 className="font-bold text-4xl pl-96">05</h4>
                  <h1 className="font-bold pt-5 text-4xl">CONTENT MARKETING</h1>
                  <p className=" w-[35vw] pt-3 text-justify text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum consectetur debitis aspernatur?Lorem ipsum,Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ab at molestiae
                    facilis. dolor sit amet consectetur adipisicing elit.
                    Doloribus tempore totam fugit.
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
                  <p className="text-sm font-bold">WHAT WE DO </p>
                  <h4 className="font-bold text-4xl pl-96">06</h4>
                  <h1 className="font-bold pt-5 text-4xl">SEARCH ENGINE OPTIMIZATION
                  </h1>
                  <p className=" w-[35vw] pt-3 text-justify text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum consectetur debitis aspernatur?Lorem ipsum,Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ab at molestiae
                    facilis. dolor sit amet consectetur adipisicing elit.
                    Doloribus tempore totam fugit.
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
