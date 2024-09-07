import React from "react";
import  image from "../../src/assets/icon-7100795_1280.jpg"

function Clients() {
  return (
    <div>
      <div className="top flex pl-52 gap-20 bg-[#FF8C00]">
        <div className="text-black text-left bg-[#FF8C00]" >
          <h1 className="text-6xl font-bold">Our Happy</h1>
          <h1 className="text-6xl font-bold">Clients</h1>

          <p className=" w-96 text-sm mt-10 pl-44">
            We help our valuable clients build a remarkable brand that becomes
            the talk of the town.
          </p>
        </div>
        <div className="flex">
          <img src={image} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="car">
        
      </div>


    </div>
  );
}

export default Clients;
