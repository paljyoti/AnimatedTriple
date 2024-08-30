import React from "react";
import image2 from "../../src/assets/pexels-kevin-malik-9017408-removebg-preview.png"

function Footer() {
  return (
    <div className="">
      <div className="head text-black text-center p-10  ">
        <p className="text-lg mt-28">Reveal your thoughts</p>
        <h1 className="text-3xl font-bold">Ready to start your</h1>
        <h1 className="text-3xl font-bold">project?</h1>
        <button className="bg-red-500 mt-5 text-white py-2 px-4 rounded hover:bg-red-700 transition">
          view case
        </button>
      </div>

      <div className="footer text-black py-8 px-4">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="sec w-full sm:w-1/3 mb-10">
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
              © mayabytes 2023, All rights reserved.
            </h1>
          </div>

          <div className="img w-full sm:w-1/3 mb-6 bg-gray-700 h-40">
            <img src={image2} alt="" />
          </div>

          <div className="contact w-full sm:w-1/3 mb-6">
            <h6 className="text-lg font-semibold mb-4 text-right">
              Get in touch
            </h6>
            <h1 className="text-md text-right">
              Email:
              <a
                href="mailto:jyot2999@gmail.com"
                className="hover:text-gray-400"
              >
                jyot2999@gmail.com
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
