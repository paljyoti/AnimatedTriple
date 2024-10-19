import React from "react";
import Loader from "./Loader";
// import videoSrc from "../../src/assets/blackNwhite.mp4";
import videoSrc from "../../src/assets/loaderblack.webm"
import image from "../../src/assets/business-5475661_1280.jpg";
import image1 from "../../src/assets/social-media-4140959_1280.jpg"
import image2 from "../../src/assets/content-marketing-4111003_1280.jpg";
import image3 from "../../src/assets/digital-7971754_1280.jpg";
import image4 from "../../src/assets/woman-1446557_1280.jpg";
import image5 from "../../src/assets/business-5475659_1280.jpg"

function Blog() {
  return (
    <div className="">
        <Loader videoSrc={videoSrc} />
        <div className="bg-black">
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
