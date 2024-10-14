import React from "react";
import Loader from "./Loader"; // Ensure this path is correct for your project
import videoSrc from "../../src/assets/blackNwhite.mp4"; // Correct path for your video file

function AboutUs() {
    const content = <p>This is the content displayed after the video ends.</p>;

    return (
        <div>
            {/* <h1>About Us</h1>  */}
            <Loader videoSrc={videoSrc} content={content} />


        </div>
    );
}

export default AboutUs;
