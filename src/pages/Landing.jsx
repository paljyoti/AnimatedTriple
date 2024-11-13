import React, { useRef, useState } from "react";
import imageSection from "../../src/assets/window-4478126_1280 (1).jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../src/Varients";
import "../../src/css/landing.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gif from "../../src/assets/twofingergif.gif";
import imageClient from "../../src/assets/greenery.gif";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ImHome } from "react-icons/im";

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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const items = [
    { id: 1, title: `Exeligo - Innovation - triple` },
    { id: 2, title: " Amazone - Flipkart " },
    { id: 3, title: "TripleR - mayabytes - Triple" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth overflow-hidden">
      <div className="flex-shrink-0 snap-start w-full h-screen bg-white  items-center justify-center ">
        <div className="header ">
          <div className=" flex  justify-between items-center pl-14 pr-9 px-10 py-9">
            <h2 className="text-3xl">
              <ImHome className="fixed" />
            </h2>

            <main>
              <span
                className="cursor-pointer text-2xl fixed"
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
                Email : rishabhbharee@gmail.com
              </h1>
              <h1 className="text-white text-sm">Ph : +91 1234567890</h1>
            </div>
          </div>
        </div>

        <div className="top flex pl-48 gap-20">
          <div className=" bg-white text-black text-left">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-6xl font-bold "
            >
              Triple <span className="text-8xl pt-8 text-[#39FF14]">R</span>
            </motion.h1>
            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-6xl font-bold"
            >
              Consulting
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="pt-6 w-96 text-sm font-serif"
            >
              Soar to New Heights with Our Sparkling Ideas, Holistic Branding
              Concepts, and Exquisite Handcrafted Designs. We Partner with
              Brands to Craft Unforgettable Digital Experiences!
            </motion.p>
          </div>
          <img src={gif} alt="" className="w-[24vw] h-auto ml-24" />
        </div>
        <div className="container flex mx-auto pt-2 space-x-24 ">
          <div className="text-left pl-16">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black text-xs w-96 pt-16"
            >
              Crafted with passion and dedication, our creative agency in
              Gurugram, Haryana, delivers innovative solutions to bring your
              brand's vision to life.
            </motion.p>
          </div>

          <div className="flex justify-center items-center  relative">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-rotate-svg w-44 h-44  "
            >
              <path
                id="circlePvath"
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
              className="absolute text-sm bg-black text-white w-12  h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center"
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
              Blending creativity with practical solutions, we connect people to
              cutting-edge technology in inspiring new ways.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 snap-start w-full h-screen bg-blue-400 flex items-center justify-center">
        <div className="">
          <div className="top flex pl-20 gap-20">
            <div className="flex ">
              <img src={imageSection} alt="" className="w-96 h-96   " />
            </div>
            <div>
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-6xl pt-28 font-bold text-white"
              >
                Strategic
              </motion.h1>
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-6xl font-bold text-white"
              >
                branding that
              </motion.h1>
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-6xl font-bold text-white"
              >
                helpstand out!
              </motion.h1>
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="pt-4 w-96 pl-20 text-sm text-white"
              >
                You take on the business burden. In the meantime, we will help
                your business grow with eye-catching website designs, which are
                second to none!
              </motion.p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-red-500  mt-10 ml-20 text-white py-2 px-4 rounded hover:bg-red-700 transition"
              >
                view case
              </button>
            </div>

            <nav className="heading pt-16 text-white text-sm">
              <ul className="pl-10 justify-items-end ">
                <li className="hover:text-[#39FF14]">
                  <a href="/#/webDesign" className="text-sm text-right">
                    WebDesign <span className="text-5xl">.</span>
                  </a>
                </li>
                <li className="hover:text-[#39FF14]">
                  <a href="/#/digitalMarketing" className="text-sm text-right">
                    DigitalMarketing <span className="text-5xl">.</span>
                  </a>
                </li>
                <li className="hover:text-[#39FF14]">
                  <a href="/#/socialMedia" classname="text-sm text-right">
                    SocialMedia <span className="text-5xl">.</span>
                  </a>
                </li>
                <li className="hover:text-[#39FF14]">
                  <a href="/#/emailMarketing" className="text-sm  text-right">
                    EmailMarketing <span className="text-5xl">.</span>
                  </a>
                </li>
                <li className="hover:text-[#39FF14]">
                  <a href="/#/contentMarketing" className="text-sm text-right">
                    ContentMarketing <span className="text-5xl">.</span>
                  </a>
                </li>
                <li className="hover:text-[#39FF14]">
                  <a href="/#/seo" className="text-sm text-right">
                    SEO <span className="text-5xl">.</span>
                  </a>
                </li>
                <li className="hover:text-[#39FF14]">
                  <a href="/#/ppc" classname="text-sm text-right">
                    PPC <span className="text-5xl">.</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 snap-start w-full h-screen bg-green-400 flex items-center justify-center">
        <div className="top flex ml-5 gap-20">
          <div className="text-white pl-20 text-left">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-6xl pl-16 pt-20 font-bold"
            >
              Our Happy
            </motion.h1>
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-6xl  pl-16 font-bold"
            >
              Clients
            </motion.h1>
            <motion.p
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  pl-44 ml-16 text-sm pt-4 "
            >
              We help our valuable clients build a remarkable brand that becomes
              the talk of the town.
            </motion.p>

            <div className="slider flex pl-40  pt-2 ">
              <Slider {...settings}></Slider>
            </div>

            <div className="relative ml-20 mt-10 w-[35vw]">
              <div
                ref={carouselRef}
                className="flex overflow-x-hidden"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex-shrink-0 w-full max-w-md transition-transform duration-300 ease-in-out ${
                      index === currentIndex ? "scale-100" : "scale-90"
                    }`}
                  >
                    <h1 className="text-center mt-2 text-4xl  font-semibold">
                      {item.title}
                    </h1>
                  </div>
                ))}
              </div>
              <div></div>

              {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={prevSlide} className="bg-gray-600 text-white p-2 rounded-full">
          Prev
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={nextSlide} className="bg-gray-600 text-white p-2 rounded-full">
          Next
        </button>
      </div> */}
            </div>
          </div>
          <img src={imageClient} alt="" className="h-auto mr-32 w-96" />
        </div>
      </div>
      <div className="flex-shrink-0 snap-start w-full h-screen bg-yellow-400 items-center justify-center">
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
            className="text-5xl font-bold"
          >
            Ready to start your
          </motion.h1>
          <motion.h1
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-5xl font-bold"
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
              <text className="text-[7px] fill-current text-black">
                <textPath href="#circlePath" startOffset="0%">
                  | Triple R Consulting | Triple R Consulting.
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
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className=" w-full sm:w-1/3 ">
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
                © Triple R Consulting 2024, All rights reserved.&{" "}
                <span className="">devloped by jyoti pal.</span>
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
                marginTop: "16px",
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
  );
}

export default Landing;
