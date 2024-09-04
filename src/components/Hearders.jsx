import React from "react";
import image from "../../src/assets/people-5579977_1280.png";


function Header() {
  return (
    <div className="" >
      <div className="top flex pl-52 gap-20 w-full h-full  mt-3  ">
        <div className=" bg-white text-black text-left mt-16">
          <h1 className="text-6xl font-bold">Triple  <span className="text-8xl text-[#39FF14]">R</span></h1>
          <h1 className="text-6xl font-bold">Consulting</h1>
          {/* <h1 className="text-6xl font-bold">brand</h1> */}
          <p className="mt-4 w-96 text-sm">
          {/* Designs that empower your brand */}
            Adding wings to your brand through sparkling ideas, holistic
            branding concepts, extraordinary and handcrafted designs. We
            collaborate with companies to create remarkable digital experiences.
          </p>
        </div>
    
        <div className="flex">
          <img src={image} alt="" className="w-full h-full " />
        </div>
      </div>
      <div className="container flex mx-auto  space-x-24 p-4 mt-12">
        <div className="text-left mb-6 pl-28">
          <p className="text-black text-sm w-96">
            Creative agency in Houston made with loads of love and dedication in
            Houston, TX.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <button className="bg-black text-white w-16 h-16 rounded-full hover:bg-[#39FF14] hover:text-black transition flex items-center justify-center text-center">
            Let's
            <br />
            Talk
          </button>
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
