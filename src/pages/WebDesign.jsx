import React from "react";
import imageWeb from "../../src/assets/internet-4463031_1280.jpg";
import Loader from "./Loader";
import videoSrc from "../../src/assets/loaderblack.webm";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";
import { useState } from "react";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function WebDesign(props) {
  const navigate = useNavigate();
  const [isMoved, setIsMoved] = useState(false);

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
    <div className="bg-[#EEF7FF]">
      <Loader videoSrc={videoSrc} />

      <div
        onClick={() => {
          navigate("/");
        }}
        className="header"
      >
        <div className="flex justify-between items-center pl-14 pr-16 px-5 py-5">
          <h2 className="text-3xl">
            <ImHome className="hover:text-[#39FF14] fixed " />
          </h2>

          <main>
            <span
              className="cursor-pointer text-2xl font-bold fixed"
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
            <h1 className="text-white text-sm">Ph : +91 7018324802</h1>
          </div>
        </div>
      </div>

      <div className="top">

      <div className="top pt-16 flex pb-10 pl-28 pr-28 gap-20  ">
          <h6 className="font-bold text-3xl pl-40 pt-10 font-serif text-[#39FF14]">
            Web Design Services
          </h6>
          <h1 className="font-bold text-lg pt-4  pl-40 md:text-2xl text-justify">
            At Triple R Consulting, we believe that your website is more than
            just an online presence—it’s the cornerstone of your digital
            identity. A well-designed website can elevate your brand, engage
            your audience, and drive business growth.
          </h1>
        </div>
      </div>
        
      <div className="px-5 md:px-28 bg-[#CDE8E5]">
        {/* Added responsive padding */}
        

        <div className="wbDesign flex  text-justify gap-10 ">
          <div className="flex justify-center gap-32 pl-5 mt-10">
            <div className="group w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            
              <div className="p-4">
                <h3 className="text-xl font-semibold">Tailored Designs:</h3>
                <p className="text-gray-600 mt-2">
                  We believe every business has its own identity,and your
                  website should reflect that uniqueness.Our team works closely
                  with you to craft custom designs that not only align with your
                  brand’s personality but we ensure your website stands out and
                  communicates your message effectively.
                </p>
              </div>
            </div>

           
            <div className="group w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  User-Centric Approach:
                </h3>
                <p className="text-gray-600 mt-2">
                  Your website's success depends on how well it serves its
                  visitors. We focus on creating an intuitive and user-friendly
                  experience that makes navi- gation seamless and enjoyable. Our
                  designs are responsive, meaning they look and function
                  flawlessly on any device, ensuring your users have a
                  consistent experience. 
                </p>
              </div>
            </div>

           
            <div className="group w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
             
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  Edge Technology:
                </h3>
                <p className="text-gray-600 mt-2">
                  We utilize the latest advancements in web techn- ologies to
                  deliver websites that are not only visually appealing but also
                  fast, secure, and future-proof. By incorporating modern design
                  practices and tools, we ensure your site is optimized for
                  performance, scalability.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="para  font-serif w-[65%] ">
            <h4 className="pt-5 font-semibold text-2xl md:text-3xl text-[#39FF14]">
              Why Choose Our Web Design Services?
            </h4>
            <ul>
              <li>
                1. Tailored Designs: Every business is unique, and so should be
                your website. We craft custom designs that reflect your brand’s
                personality and meet your specific needs.
              </li>
              <li>
                2. User-Centric Approach: We prioritize your users’ experience,
                ensuring your website is intuitive, responsive, and easy to
                navigate.
              </li>
              <li>
                3. Cutting-Edge Technology: Leveraging the latest web
                technologies, we deliver fast, secure, and future-proof
                websites.
              </li>
              <li>
                4. SEO-Optimized: Our designs are optimized to enhance
                visibility and improve your rankings on search engines.
              </li>
            </ul>
          </div> */}
        </div>
        <div className="process font-serif text-justify ">
          <h4 className="pt-5 font-semibold text-2xl md:text-3xl text-[#39FF14]">
            Our Web Design Process
          </h4>
          <p>
            We begin with Discovery & Planning, where we focus on understanding
            your goals, target audience, and competitors. Next, in the Design &
            Development phase, our team of experts brings your vision to life
            with creativity and precision. During Testing & Optimization, we
            rigorously test your website to ensure flawless performance across
            all devices. Finally, in the Launch & Support stage, once your
            website is live, we provide ongoing support to ensure it continues
            to run smoothly.
          </p>
          {/* <ul className="pt-9">
              <li>
                1. Discovery & Planning: We begin by understanding your goals,
                target audience, and competitors.
              </li>
              <li>
                2. Design & Development: Our team of experts brings your vision
                to life with creativity and precision.
              </li>
              <li>
                3. Testing & Optimization: We rigorously test your website to
                ensure flawless performance across devices.
              </li>
              <li>
                4. Launch & Support: Once live, we provide ongoing support to
                keep your website running smoothly.
              </li>
            </ul> */}
        </div>

        <div className="presence font-serif">
          <h6 className="pt-5 font-semibold text-2xl md:text-3xl text-[#39FF14]">
            Transform Your Online Presence
          </h6>
          <p className="text-justify">
            Whether you’re a startup looking to establish your brand or an
            established business aiming to revamp your digital presence, Triple
            R Consulting is here to help. Let’s create a website that captivates
            your audience and achieves your business goals.
          </p>
          <h6 className="pt-5 font-semibold text-2xl md:text-3xl text-[#39FF14]">
            Ready to get started?
          </h6>
          <p className="pb-10">
            Contact us today to discuss your web design needs and take the first
            step towards a stronger online presence.
          </p>
        </div>
      </div>

      <div className="footer bg-[#4D869C]">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="head text-black text-center"
        >
          <p className="text-lg font-semibold  pt-24">Reveal your thoughts</p>
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
            <button className="absolute text-center text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center">
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
                  <a href="#" className="hover:text-gray-400">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
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
  );
}

export default WebDesign;
