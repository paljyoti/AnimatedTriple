import React, { useRef, useState, useEffect } from 'react';

function Loader({ videoSrc, content }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // New state for loading

    useEffect(() => {
        // Automatically play the video when the component mounts
        if (videoRef.current) {
            setIsPlaying(true);
            setIsLoading(true); // Show loading before playing

            // Start playing the video
            videoRef.current.play();

            // Show content after 10 seconds
            const timer = setTimeout(() => {
                videoRef.current.pause(); // Pause the video
                setIsPlaying(false); // Hide video
                setShowContent(true); // Show content
            }, 4000); // 2 seconds

            // Cleanup timer on unmount
            return () => clearTimeout(timer);
        }
    }, []);
       
    const handleLoadedData = () => {
        setIsLoading(false); // Hide loading when video is ready
    };

    return (
        <div>   
            {isLoading && <div className="pre-loader"></div>} {/* Pre-loader */}
            <video
                ref={videoRef}
                src={videoSrc}
                // controls  
                onLoadedData={handleLoadedData} // Event to handle when video is ready
                style={{ display: isPlaying ? 'block' : 'none', width: '100vw', height: '100vh', objectFit:"cover",overflow:"hidden" }}
            />
            {showContent && <div>{content}</div>}
            
        </div>
    );
}

export default Loader;
