import React, { useState } from "react";
import Loader from "./Loader";
// import videoSrc from "../../src/assets/blackNwhite.mp4";
import videoSrc from "../../src/assets/loaderblack.webm"
import image from "../../src/assets/business-5475661_1280.jpg";
import image1 from "../../src/assets/social-media-4140959_1280.jpg"
import image2 from "../../src/assets/content-marketing-4111003_1280.jpg";
import image3 from "../../src/assets/digital-7971754_1280.jpg";
import image4 from "../../src/assets/woman-1446557_1280.jpg";
import image5 from "../../src/assets/business-5475659_1280.jpg"

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
        <div className="flex text-white" >
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

            <main className="p-5 ml-[1200px]">
              <span className="cursor-pointer text-2xl " onClick={openMenu}>
                &#9776;
              </span>
            </main>
          </div>
      <div className="flex gap-10 ml-10 mr-10 bg-black text-white">
        <div className="img">
          <p className="pt-72 text-2xl font-bold">News & Event</p>
          <h1 className="text-6xl font-bold">INSIGHTS</h1>
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
      <div className="bg-yellow-400 h-96">

      </div>
      </div>
    </div>
  );
}

export default Blog;
