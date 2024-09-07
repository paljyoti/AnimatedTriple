import React from "react";
import { useState } from "react";
import "../../src/css/footer.css";
// import image2 from "../../src/assets/pexels-kevin-malik-9017408-removebg-preview.png"

function Footer(props) {

  const [isMoved, setIsMoved] = useState(false);

  // Function to toggle the movement class
  const handleTouch = () => {
    setIsMoved(!isMoved);
  };


  return (
    <div className="">
      <div className="head text-black text-center p-5 bg-[#FFD700]  ">
        <p className="text-lg mt-28">Reveal your thoughts</p>
        <h1 className="text-5xl font-bold">Ready to start your</h1>
        <h1 className="text-5xl font-bold">project?</h1>
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
          <button className="absolute  text-center  text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center">
            Let's
            <br />
            Talk
          </button>
        </div>
      </div>

      <div className="footer text-black py-8 pl-12 px-4 bg-[#FFD700]">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="sec w-full sm:w-1/3 ">
            <h6 className="text-lg font-semibold mb-4 text-left">
              Explore more
            </h6>
            <ul className="list-none text-sm flex gap-2">
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

            <h1 className="text-left">
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
        marginLeft: "25px",
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
          {/* <div className="img mb-20">
            <img src={image2} alt="" className="h-48 w-48" />
          </div> */}

          <div className="contact w-full sm:w-1/3  pr-6">
            <h6 className="text-lg font-semibold pb-4 text-right">
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
  );
}

export default Footer;
