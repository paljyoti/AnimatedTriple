import React, { useState } from "react";
import Loader from "./Loader";
// import videoSrc from "../../src/assets/loaderblack.webm";
import videoSrc from "../../src/assets/loaderblack.webm";
import image from "../../src/assets/business-5475661_1280.jpg";
import image1 from "../../src/assets/social-media-4140959_1280.jpg";
import image2 from "../../src/assets/content-marketing-4111003_1280.jpg";
import image3 from "../../src/assets/digital-7971754_1280.jpg";
import image4 from "../../src/assets/woman-1446557_1280.jpg";
import image5 from "../../src/assets/business-5475659_1280.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";
import { ImHome } from "react-icons/im";

function Blog(props) {
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
    <div className="">
      <Loader videoSrc={videoSrc} />

      <div className="bg-black">
        <div className="header">
          <div className="flex justify-between items-center pl-14 pr-16 px-5 py-5">
            <h2 className="text-3xl">
              <ImHome className="text-white" />
            </h2>

            <main>
              <span
                className="cursor-pointer text-2xl text-white"
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

        <div className="flex gap-10 text-white pr-10">
          <div className="img pl-10">
            <p className="pt-72 text-2xl font-bold">News & Event</p>
            <h1 className="text-6xl font-bold text-[#39FF14]">INSIGHTS</h1>
            <p>
              Insights, thoughts, industry trends, marketing tips, eDesign news,
              nerdy stuff, it's all here.
            </p>
            <p className="pt-10 text-3xl font-bold">TECHNOLOGY TRENDS</p>
            <img src={image} alt="" className="mt-5" />

            <p className="pt-32 text-3xl font-bold">TECHNOLOGY TRENDS</p>
            <img src={image1} alt="" className="mt-5 mb-10" />
          </div>
          <div className="img">
            <p className="pt-60 text-3xl font-bold">TECHNOLOGY TRENDS</p>
            <img src={image2} alt="" className="mt-5" />

            <p className="pt-32 text-3xl font-bold">TECHNOLOGY TRENDS</p>
            <img src={image4} alt="" className="mt-5" />
          </div>
          <div className="img">
            <p className="pt-28 text-3xl font-bold">TECHNOLOGY TRENDS</p>
            <img src={image3} alt="" className="mt-5" />

            <p className="pt-28 text-3xl font-bold">TECHNOLOGY TRENDS</p>
            <img src={image5} alt="" className="mt-5" />
          </div>
        </div>
      </div>

      <div className="footer bg-yellow-400">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="head text-black text-center"
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
            <button className="absolute text-center  text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center">
              Let's
              <br />
              Talk
            </button>
          </div>
        </motion.div>
        <div className="footer1 text-black">
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 ">
              <h6 className="text-lg pt-28 pl-6 font-semibold text-left">
                Explore more
              </h6>
              <ul className="list-none text-sm pl-6 flex gap-2">
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

export default Blog;
