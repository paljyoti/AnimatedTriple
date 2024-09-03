import React from "react";
import Navbar from "../components/Navbar";
import ReactCurvedText from "react-curved-text";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="top flex pl-52 gap-20 mt-10">
        <div className=" bg-white text-black text-left mt-16">
          <p className="text-sm">Contact Us</p>
          <h1 className="text-6xl font-bold">Why not hit us</h1>
          <h1 className="text-6xl font-bold">up for</h1>
          <h1 className="text-6xl font-bold">assistance?</h1>
          <p className="mt-4 w-96 text-sm">
            Design is more than how something appears. Design is how it works.
            Want your brand to be on the upswing? Let us create a website that
            would take it there. Maximize engagement and make your business
            future-proof.
          </p>
        </div>

      
        <div className="flex">
          {/* <img src={image} alt="" className="w-full h-full" /> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
