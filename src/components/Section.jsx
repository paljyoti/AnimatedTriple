import React from "react";
import  image1  from "../../src/assets/ai-generated-8131429_1280.png";
import { useNavigate } from "react-router-dom";

function Section() {
const navigate = useNavigate();

  return (

    <div>
    <div className="w-full h-full">
      <div className="top flex pl-5 gap-10">
        <div className="flex " >
          <img src={image1} alt="" className="w-full h-full  " />
        </div>
        <div className=" bg-white text-black text-justify mt-28 pr-20">
          <h1 className="text-6xl font-bold">Strategic</h1>
          <h1 className="text-6xl font-bold">branding that</h1>
          <h1 className="text-6xl font-bold">helpstand out!</h1>
          <p className="mt-4 w-96 text-sm">
            You take on the business burden. In the meantime, we will help your
            business grow with eye-catching website designs, which are second to
            none!
          </p>
          {/* <button onClick={()=>navigate('/contact')} className="bg-red-500 mt-5 text-white py-2 px-4 rounded hover:bg-red-700 transition">
            view case
          </button> */}


   


        </div>



        <div className="flex items-center justify-center h-screen bg-gray-800">
      <svg className="w-64 h-64" viewBox="0 0 200 200">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text className="fill-white text-lg font-bold">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            Circular Text Example
          </textPath>
        </text>
      </svg>
    </div>




        <div className="heading mt-64 text-justify text-white">
            <ul className="">
                <li><p className="text-sm">WebDesign</p></li>
                <li><p classname="text-sm">Socialmedia</p></li>
                <li><p className="text-sm">Seo</p> </li>
                <li><p className="text-sm">Email</p></li>
                <li><p className="text-sm">Content</p></li>
                <li><p className="text-sm">DigitalMarketing</p></li>
                <li><p classname="text-sm">ppc</p></li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Section;
