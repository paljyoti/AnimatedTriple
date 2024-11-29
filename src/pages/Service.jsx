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
import slideImage from "../../src/assets/19199219-removebg-preview.png";
import slideImage1 from "../../src/assets/19362653-removebg-preview.png";
import slideImage2 from "../../src/assets/social-media-936543_1280-removebg-preview.png";
import slideImage3 from "../../src/assets/email-3249062_1280-removebg-preview.png";
import slideImage5 from "../../src/assets/sk12p-removebg-preview.png";
import slideImage4 from "../../src/assets/content-3679757_1280-removebg-preview.png";
import slidePay from "../../src/assets/Jyoti_12-removebg-preview.png";
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
              <h2 onClick={() => navigate("/")} className="text-3xl">
                <ImHome className="fixed hover:text-[#39FF14]" />
                <h1 className=" fixed font-bold text-xs pl-8">
                  Triple
                  <span className="text-2xl font-bold text-[#39FF14]">
                    R
                  </span>{" "}
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

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="head text-black text-center "
          >
            <p className="text-md font-bold pt-20 ">WHAT WE DO</p>
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
            <p className="text-sm font-serif pt-2">
              Our services include Web Designing, Digital Marketing, Content
              Marketing, Email Marketing, Social Media, SEO, PPC.
            </p>
            <p className="text-sm font-serif pt-20">
              Scroll down to know more...
            </p>
          </motion.div>

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

            <div className="flex justify-center items-center relative ">
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
          <div className="ml-8 mr-8 sm:ml-16 sm:mr-16 lg:ml-36 lg:mr-36">
            <Swiper
              modules={[Pagination, Navigation, Scrollbar]}
              spaceBetween={20} // Reduce space between slides for smaller screens
              slidesPerView={1} // 1 slide per view on small screens, adjust for larger screens below
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{ clickable: true }}
              navigation
            >
              <SwiperSlide>
                <div className="slider flex flex-col sm:flex-row pt-32 gap-6 sm:gap-10">
                  <div className="pl-8 sm:pl-20 pt-16 text-black">
                    <p className="text-xl font-bold text-[#39FF14]">
                      WHAT WE DO
                    </p>
                    <h4 className="font-bold text-3xl sm:text-4xl pl-96">01</h4>
                    <h1 className="font-bold text-2xl sm:text-4xl pt-5">
                      DIGITAL-MARKETING
                    </h1>
                    <p className="w-full sm:w-[35vw] text-justify pt-3 text-sm sm:text-base font-serif">
                      In today’s fast-paced digital landscape, standing out
                      requires more than just an online presence—it demands a
                      strategic approach to marketing.
                    </p>
                    <button
                      onClick={() => navigate("/digitalMarketing")}
                      className="bg-[#FF0000] mt-10 text-white py-2 px-4 rounded hover:bg-[#39FF14] transition"
                    >
                      Read More
                    </button>
                  </div>
                  <div>
                    <img
                      src={slideImage}
                      alt=""
                      className="w-full sm:h-96 pr-10"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider flex flex-col sm:flex-row pt-32 gap-6 sm:gap-10">
                  <div className="pl-8 sm:pl-20 pt-16 text-black">
                    <p className="text-xl font-bold text-[#39FF14]">
                      WHAT WE DO
                    </p>
                    <h4 className="font-bold text-3xl sm:text-4xl pl-96">02</h4>
                    <h1 className="font-bold text-2xl sm:text-4xl pt-5">
                      WEB DESIGNING
                    </h1>
                    <p className="w-full sm:w-[35vw] text-justify pt-3 text-sm sm:text-base font-serif">
                      At Triple R Consulting, we believe that your website is
                      more than just an online presence—it’s the cornerstone of
                      your digital identity.
                    </p>
                    <button
                      onClick={() => navigate("/webDesign")}
                      className="bg-[#8A2BE2] mt-10 text-white py-2 px-4 rounded hover:bg-[#39FF14] transition"
                    >
                      Read More
                    </button>
                  </div>
                  <div>
                    <img
                      src={slideImage1}
                      alt=""
                      className="w-full sm:h-80 pt-4 pr-10"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider flex flex-col sm:flex-row pt-32 gap-6 sm:gap-10">
                  <div className="pl-8 sm:pl-20 pt-16 text-black">
                    <p className="text-xl font-bold text-[#39FF14]">
                      WHAT WE DO
                    </p>
                    <h4 className="font-bold text-3xl sm:text-4xl pl-96">03</h4>
                    <h1 className="font-bold text-2xl sm:text-4xl pt-5">
                      SOCIAL MEDIA
                    </h1>
                    <p className="w-full sm:w-[35vw] text-justify pt-3 text-sm sm:text-base font-serif">
                      Social media is where conversations happen, trends are
                      born, and brands make their mark.
                    </p>
                    <button
                      onClick={() => navigate("/socialMedia")}
                      className="bg-[#0000FF] mt-10 text-white py-2 px-4 rounded hover:bg-[#39FF14] transition"
                    >
                      Read More
                    </button>
                  </div>
                  <div>
                    <img
                      src={slideImage2}
                      alt=""
                      className="w-full sm:h-96 pr-10"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider flex flex-col sm:flex-row pt-32 gap-6 sm:gap-10">
                  <div className="pl-8 sm:pl-20 pt-16 text-black">
                    <p className="text-xl font-bold text-[#39FF14]">
                      WHAT WE DO
                    </p>
                    <h4 className="font-bold text-3xl sm:text-4xl pl-96">04</h4>
                    <h1 className="font-bold text-2xl sm:text-4xl pt-5">
                      EMAIL MARKETING
                    </h1>
                    <p className="w-full sm:w-[35vw] text-justify pt-3 text-sm sm:text-base font-serif">
                      Email marketing remains one of the most effective ways to
                      connect with your audience and drive results.
                    </p>
                    <button
                      onClick={() => navigate("/emailMarketing")}
                      className="bg-[#4B0082] mt-10 text-white py-2 px-4 rounded hover:bg-[#39FF14] transition"
                    >
                      Read More
                    </button>
                  </div>
                  <div>
                    <img
                      src={slideImage3}
                      alt=""
                      className="w-full sm:h-96 pr-10"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider flex flex-col sm:flex-row pt-32 gap-6 sm:gap-10">
                  <div className="pl-8 sm:pl-20 pt-16 text-black">
                    <p className="text-xl font-bold text-[#39FF14]">
                      WHAT WE DO
                    </p>
                    <h4 className="font-bold text-3xl sm:text-4xl pl-96">05</h4>
                    <h1 className="font-bold text-2xl sm:text-4xl pt-5">
                      CONTENT MARKETING
                    </h1>
                    <p className="w-full sm:w-[35vw] text-justify pt-3 text-sm sm:text-base font-serif">
                      In a world where content is king, delivering the right
                      message at the right time can set your brand apart.
                    </p>
                    <button
                      onClick={() => navigate("/contentMarketing")}
                      className="bg-[#FFA500] mt-10 text-white py-2 px-4 rounded hover:bg-[#39FF14] transition"
                    >
                      Read More
                    </button>
                  </div>
                  <div>
                    <img
                      src={slideImage4}
                      alt=""
                      className="w-full sm:h-96 pr-10"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider flex flex-col sm:flex-row pt-32 gap-6 sm:gap-10">
                  <div className="pl-8 sm:pl-20 pt-16 text-black">
                    <p className="text-xl font-bold text-[#39FF14]">
                      WHAT WE DO
                    </p>
                    <h4 className="font-bold text-3xl sm:text-4xl pl-96">06</h4>
                    <h1 className="font-bold text-2xl sm:text-4xl pt-5">
                      SEARCH ENGINE OPTIMIZATION
                    </h1>
                    <p className="w-full sm:w-[35vw] text-justify pt-3 text-sm sm:text-base font-serif">
                      If your business isn’t visible online, it’s missing out.
                      We specialize in SEO strategies to help your website rank
                      higher.
                    </p>
                    <button
                      onClick={() => navigate("/seo")}
                      className="bg-[#FFD700] mt-10 text-white py-2 px-4 rounded hover:bg-[#39FF14] transition"
                    >
                      Read More
                    </button>
                  </div>
                  <div>
                    <img
                      src={slideImage5}
                      alt=""
                      className="w-full sm:h-96 pr-10"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider flex flex-col sm:flex-row pt-32 gap-6 sm:gap-10">
                  <div className="pl-8 sm:pl-20 pt-16 text-black">
                    <p className="text-xl font-bold text-[#39FF14]">
                      WHAT WE DO
                    </p>
                    <h4 className="font-bold text-3xl sm:text-4xl pl-96">07</h4>
                    <h1 className="font-bold text-2xl sm:text-4xl pt-5">
                      Pay Per Click
                    </h1>
                    <p className="w-full sm:w-[35vw] text-justify pt-3 text-sm sm:text-base font-serif">
                      PPC offers a quick way to drive targeted traffic to your
                      website. We create data-driven campaigns for measurable
                      results.
                    </p>
                    <button
                      onClick={() => navigate("/ppc")}
                      className="bg-[#008000] mt-10 text-white py-2 px-4 rounded hover:bg-[#39FF14] transition"
                    >
                      Read More
                    </button>
                  </div>
                  <div>
                    <img
                      src={slidePay}
                      alt=""
                      className="w-full sm:h-96 pr-10"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="flex-shrink-0 snap-start w-full h-screen bg-[#7AB2B2] items-center justify-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 text-white">
            <div className="head">
              <p className="pt-36 pl-8 md:pl-48 text-sm font-bold">
                OUR CLIENTS
              </p>
            </div>
            <div className="headings pl-8 md:pl-28 pr-8 md:pr-20">
              <h1 className="pt-36 font-bold text-4xl md:text-6xl">
                We don’t work for you, but with you.
              </h1>
              <p className="text-sm pt-5 md:pt-5 pr-8 md:pr-20 font-serif">
                We partner with ambitious clients to build an unforgettable
                brand that resonates with their audience and leaves a lasting
                impact.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className="icons flex flex-wrap  justify-center sm:justify-start gap-8 sm:gap-16 md:gap-36 pt-14 pl-8 sm:pl-8 md:pl-24 lg:pl-96"
          >
            <img
              src={image1}
              alt=""
              className="ml-12 mb-4 sm:mb-0 sm:pl-6 md:pl-11 lg:pl-0"
            />
            <img
              src={image2}
              alt=""
              className="mb-4 sm:mb-0 sm:pl-6 md:pl-11 lg:pl-0"
            />
            <img
              src={image3}
              alt=""
              className="mb-4 sm:mb-0 sm:pl-6 md:pl-11 lg:pl-0"
            />
            <img
              src={image4}
              alt=""
              className="mb-4 sm:mb-0 sm:pl-6 md:pl-11 lg:pl-0"
            />
          </motion.div>
          <div className="logo flex flex-col sm:flex-row justify-center sm:justify-start gap-2 sm:gap-4 lg:gap-8  sm:pl-16 md:pl-24 lg:pl-32 pt-4 text-white">
            <h1 className="ml-60 sm:pl-4 md:pl-8 lg:pl-12">Interior design</h1>
            <h1 className="pl-0 sm:pl-4 md:pl-8 lg:pl-12">Driving Awareness</h1>
            <h1 className="ml-4 sm:pl-4 md:pl-8 lg:pl-12">Earnify</h1>
            <h1 className="ml-3 sm:pl-4 md:pl-8 lg:pl-12">
              Exeligo Innovations
            </h1>
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
              <div className=" w-full sm:w-1/3 md:w-1/3  hidden  sm:block ">
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

export default Service;
