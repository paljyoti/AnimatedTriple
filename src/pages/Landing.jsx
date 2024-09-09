import React from 'react';

function Landing() {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth">
      <div className="flex-shrink-0 snap-start w-full h-screen bg-red-400 flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 1</h1>
      </div>
      <div className="flex-shrink-0 snap-start w-full h-screen bg-blue-400 flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 2</h1>
      </div>
      <div className="flex-shrink-0 snap-start w-full h-screen bg-green-400 flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 3</h1>
      </div>
      <div className="flex-shrink-0 snap-start w-full h-screen bg-yellow-400 flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 4</h1>
      </div>
    </div>
  );
}

export default Landing;
