import React from "react";
import image from "../../src/assets/people-5579977_1280.png";
import ReactCurvedText from "react-curved-text";

function Header() {




  return (
    <div>
      <div className="top flex pl-52 gap-20 mt-10">
        <div className=" bg-white text-black text-left mt-16">
          <h1 className="text-6xl font-bold">Designs that</h1>
          <h1 className="text-6xl font-bold">empower your</h1>
          <h1 className="text-6xl font-bold">brand</h1>
          <p className="mt-4 w-96 text-sm">
            Adding wings to your brand through sparkling ideas, holistic
            branding concepts, extraordinary and handcrafted designs. We
            collaborate with companies to create remarkable digital experiences.
          </p>
        </div>

        <div className="flex">
          <img src={image} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="container flex mx-auto  space-x-24 p-4 mt-12">
        <div className="text-left mb-6 pl-14">
          <p className="text-black text-sm w-96">
            Creative agency in Houston made with loads of love and dedication in
            Houston, TX.
          </p>
        </div>
        <div className="flex justify-center mb-6">
  <button  className="bg-black text-white w-16 h-16 rounded-full hover:bg-red-700 transition flex items-center justify-center text-center">
    Let's
    <br />
    Talk
  </button>



  
</div>







        <div className="col-lg-3 right-clumn">
              <div className="">
                <div className="w-full relative ">
                  {/* <img src="/light/assets/imgs/intro/person-front-computer-working-html.jpg" alt="" />   */}
                  {/* <img src="/light/assets/imgs/intro/Untitled_design__1_-removebg-preview.png" className="absolute bottom-0 right-0" alt="" /> */}
                  <a href="" className="vid">
                      <div className="rotate-circle fz-30 text-u">
                        <svg className="textcircle" viewBox="0 0 500 500">
                          <defs>
                            <path
                              id="textcircle"
                              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                            ></path>
                          </defs>
                                
                          <text>
                            <textPath xlinkHref="#textcircle" textLength="900">
                              Explore More - Explore More -
                            </textPath>
                          </text>
                        </svg>
                      </div>
                  {/* <div className="icon">
                    <i className="fas fa-play"></i>
                  </div> */}
                </a>
                </div>
              </div>
            </div>








        <div className="text-right">
          <p className="text-black w-96 text-sm">
            Weaving together creativity and practical ways to link people to
            cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
