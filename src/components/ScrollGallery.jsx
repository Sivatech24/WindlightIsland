import React from 'react';

const imageData = [
  {
    src: 'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/35910ffb378d0f27e80cad2cef48d53b82b34b64/Images/4.png',
    title: 'Find the 3 Hidden Lanterns',
    description: '🪵 Lantern of the Forest, ⛰️ Lantern of the Hills and 🌊 Lantern of the Shore.'
  },
  {
    src: 'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/35910ffb378d0f27e80cad2cef48d53b82b34b64/Images/6.png',
    title: 'Reach the Sealed Cave',
    description: 'Place the Lanterns in the three pedestals around the entrance.'
  },
  {
    src: 'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/35910ffb378d0f27e80cad2cef48d53b82b34b64/Images/7.png',
    title: 'Unlock the Treasure',
    description: 'Enter the cave to discover the final treasure'
  }
];

const ScrollGallery = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Game Highlights</h2>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {imageData.map((item, idx) => (
            <div key={idx} className="bg-gray-900 rounded-lg shadow-lg flex flex-col">
              <img src={item.src} alt={item.title} className="w-full h-56 object-cover rounded-t-lg" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollGallery;