import React from "react";
import image1 from "../../src/assets/ai-generated-8131429_1280.png";

function Section() {
  return (
    <div className="snap-y snap-mandatory  overflow-scroll touch-auto overflow-y-auto" id="section two">
      <div className="snap-start" style={{ backgroundColor: "blue" }}>
        <div className="top flex pl-5 gap-10">
          <div className="flex ">
            <img src={image1} alt="" className="w-full h-full  " />
          </div>
          <div
            className=" bg-white text-white text-justify mt-28 pr-20"
            style={{ backgroundColor: "blue" }}
          >
            <h1 className="text-6xl font-bold">Strategic</h1>
            <h1 className="text-6xl font-bold">branding that</h1>
            <h1 className="text-6xl font-bold">helpstand out!</h1>
            <p className="mt-4 w-96 text-sm">
              You take on the business burden. In the meantime, we will help
              your business grow with eye-catching website designs, which are
              second to none!
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-red-500 mt-5 text-white py-2 px-4 rounded hover:bg-red-700 transition"
            >
              view case
            </button>
          </div>

          <div className="heading mt-64 text-justify text-white">
            <ul className="">
              <li>
                <p className="text-sm">WebDesign</p>
              </li>
              <li>
                <p classname="text-sm">Socialmedia</p>
              </li>
              <li>
                <p className="text-sm">Seo</p>
              </li>
              <li>
                <p className="text-sm">Email</p>
              </li>
              <li>
                <p className="text-sm">Content</p>
              </li>
              <li>
                <p className="text-sm">DigitalMarketing</p>
              </li>
              <li>
                <p classname="text-sm">ppc</p>
              </li>
            </ul>
          </div>
           {/* <nav className="heading pt-16 text-black text-sm">
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
            </nav>  */}
        </div>
      </div>
    </div>
  );
}

export default Section;
