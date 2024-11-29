import React, { useState } from "react";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { fadeIn } from "../../src/Varients";
import videoSrc from "../../src/assets/loaderblack.webm";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function Terms(props) {
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
      <div className="header ">
        <div className=" flex  justify-between items-center pl-14 pr-20 px-4 py-9">
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

          <div className="details text-xs">
            <h1 className="pt-32 text-white font-semibold">GET IN TOUCH</h1>
            <h1 className="text-white ">Email : info@tripleRconsulting.net</h1>
            <h1 className="text-white text-sm">Ph : +91 7018324802</h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-28 font-serif">
        <div className="top pt-16">
          <h6 className="font-bold text-3xl sm:text-4xl text-[#39FF14]">
            Terms and Conditions
          </h6>
          <p className="pt-5 text-justify text-base sm:text-lg">
            Welcome to Triple R Consulting. These Terms and Conditions (“Terms”)
            govern your access to and use of our website and services, including
            Web Design, Digital Marketing, Email Marketing, Social Media
            Marketing, PPC, and SEO services (collectively referred to as
            “Services”). By using our website and engaging in our Services, you
            agree to comply with and be bound by these Terms. If you do not
            agree with these Terms, please do not use our website or services.
          </p>
        </div>
        <h6 className="text-bg font-bold text-3xl pt-5">Acceptance of Terms</h6>
        <p className="text-sm text-justify sm:text-base">
          By accessing or using our website or services, you accept and agree to
          these Terms and Conditions. We may update or modify these Terms from
          time to time, and your continued use of our website and services after
          such changes will constitute your acceptance of the updated Terms.
        </p>
        <div className="choose flex flex-col sm:flex-row gap-10 font-serif pt-10">
          <div className="chooseUs sm:w-1/2">
            <h1 className="text-bg font-bold text-3xl">
              Client Responsibilities
            </h1>
            <ul className="list-disc text-justify pl-5 text-sm sm:text-base">
              <li>
                Provide Accurate Information: You agree to provide accurate,
                complete, and up-to-date information for the successful delivery
                of services.
              </li>
              <li>
                Content: You retain ownership of all content you provide us
                (such as text, images, logos, and videos) and grant us the
                necessary permissions to use that content solely for the
                purposes of fulfilling our contractual obligations.
              </li>
              <li>
                Compliance with Laws: You agree that all content provided for
                digital marketing, web design, and other services complies with
                applicable laws, including intellectual property and privacy
                laws.
              </li>
            </ul>
          </div>
          <div className="who sm:w-1/2">
            <h1 className="text-bg font-bold text-3xl">Payment and Billing</h1>
            <ul className="list-disc text-justify pl-5 text-sm sm:text-base">
              <li>
                Fees: Our Services are subject to fees as outlined in the
                agreement or proposal. Fees for ongoing services such as digital
                marketing campaigns or SEO services are typically billed on a
                recurring basis (monthly, quarterly, etc.).
              </li>
              <li>
                Payment Terms: All payments must be made according to the
                payment schedule agreed upon in the service agreement. Late
                payments may incur penalties or service interruptions.
              </li>
              <li>
                Refund Policy: Due to the nature of the services provided, we
                generally do not offer refunds. If you have concerns regarding
                your services, please contact us directly, and we will make
                reasonable efforts to address your concerns.
              </li>
            </ul>
          </div>
        </div>

        <h6 className="text-bg font-bold text-3xl pt-5">
          Third-Party Services
        </h6>
        <p className="text-sm text-justify sm:text-base">
          Our website may contain links to third-party websites or services that
          are not owned or controlled by Triple R Consulting. We do not endorse
          or assume any responsibility for any third-party websites or services.
          You acknowledge and agree that we are not responsible for the
          availability or content of these third-party resources.
        </p>

        <h6 className="text-bg font-bold text-3xl pt-5">Privacy Policy</h6>
        <p className="text-sm text-justify sm:text-base">
          Your use of our website and services is also governed by our Privacy
          Policy, which can be found here. Please review our Privacy Policy to
          understand how we collect, use, and protect your personal information.
        </p>

        <h6 className="text-bg font-bold text-3xl pt-5">
          Changes to These Terms
        </h6>
        <p className="text-sm text-justify sm:text-base">
          We may update or revise these Terms from time to time. When we make
          changes, we will post the updated Terms on this page and update the
          “Effective Date” at the top. We encourage you to review this page
          periodically for any updates.
        </p>
        <h6 className="text-bg font-bold text-3xl pt-5">Contact Us</h6>
        <p className="pb-10 text-sm sm:text-base">
          If you have any questions about these Terms and Conditions or the
          Services we provide, please contact us at:
          <h6 className="text-sm font-bold text-right sm:text-base">
            Email : info@tripleRconsulting.net
          </h6>
        </p>
      </div>

      <div className="footer bg-[#4D869C]">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="head text-black text-center"
        >
          <p className="text-lg sm:text-xl text-black font-semibold pt-24">
            Reveal your thoughts
          </p>
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Ready to start your
          </motion.h1>
          <motion.h1
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            project?
          </motion.h1>

          <div className="flex justify-center items-center relative">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-rotate-svg w-32 sm:w-40 h-32 sm:h-40"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -20, 0
        a 20,20 0 1,1 40, 0
        a 20,20 0 1,1 -40, 0"
                fill="transparent"
              />

              <text className="text-[4.9px] sm:text-[5px] fill-current text-black">
                <textPath href="#circlePath" startOffset="0%">
                  | TripleRConsulting | TripleRConsulting | TripleRConsulting
                </textPath>
              </text>
            </svg>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="absolute text-center text-sm bg-black text-white w-12 h-12 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center"
            >
              Let's
              <br />
              Talk
            </button>
          </div>
        </motion.div>

        <div className="footer text-black ">
          <div className="container mx-auto sm:flex flex-col sm:flex-row justify-between">
            <div className="w-full sm:w-1/3 sm:block hidden">
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
            <div className="contact w-full sm:w-1/3 sm:text-center pr-6">
              <h6 className="text-lg pt-28 font-semibold text-right">
                Get in touch
              </h6>
              <h1 className="text-md text-right">
                Email
                <a
                  href="mailto:jyot2999@gmail.com"
                  className="hover:text-gray-400"
                >
                  : info@tripleRconsulting.net
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
  );
}

export default Terms;
