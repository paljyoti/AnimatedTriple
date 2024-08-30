import React from "react";
import image from "../../TripleR/src/assets/people-5579977_1280.png";

function Header() {
  return (
    <div>
      <div className="top flex pl-52 gap-20">
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
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition">
            Let's talk
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
