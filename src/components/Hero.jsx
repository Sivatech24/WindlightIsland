
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://apgy.in/yt/RSEtcHDDhcg"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold">Windlight Island</h1>
        <p className="mt-4 text-xl max-w-2xl">
          Windlight Island is a third-person exploration and puzzle-adventure game set in a beautifully crafted Mediterranean coastal environment.
        </p>
      </div>
    </section>
  );
};

export default Hero;
